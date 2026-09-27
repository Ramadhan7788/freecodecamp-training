function pyramid (char, num, isReverse) {
	const characters = [];
	for (let i = 1; i <= num; i++) {
		let character = '';
		let space = '';
		const totalChar = 2 * i - 1;
		const totalSpace = num - i;
		
		for (let j = 0; j < totalChar; j++) {
			character += char;
		}
		for (let k = 0; k < totalSpace; k++) {
			space += ' ';
		}
		characters.push('\n' + space + character);
	}

	if (isReverse) {
		characters.reverse();
	}
	characters.push('\n');
	return characters.join('');
} 