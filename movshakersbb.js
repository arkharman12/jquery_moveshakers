/**********
TITLE: Movers & Shakers  
AUTHOR: Harmanjot Singh (HS)
PURPOSE: Movers & Shakers Assignment
ORIGINALLY CREATED ON: 1 April 2019
LAST MODIFIED ON: 1 April 2019
LAST MODIFIED BY: Harmanjot Singh (HS)
MODIFICATION HISTORY: Original Build
**********/

$(document).ready(function() {

    // Image fieldset
    $("#buttonShow").click(imageShow);
    $("#buttonHide").click(imageHide);
    $("#buttonToggle").click(imageToggle);

    // Slide fieldset
    $("#buttonSlideUp").click(slideUp);
    $("#buttonSlideDown").click(slideDown);

    // Fade fieldset
    $("#buttonFadeIn").click(fadeIn);
    $("#buttonFadeOut").click(fadeOut);

    // Movement fieldset
    $("#buttonLeft").click(left);
    $("#buttonRight").click(right);
    $("#buttonTop").click(imageTop);
    $("#buttonBottom").click(bottom);
    $("#buttonNudgeLeft").click(nudgeLeft);
    $("#buttonNudgeRight").click(nudgeRight);
    $("#buttonGlide").click(glide);
    $("#buttonShake").click(shake);
    $("#buttonReset").click(reset);

    // Image fieldset
    function imageShow() {
        $("#battle-ship").show(800);
    }

    function imageHide() {
        $("#battle-ship").hide(800);
    }

    function imageToggle() {
        $("#battle-ship").toggle(800);
    }

    // Slide fieldset
    function slideUp() {
        $("#battle-ship").slideUp(800);
    }

    function slideDown() {
        $("#battle-ship").slideDown(800);
    }

    // Fade fieldset
    function fadeIn() {
        $("#battle-ship").fadeIn(800);
    }

    function fadeOut() {
        $("#battle-ship").fadeOut(800);
    }

    // Movement fieldset
    function left() {
        $("#battle-ship").animate({ "marginLeft": "-=200px" }, 800);
    }

    function right() {
        $("#battle-ship").animate({ "marginLeft": "+=200px" }, 800);
    }

    function nudgeLeft() {
        $("#battle-ship").animate({ "marginLeft": "-=100px" }, 800);
    }

    function nudgeRight() {
        $("#battle-ship").animate({ "marginLeft": "+=50px" }, 800);
    }

    function imageTop() {
        $("#battle-ship").animate({ "marginTop": "0" }, 800);
    }

    function bottom() {
        $("#battle-ship").animate({ "marginTop": "650px" }, 800);
    }

    function glide() {
        $("#battle-ship").animate({ "marginLeft": "+=200px", "marginTop": "+=200px" }, 800);
    }

    function shake() {
        $("#battle-ship").animate({ "marginLeft": "+=400px" }, 200);
        $("#battle-ship").animate({ "marginLeft": "-=400px" }, 200);
    }

    function reset() {
        $("#battle-ship").animate({ "marginLeft": "0px", "marginTop": "0px" }, 0);
    }

}); 
