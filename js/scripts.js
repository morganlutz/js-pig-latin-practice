var pigLatinTranslator = function(word) {
  var consonants = /[bcdfghjklmnpqrstv]/i;
  if(word[0].match(consonants)) {
    return true;
  } else {
    return false;
  }
  //return word + "ay";

};


$(document).ready(function() {
  $("form#translator").submit(function(event) {
    var phrase = $("input#phrase").val();
    var result = pigLatinTranslator(phrase);

    $(".phrase").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
