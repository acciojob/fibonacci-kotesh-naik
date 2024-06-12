function fibonacci(num) {
// your code here
	if(num === o || num === 1)
		return num;
	//recursive case
	return fibonacci(num -1) + fibonacci(num -2);
}

module.exports = fibonacci;
