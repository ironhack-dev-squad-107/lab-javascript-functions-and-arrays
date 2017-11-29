describe('Find the maximum - maxOfTwoNumbers', function () {
  it('Defines maxOfTwoNumbers', function () {
    expect(typeof maxOfTwoNumbers).toBe('function');
  });

  it('First parameter larger', function () {
    expect(maxOfTwoNumbers(2, 1)).toBe(2);
  });

  it('Second parameter larger', function () {
    expect(maxOfTwoNumbers(1, 3)).toBe(3);
  });

  it('First and Second parameter equal', function () {
    expect(maxOfTwoNumbers(4, 4)).toBe(4);
  });
});

describe('Finding Longest Word - findLongestWord', function () {
  it('Defines findLongestWord', function () {
    expect(typeof findLongestWord).toBe('function');
  });

  it('returns undefined with an empty array', function () {
    expect(findLongestWord([])).toBe(undefined);
  });

  it('returns the word with an 1-word array', function () {
    expect(findLongestWord(['foo'])).toBe('foo');
  });

  it('returns the first occurrence word when longest have multiple occurrences ', function () {
    expect(findLongestWord(['foo', 'bar'])).toBe('foo');
    expect(findLongestWord(['bar', 'foo'])).toBe('bar');
  });

  it('returns the longest occurrence when it has multiple words', function() {
    var words = ['a', 'zab', '12abc', '$$abcd', 'abcde', 'ironhack'];
    for(var i=0; i<10; i++) {
      words = shuffle(words);
      expect(findLongestWord(words)).toBe('ironhack');
    }
  });
});

function shuffle(array) {
  var counter = array.length;

  while (counter > 0) {
    var index = Math.floor(Math.random() * counter);
    counter--;
    var temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}
