// IOS 不支持 2023-1-1 日期格式，需要替换为 2023/1/1，即 / 符号
export const newDateForIOS = (timeStr: string) => {
    return new Date(timeStr.split('-').join('/'));
};