import Taro from "@tarojs/taro";

class PostpageFn {
    request_url: string
    post_id: string
    user_id: string // 本机用户 id

    constructor( request_url: string, post_id: string, user_id: string ) {
        this.request_url = request_url;
        this.post_id = post_id;
        this.user_id = user_id;
    }

    async getPostContent() {
        const postRes = await Taro.request({
            method: 'GET',
            url: `${this.request_url}/v1/posts?post_id=${this.post_id}&user_id=${this.user_id}`,
            header: {
                authorization: Taro.getStorageSync('token')
            },
        })

        console.log(postRes.data.data.post);

        return postRes.data.data.post;
    }
}

export default PostpageFn;