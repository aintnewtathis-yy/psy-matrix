export const serializeNonPOJOs = (obj) => {
	return structuredClone(obj);
};

export const validateData = async (formData, schema) => {
	const body = Object.fromEntries(formData);

	try {
		const data = schema.parse(body);
		return {
			formData: data,
			errors: null
		};
	} catch (err) {
		console.log('Error: ', err);
		const errors = err.flatten();
		return {
			formData: body,
			errors
		};
	}
};

export const getSquareNumbers = (formData) => {
	const nums = formData.date.split('').filter((char) => /\d/.test(char));

	const firstAdditional = nums.reduce((acc, digit) => {
		return acc + parseInt(digit, 10);
	}, 0);

	const secondAdditional =
		firstAdditional < 10
			? firstAdditional
			: Math.floor(firstAdditional / 10) + (firstAdditional % 10);

	const thirdAdditional =
		parseInt(nums[0], 10) !== 0 ? firstAdditional - 2 * nums[0] : firstAdditional - 2 * nums[1];

	const fourthAdditional =
		thirdAdditional < 10
			? thirdAdditional
			: Math.floor(thirdAdditional / 10) + (thirdAdditional % 10);

	pushNums(firstAdditional);
	pushNums(secondAdditional);
	pushNums(thirdAdditional);
	pushNums(fourthAdditional);

	const ones = nums.filter((num) => num === '1').length;
	const twos = nums.filter((num) => num === '2').length;
	const threes = nums.filter((num) => num === '3').length;
	const fours = nums.filter((num) => num === '4').length;
	const fives = nums.filter((num) => num === '5').length;
	const sixes = nums.filter((num) => num === '6').length;
	const sevens = nums.filter((num) => num === '7').length;
	const eights = nums.filter((num) => num === '8').length;
	const nines = nums.filter((num) => num === '9').length;

	function pushNums(number) {
		number
			.toString()
			.split('')
			.forEach((value) => {
				nums.push(value);
			});
	}

	const calculation = {
		firstAdditional,
        secondAdditional,
        thirdAdditional,
        fourthAdditional,
        ones,
        twos,
        threes,
        fours,
        fives,
        sixes,
        sevens,
        eights,
        nines
	}

	return calculation
};
	
