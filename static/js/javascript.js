var colors = {F: "#eb2f2e", O: "#f49d26", S: "#2eb150", Z: "#3a509f"};

$(document).ready(function(){
  /*window.addEventListener("DOMContentLoaded", function () {
    $('.tiny button').click(function(){
      $("reset_button").addEventListener("click",function(){
        $("letter_reset").submit();
      });
    });
  });*/
  $('#letter_reset').on('click', function(event){
    event.preventDefault();
    $("#fossF").css("color", colors.F);
    $("#fossO").css("color", colors.O);
    $("#fossS").css("color", colors.S);
    $("#fossZ").css("color", colors.Z);
    $("#letter_reset").submit();
  });
var selected = "";
$(".fossL").click(function() {
if(selected == $(this).prop("id")) {
    selected = "";
    $(".fossL .letterStroke").css("stroke", "black");
    $("#colorSelector").hide();
} else {
    selected = $(this).prop("id");
    $('#id_letter').val(selected.substr(-1))
	$(".fossL .letterStroke").css("stroke", "black");
	$("#colorSelector").show();
  var colorText = $(this).css("color");
  $('#cp1').colorpicker({
    inline:true,
    format: "rgba",
    useAlpha: false,
  }).on('colorpickerChange colorpickerCreate', function (e) {
        colorText = e.color.toString(e.color.toRgbString);
        r = e.color.toRgb().r;
        g = e.color.toRgb().g;
        b = e.color.toRgb().b;
        $("#" + selected).css("color", colorText);
        $('#id_cur_r').val(r);
        $('#id_cur_g').val(g);
        $('#id_cur_b').val(b);
        $('#id_letter').val(selected.substr(-1));
        $("#letter_update").submit();
      });

        // potential outline TODO e.color.complement().toRgbString());
	//$("#" + selected + " .letterStroke").css("stroke", colorText);
  $(this).find(".letterStroke").css("stroke", colorText);
}
});
});

function letter_update(){
  $.ajax({
    url : "letter_update",
    type : "POST",
    data: { the_post : $('#letter_update').val()},

    // success: function(json) {
    //   $('letter_update').val('');
    //   console.log(json);
    //   console.log("success");
    // },
    // error : function(xhr,errmsg,err) {
    //     $('#results').html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: "+errmsg+
    //         " <a href='#' class='close'>&times;</a></div>"); // add the error to the dom
    //     console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
    // }
  });
};

function letter_reset(){
  $.ajax({
    url : "letter_reset",
    type : "get",
    // data: { the_reset : $('#letter_reset').val()},

    // success: function(json) {
    //   alert(data);
    //   // $('letter_reset').val('');
    //   console.log(json);
    //   console.log("success");
    // },
    // error : function(xhr,errmsg,err) {
    //     $('#results').html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: "+errmsg+
    //         " <a href='#' class='close'>&times;</a></div>"); // add the error to the dom
    //     console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
    // }
  });
};
