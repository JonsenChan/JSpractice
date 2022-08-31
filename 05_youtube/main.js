let player; // Youtube Player
let currentPlay = 0;// 紀錄目前撥到第幾首歌

// Youtube API Ready
function onYouTubeIframeAPIReady() {
    // console.log("YT READY!");
    player = new YT.Player("player", {
        height: "390",
        width: "640",
        videoId: playList[currentPlay],
        playerVars: {
            autoplay: 0, //是否自動播放
            controls: 0, //是否顯示控制項目
            start: playTime[currentPlay][0], //開始秒數
            end: playTime[currentPlay][1], //結束秒數
            iv_load_policy: 3
        },
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        }
    });

}

// Youtube Player Ready
function onPlayerReady(event) {
    $("#playButton").on("click", function () {
        $("h2").text(player.getVideoData().title);
        player.playVideo();
    })
}

// Player State Change
function onPlayerStateChange(event) {
    if (Math.floor(player.getCurrentTime()) == playTime[currentPlay][1]) {
        if (currentPlay < playList.length - 1) {
            currentPlay++;
            player.loadVideoById({
                videoId: playList[currentPlay],
                startSeconds: playTime[currentPlay][0],
                endSeconds: playTime[currentPlay][1],
                suggestedQuality: "large"
            });
        } else {
            currentPlay = 0;
            player.cueVideoById({
                videoId: playList[currentPlay],
                startSeconds: playTime[currentPlay][0],
                endSeconds: playTime[currentPlay][1],
                suggestedQuality: "large"

            });
        }
    }
    if (event.date==1){
        $("h2").text(player,getVideoDat().title);
    }
}