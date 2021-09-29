function solve() {

  // Get the input
  let textElement = document.querySelector('#text');
  let namingConventionElement = document.querySelector('#naming-convention');

  // Parse the data

  let text = textElement.value;
  let namingConvention = namingConventionElement.value;

  // Logic

  let result = applyingConvention(text, namingConvention);

  // Show the result in DOM

  let spanElement = document.getElementById('result');
  spanElement.textContent = result;

  function applyingConvention(text, convention) {
    const conventionSwitch = {
      'Pascal Case': () => text
        .toLowerCase()
        .split(' ')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(''),
      'Camel Case': () => text
        .toLowerCase()
        .split(' ')
        .map((word, i) => word = i !== 0 ? word[0].toUpperCase() + word.slice(1) : word)
        .join(''),
      default: () => 'Error!'

    };

   return (conventionSwitch[convention] || conventionSwitch.default)();
  }
}
