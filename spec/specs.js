describe('pigLatinTranslator', function() {
  it("adds 'ay' to the end of a word that starts with a vowel", function() {
    expect(pigLatinTranslator("apple")).to.equal("appleay");
  });

  it("takes a single consonant at the beginning of the word and moves it to the end", function() {
    expect(pigLatinTranslator("cat")).to.equal(true);
  });

});
