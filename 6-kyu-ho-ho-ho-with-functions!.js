// https://www.codewars.com/kata/52af1f150fcae8d33d0009bc/train/javascript

function ho() {
  if (arguments.length === 0) {
    return 'Ho!'
  } else {
    return 'Ho ' + arguments[0];
  }
}

console.log(ho(ho(ho())));
