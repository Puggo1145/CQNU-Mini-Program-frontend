const timeStrToDate = (timeStr: string): string => {
    const date = new Date(timeStr);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    let hours: string | number = date.getHours();
    let minutes: string | number = date.getMinutes();
    let seconds: string | number = date.getSeconds();

    // 补0
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    const parsedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    return parsedDate;
};

export default timeStrToDate;