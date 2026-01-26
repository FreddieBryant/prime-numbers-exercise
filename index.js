



// function showPrime(limit) {
//   for (let number = 2; number <= limit; number++) {
//     if (isPrime(number)) console.log(number);
//   }
// }

// function isPrime(number) {
//   for (let factor = 2; factor < number; factor++)
//     if (number % factor === 0)  
//       return false;
 
//   return true;
// }





// Prime (whose factors are only 1 and itself)
// Composite

// 12 + 1, 2, 3, 4, 6, 12
// Can be divided evenly be its factors


showPrime(10);

// function showPrime(limit) {
//   for (let number = 2; number < limit; number++){

//     let isPrime = true;
//     for (let factor = 2; factor < number; factor++){
//       if (number % factor === 0){
//         isPrime = false;
//       }
//     }
//     if (isPrime) console.log(number);
//   }
// }

function showPrime(limit) {
  for (let number = 2; number < limit; number++){
    if (isPrime(number)) console.log(number);
  }
}

function isPrime(number) {
    for (let factor = 2; factor < number; factor++)
      if (number % factor === 0)
        return false;
      
    return true;  
}

