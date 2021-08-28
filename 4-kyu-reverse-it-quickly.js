weirdReverse=a=>[...a].map(a.pop, a);

let b = weirdReverse([5,4,3,2,1]);
for (elem of b) {console.log(elem)};