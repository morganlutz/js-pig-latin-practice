var pigLatinTranslator = function(word) {
  var consonants = /[aeiou]/i;
  if(word[0].match(consonants)) {
    return word + "ay";
  } else {
    var newWord = word.substring(1) + word[0] + "ay";
    return newWord;
  }
};

var phraseSplitter = function(phrase) {
  var phrase = phrase.split(" ");
  return phrase;
};

//pass split phrase into this function to return pig latin translations
//of all the words inside the phrase. Return as a string.
var pigLation = function()


$(document).ready(function() {
  $("form#translator").submit(function(event) {
    var phrase = $("input#phrase").val();
    var result = pigLatinTranslator(phrase);

    $(".phraseResult").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
