const form = document.querySelector('form');
const submittedWord = document.querySelector('#submitted-word');
const result = document.querySelector('#result');

form.addEventListener('submit', (e) => {
  // GET INPUT
  let input = submittedWord.value;

  // RUN INPUT THROUGH PALINDROME CHECKER
  let palindromed = palindrome(input);

  // DISPLAY RESULTS
  result.innerHTML = `Result: ${
    palindromed ? "It's a PALINDROME" : 'TRY AGAIN'
  }`;

  // STOP REDIRECT
  e.preventDefault();

  input.value = '';
});

// =====================================
// PALINDROME CHECKER FUNCTION
// =====================================
function palindrome(str) {
  // REMOVE PUNCTUATION
  let punctuationRemoved = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');

  // LOWERCASE ALL CHARACTERS
  let lowerCasing = punctuationRemoved.toLowerCase();

  // REMOVE SPACE
  let spacingRemoved = lowerCasing.replace(/\s/g, '');

  // TEST IF FORWARD MATCHES REVERSE
  function palindromeTest() {
    let forward = spacingRemoved.split('');
    let reverse = spacingRemoved.split('').reverse();

    return forward.join('') === reverse.join('');
  }

  return palindromeTest();
}

// TEST FUNCTION
// console.log(palindrome('eye'));
// console.log('=======================================');
// console.log(palindrome('A man, a plan, a canal. Panama'));
