var pigLatinTranslator = function(word) {
  var consonants = /[aeiou]/gi;
  if(word[0].match(consonants)) {
    return word + "ay";
  } else {
    var newWord = word.substring(1) + word[0] + "ay";
    return newWord;
  }
};

var phraseSplitter = function(phrase) {
return phrase.split(" ");
};

var pigLatin = function(phrase) {
  var translatedSentence = "";
  var splitPhrase = phraseSplitter(phrase);
  for (var i = 0; i < splitPhrase.length; i++) {
    var word = splitPhrase[i];
    var newWord = pigLatinTranslator(word);
    translatedSentence = translatedSentence + newWord + " ";
 } return translatedSentence;
};


$(document).ready(function() {
  $("form#translator").submit(function(event) {
    var phrase = $("input#phrase").val();
    var result = pigLatin(phrase);

    $(".phraseResult").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
