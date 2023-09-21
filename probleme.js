// Functie pentru a vorbi cu pasarile
// Buna, tu ce parere ai despre sistemul american de supraveghiere?
// TODO elimina whitespace si punctuatiile din string prima data

function vorbiPasare(str) {
  let rez = [];
  let lStr = str
    .replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '')
    .split(' ')
    .join('')
    .toLowerCase();
  for (let i = 0; i < lStr.length; i += 2) {
    if (!lStr[i + 1]) {
      rez.push(lStr[i] + `pa`);
    } else {
      rez.push(lStr[i] + lStr[i + 1] + 'pa');
    }
  }
  return rez.join(', ');
}
