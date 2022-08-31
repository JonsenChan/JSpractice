$(function () {
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    var topicCount = topic.length;

    // 每一秒1000毫秒、每分鐘60秒、每小時60分鐘、每天24小時
    let millisecsPerDay = 24 * 60 * 60 * 1000;
    for (var x = 0; x < topicCount; x++) {
        let currentDate = new Date(startDate.getTime() + 7 * x * millisecsPerDay);
        // let currentDate = new Date(startDate.getTime() + 7 * x * millisecsPerDay).toLocaleDateString();
        $("#courseTable").append(
            `<tr><td>${x + 1}</td><td>${currentDate.getMonth()+1}/${currentDate.getDate()}</td><td>${topic[x]}</td></tr>`);
        // `<tr><td>${x + 1}</td><td>${currentDateString.slice(5)}</td><td>${topic[x]}</td></tr>`);
        // `<tr><td>${x + 1}</td><td>${currentDateString.split("/")[1]}/${currentDateString.split("/")[2]}</td><td>${topic[x]}</td></tr>`);
    }
});
