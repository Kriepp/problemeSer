//! Problema 2
// De cate ori este prezent fiecare litera, simbol chiar si whitespace

const string = `Buna, tu ce parere ai de sistemul american de supravechiere?`;

function numberOfCharacter(string) {
  const characters = string.toLowerCase().split(``);
  const numberOfCharacters = {};
  for (const char of characters) {
    numberOfCharacters[char] = numberOfCharacters[char]
      ? numberOfCharacters[char] + 1
      : 1;
  }
  return numberOfCharacters;
}

const countedCharacters = string.split(``).reduce((allCharacters, char) => {
  const currCount = allCharacters[char] ? allCharacters[char] + 1 : 1;
  return {
    ...allCharacters,
    [char]: currCount + 1,
  };
}, {});
