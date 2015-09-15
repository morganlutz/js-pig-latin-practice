describe('pigLatinTranslator', function() {
  it("adds 'ay' to the end of a word that starts with a vowel", function() {
    expect(pigLatinTranslator("apple")).to.equal("appleay");
  });

  it("takes a single consonant at the beginning of the word and moves it to the end", function() {
    expect(pigLatinTranslator("cat")).to.equal("atcay");
  });
});

describe('phraseSplitter', function() {
  it("spilts a phrase into an array of words", function() {
    expect(phraseSplitter("this is split")).to.eql(["this", "is", "split"]);
  });
});

describe('pigLatin', function() {
  it("translates english phrase to pig latin phrase", function() {
    expect(pigLatin("this is split")).to.equal(["isthay isay itsplay"]);
  });
});
