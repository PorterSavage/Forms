$(document).ready(function(){
  $("form#formShout").submit(function(event){
    event.preventDefault();
    var text = $("#inputOne").val();
    $("#output").text(text + " haha you suck.");

  });
});
