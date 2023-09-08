import Taro from "@tarojs/taro";
import PubSub from "pubsub-js";

class PostpageFn {
    request_url: string
    post_id: string
    token: string // 本机用户 id
    deleteCheck: number // 用于删除帖子时的二次确认

    constructor(request_url: string, post_id: string) {
        this.request_url = request_url;
        this.post_id = post_id;
        this.token = Taro.getStorageSync('token');
        this.deleteCheck = 0;
    }

    // 请求帖子内容
    async getPostContent() {
        const postRes = await Taro.request({
            method: 'GET',
            url: `${this.request_url}/v1/posts?post_id=${this.post_id}`,
            header: {
                authorization: this.token
            },
        })

        console.log(postRes.data.data);

        return postRes.data.data;
    }

    // 请求帖子评论
    async getPostComments(sort: number, page: number) {
        const commentRes = await Taro.request({
            method: 'GET',
            url: `${this.request_url}/v1/posts/getComments?post_id=${this.post_id}&sort=${sort}&page=${page}`,
            header: {
                authorization: this.token
            },
        });

        console.log(commentRes.data.data);

        return commentRes.data.data.comments;
    }

    // 点赞与取消点赞，后端自动判断是否点赞
    async likePost() {
        const likeRes = await Taro.request({
            method: 'POST',
            url: `${this.request_url}/v1/posts/likePost`,
            header: {
                authorization: this.token
            },
            data: {
                post_id: this.post_id
            }
        });

        console.log(likeRes.data);
    };

    // 发送评论
    async sendComment(content: string) {
        const res = await Taro.request({
            method: 'POST',
            url: `${this.request_url}/v1/posts/commentPost`,
            header: {
                authorization: this.token
            },
            data: {
                post_id: this.post_id,
                content: content
            }
        });

        Taro.showLoading({
            title: '发送中',
            mask: true
        });
        if (res.statusCode === 201) {
            Taro.showToast({
                title: '评论成功',
                icon: 'success',
                duration: 1500
            });
        } else {
            Taro.showToast({
                title: '评论失败',
                icon: 'none',
                duration: 1500
            });
        }
    };

    // 点赞评论
    async likeComment(comment_id: string) {
        const res = await Taro.request({
            method: 'POST',
            url: `${this.request_url}/v1/posts/likeComment`,
            header: {
                authorization: this.token
            },
            data: {
                comment_id: comment_id
            }
        });

        console.log(res.data);
    };

    // 删除帖子
    async deletePost() {
        if (this.deleteCheck === 0) {
            Taro.showToast({
                title: '再次点击以确认删除',
                icon: 'none',
                duration: 2000
            })
            this.deleteCheck++
            return "click again"

        } else if (this.deleteCheck === 1) {
            const res = await Taro.request({
                method: 'DELETE',
                url: `${this.request_url}/v1/posts/`,
                header: {
                    authorization: this.token,
                },
                data: {
                    post_id: this.post_id,
                },
            })

            if (res.statusCode === 200) {
                Taro.showToast({
                    title: '删除成功',
                    icon: 'success',
                    duration: 2000
                })
                setTimeout(() => {
                    PubSub.publish('refreshPage');
                    Taro.navigateBack()
                }, 2000)
            } else {
                Taro.showToast({
                    title: '删除失败, 请重试',
                    icon: 'none',
                    duration: 2000
                })
            };

            this.deleteCheck = 0;

            return res.data;
        }
    };
}

export default PostpageFn;