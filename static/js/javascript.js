$(document).ready(function(){
var selected = "";
$(".magicL").click(function() {
if(selected == $(this).prop("id")) {
    selected = "";
    $(".magicL .letterStroke").css("stroke", "black");
    $("#colorSelector").hide();
} else {
    selected = $(this).prop("id");
	$(".magicL .letterStroke").css("stroke", "black");
	$("#colorSelector").show();
  var colorText = $(this).find(".letterFill").css("fill");
  console.log(colorText);
  $('#cp1').colorpicker().on('colorpickerChange colorpickerCreate', function (e) {
        console.log(e.color.toString(e.color.toHex()))
        colorText = e.color.toString(e.color.toHex());
        $("#" + selected + " .letterFill").css("fill", colorText);
      });
        // potential outline TODO e.color.complement().toRgbString());
	//$("#" + selected + " .letterStroke").css("stroke", colorText);
  $(this).find(".letterStroke").css("stroke", colorText);
}
});
