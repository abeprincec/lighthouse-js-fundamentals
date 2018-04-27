var a = 100;

while (a <= 200) {
  if (a % 3 === 0 && a % 4 === 0) {
    console.log('LoopyLighthouse');
  } else if (a % 4 === 0) {
    console.log('Lighthouse');
  } else if (a % 3 === 0) {
    console.log('Loopy');
  } else {
    console.log(a);
  }
  a = a + 1;
}
