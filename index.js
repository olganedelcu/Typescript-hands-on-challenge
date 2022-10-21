// KATA

function permuteAPalindrome(input) {
    console.log(input, input.length);
    if (input.length % 2 === 0) {
      for (let i = 0; i < input.length; i++) {
        const isEven = Array.from(input).filter((e) => e == input[i]).length % 2 === 0;
        if (!isEven) {
          return false; // if not even is not a Palindrome
        }
      }
    } else {
      let counter = 0;
      for (let i = 0; i < input.length; i++) {
        const isEven = Array.from(input).filter((e) => e == input[i]).length % 2 === 0; // in a string you can not use the filter functions only the lenght so that is why you need to convert it into an array
        if (!isEven) {
          counter++;
        }
      }
      if (counter != 1) {
        return false;
      }
    }
    return true;
  }
  