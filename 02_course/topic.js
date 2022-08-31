var topic = [
    "上課",
    "看電影",
    "上課",
    "繼續睡覺",
    "'上課'",
    "看的到嗎?",
];

var startDate = new Date();
// debugger();
// 設定好活動第一次的日期
function setMonthAndDay(startMonth, startDay) {
    // JS的月份是0~11,所以這邊-1
    startDate.setMonth(startMonth - 1, startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

// 設定第一次活動日期為7月30日
setMonthAndDay(7, 30);