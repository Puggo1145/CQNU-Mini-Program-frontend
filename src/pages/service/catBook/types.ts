export default interface CatType {
    _id: string,
    name: string,
    pics: string[],
    nick_name?: string, // 小名 
    sex: string,
    position: string, // 常出入地
    character: string, // 性格
    appearance: string, // 外貌
    health_condition: string, // 健康状况

    like: number, // 点赞数
}