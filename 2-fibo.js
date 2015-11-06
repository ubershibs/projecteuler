var fibo_seq = [];
var total = 0;

var generateFibo = function(sequence) {
	sequence[0] = 1;
	sequence[1] = sequence[0] + sequence[0];

	for (i = 2; i < 33; i++) {
		sequence[i] = sequence[i-2] + sequence[i-1];
	}

	return(sequence);
};

var removeOdds = function(sequence) {
	for(i = 0; i < 33; i++) {
		if(sequence[i]%2!==0) {
			sequence[i] = 0;
		}
	}

	return(sequence);
};

var addArray = function(sequence) {
	for(i = 0; i < 33; i++) {
		total += sequence[i];
	}
	return total;
}

generateFibo(fibo_seq);
removeOdds(fibo_seq);
addArray(fibo_seq);
console.log(total);