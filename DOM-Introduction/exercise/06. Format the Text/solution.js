function solve() {

  const input = document.getElementById('input').value;
  const splittedInput = input.split('.').filter((sentence) => sentence != '');
  const output = document.getElementById('output');

  for (let i = 0; i < splittedInput.length; i += 3) {
    let arr = [];

    for (let y = 0; y < 3; y++) {

      if (splittedInput[i + y]) {
        arr.push(splittedInput[i + y])
      }

    }
    let paragraph = arr.join('. ') + '.';
    output.innerHTML += `<p>${paragraph}</p>`;

  }


}