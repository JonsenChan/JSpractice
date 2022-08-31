$(function(){
    // 確認能夠知道使用者按了按鈕
    // $("input") => document.getElementByTagname("input")[0];
    // on => addEventListener
    $("#myButton").on("click",function(){
        // alert("HI");
        var numberOfListItem = $("li").length;
        // 0 ~ 1 * 3 => 0 ~ 3(2.9999..) => floor => 0, 1, 2
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("h1").text($("li").eq(randomChildNumber).text());
        var image=[
            "01_random/images/ramen.jpg",
            "01_random/images/rice.jpg",
            "01_random/images/dumpling.jpg",
            "https://www.mwd.com.tw/upload/mwd/article/e368aa6bf1e04f8ca8f98cb60f7d07b9.png"];
        $("img").attr("src",image[randomChildNumber]);
    });
});