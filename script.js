function fibnocci(num) {
// your code here
	if(num === 0 || num === 1)
		return num;
	//recursive case
	return fibnocci(num - 1) + fibnocci(num - 2);
}

module.exports = fibnocci;
