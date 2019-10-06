let num = "12346";

let generateNum = data => {
  let rev = [];
  let revA = [];
  for (let tes = data.length + 1; tes > 0; tes--) {
    rev.push(tes);
  }
  for (let tes = rev.length - 1; tes >= 0; tes--) {
    revA.push(rev[tes]);
  }
  return revA;
};

let checkNumber = data => {
  let save = [];
  for (let init = 0; init < data.length; init++) {
    save.push(parseInt(data[init]));
  }
  return save;
};

let mainProcess = data => {
  let gen = generateNum(data);
  for (let init = 0; init < data.length; init++) {
    if (parseInt(data[init]) !== parseInt(gen[init])) {
      return gen[init];
    }
  }
};

console.log(mainProcess(num));
