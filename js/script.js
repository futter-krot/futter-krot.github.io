function init() {

}
let color = 0;
let current = 0;
 $('#b1').click(function() {
   current += 1
 $("#bar").attr("style", "width: " + current + "%")
});
$('#b2').click(function() {
  current += 3
$("#bar").attr("style", "width: " + current + "%")
});
$('#b3').click(function() {
  current += 7
$("#bar").attr("style", "width: " + current + "%")
});
$(document).ready(init)
