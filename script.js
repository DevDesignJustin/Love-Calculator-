function runCalculation() {
  let p1 = prompt('Who is the first person?');
  let p2 = prompt('Who is the second person?');
  let names = `${p1} ${p2}`;
  let x = 1;
  function checkNames(name, check1, check2, min, max, count) {
    if (name.includes(check1) && name.includes(check2) && x == count) {
      getNumber(min, max);
      x = x + 20;
    }
    else {
      x = x + 1;
    }
  }
  function getNumber(min, max) {
    loveAlert(Math.floor(Math.random() * (max - min) + min + 1));
  }
  function loveAlert(randomNumber) {
    alert(`${p1} and ${p2} love ${randomNumber}%`);
  }
  checkNames(names, 'Justin', p2, 99, 100, 1);
  checkNames(names, p1, 'Justin', 99, 100, 2);
  checkNames(names, 'Will', 'Ally', -10, 1, 3);
  checkNames(names, p1, p2, 0, 100, 4);
}
