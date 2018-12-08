
function italique (){
    // var element = $("p2");
    $('p').toggleClass("mystyle");
    
}
function gras (){
   // var element = $("p2");
    $('p').toggleClass("bold");
}
function underline(){
    //var element = $("p2");
  $('p').toggleClass("khat");
}


$("#myselect").on("change", function() {
$("#p2").css("font-family", $(this).val());
});
//function myfunction2(){
   // var y = $("myselect2").value;
   // $('p').css('fontSize','y');
    //console.log(y)
//}
$("#myselect2").change(function() {
    $("#p2").css("font-size", $(this).val());
});
