//We need two arrays that are available across functions
var primes = [];
var factors = [];

//This function sorts out what numbers are factors of the number in question, starting with its square root.
function isFactor() {
    for (k = Math.floor(Math.sqrt(600851475143)); k > 1; k--) {
        if(600851475143 % k === 0) {
           factors.push(k);
        }
    }
}


//This function cycles through the array, checking to see which are primes.
function cyclePrime(knownFactors) {
    for (j = knownFactors.length - 1; j > 0; j--) {
        isPrime(knownFactors[j]);
    }
}


//This function checks if a number is prime. Because we're only checking known factors, this is pretty quick.
//Any candidate that is indeed a prime is added to an array of primes.

function isPrime(candidate) { 

//See if the number divides evenly into any other number)
    var divisors = [];
    for (i = candidate - 1; i > 1; i--) {
        divisors.push(candidate % i);
    }
//If it does not, add it to an array of primes
    if(divisors.indexOf(0) == -1) {
        primes.push(candidate);
    }
}

//call our functions
isFactor();
cyclePrime(factors);

//print the largest of the prime factors:
console.log(primes[primes.length-1]);