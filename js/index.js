console.log("good job Swathi");

$( "ul > li" ).hover(function(){
    $(this).css("font-weight", "bold");
    $(this).css("font-size", "large");
}, function(){
    $(this).css("font-weight","normal");
    $(this).css("font-size", "medium");
});