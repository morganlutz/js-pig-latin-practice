var pigLatinTranslator = function(word) {
  var consonants = /[aeiou]/i;
  if(word[0].match(consonants)) {
    return word + "ay";
  } else {
    var newWord = word.substring(1) + word[0] + "ay";
    return newWord;
  }
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
