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
    {
      x = x + 1;
    }
  }
  function getNumber(min, max) {
    loveAlert(Math.floor(Math.random() * (max - min) + min + 1));
  }
  function loveAlert(randomNumber) {
    alert(`${p1} and ${p2} love ${randomNumber}%`);
  }
  checkNames(names, 'Justin', 'Evie', 90, 100, 1);
  checkNames(names, 'Justin', 'Christina', 80, 90, 2);
  checkNames(names, 'Avi', 'Devina', 80, 100, 3);
  checkNames(names, 'Caden', 'Izzy', 90, 100, 4);
  checkNames(names, 'Lorenzo', 'Izzy', 60, 70, 5);
  checkNames(names, 'Quinn', 'Marco', 80, 100, 6);
  checkNames(names, 'Lorenzo', 'Marco', 80, 100, 7);
  checkNames(names, 'Caden', 'Ryan Reynolds', 99, 100, 8);

  checkNames(names, 'Avi', 'Kimaya', 0, 20, 9);
  checkNames(names, 'James', 'Izzy', 0, 30, 10);
  checkNames(names, 'Will', 'Izzy', 0, 30, 11);
  checkNames(names, p1, p2, 0, 100, 12);
}
