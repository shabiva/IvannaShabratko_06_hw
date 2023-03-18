let a = +prompt('Enter number first', '');
let b = +prompt('Enter number second biggest than first', '');
let h = +prompt('Enter third number which biggest tnan 0','');

if (b <= a) {
  alert("Step b  biggest than a!");
} else if (h <= 0) {
  alert("Step h which biggest tnan 0!");
} else {
  let sumOfFactorials = 0;
  for (let i = a; i <= b; i += h) {
    let factorial = 1;
    for (let j = 1; j <= i; j++) {
      factorial *= j;
    }
      sumOfFactorials += factorial;
      console.log(sumOfFactorials);
  }
  alert("sum factorial " + a + " by " + b + " with step " + h + " equals " + sumOfFactorials);
};