const numberInput = Number(process.argv[2]);
let output = '';


  if ( numberInput % 3 == 0 && numberInput % 5 == 0 ){
    console.log('JavaScript');
  } else if (numberInput % 3 == 0) {
    console.log('Java');
  } else if (numberInput % 5 == 0) {
    console.log('Script');
  } else {
    output = String(numberInput);
  }


console.log(output);

// I was fucking up the order, the double condition needs to be first, not last. 