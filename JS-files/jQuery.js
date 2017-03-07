$(document).ready(function() {
    $(".rules").hide();
    $(".game").hide();
    $(".ruleButton").click(function() {
        $(".homePage").hide();
        $(".rules").show();
    });
    $(".back").click(function() {
        $(".rules").hide();
        $(".game").hide();
        $(".homePage").show();
    });
    $(".gameButton").click(function() {
        $(".homePage").hide();
        $(".game").show();
    });
});