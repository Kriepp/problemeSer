const ending = `pa`;

function join(a, b) {
  if (!a) return ``;
  if (!b) b = `, `;

  let output = ``;
  for (let i = 0; i < a.length; i++) {
    output += i > 0 ? b : ``;
    output += a[i];
  }
  return output;
}

function talkingToBird(str) {
  let lowerStr = str
    .replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '')
    .split(' ')
    .join('')
    .toLowerCase();

  let result = [];
  for (let i = 0; i < lowerStr.length; i += 2) {
    if (!lowerStr[i + 1]) {
      result.push(lowerStr[i] + ending);
    } else {
      result.push(lowerStr[i] + lowerStr[i + 1] + ending);
    }
  }
  return join(result, `, `);
}
