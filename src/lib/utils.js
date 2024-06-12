import puppeteer from 'puppeteer';

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
	};

	return calculation;
};

export const getDataPDF = async (locals, calculation) => {
	const characterNum = calculation.ones > 6 ? 6 : calculation.ones;
	const energyNum = calculation.twos > 4 ? 4 : calculation.twos;
	const interestNum = calculation.threes > 4 ? 4 : calculation.threes;
	const healthNum = calculation.fours > 3 ? 3 : calculation.fours;
	const logicNum = calculation.fives > 3 ? 3 : calculation.fives;
	const labourNum = calculation.sixes > 3 ? 3 : calculation.sixes;
	const luckNum = calculation.sevens > 3 ? 3 : calculation.sevens;
	const oweNum = calculation.eights > 2 ? 2 : calculation.eights;
	const memoryNum = calculation.nines > 3 ? 3 : calculation.nines;
	const self_esteemNum = calculation.ones + calculation.twos + calculation.threes > 9 ? 9 : calculation.ones + calculation.twos + calculation.threes;
	const well_beingNum = calculation.fives + calculation.sixes + calculation.fours > 9 ? 9 : calculation.fives + calculation.sixes + calculation.fours;
	const talantNum = calculation.sevens + calculation.eights + calculation.nines > 9 ? 9 : calculation.sevens + calculation.eights + calculation.nines;
	const spirilualityNum = calculation.ones + calculation.fives + calculation.nines > 9 ? 9 : calculation.ones + calculation.fives + calculation.nines;
	const habitsNum = calculation.threes + calculation.sixes + calculation.nines > 9 ? 9 : calculation.threes + calculation.sixes + calculation.nines;
	const familyNum = calculation.twos + calculation.fives + calculation.eights > 9 ? 9 : calculation.twos + calculation.fives + calculation.eights;
	const aimNum = calculation.ones + calculation.fours + calculation.sevens > 9 ? 9 : calculation.ones + calculation.fours + calculation.sevens;
	const temperNum = calculation.threes + calculation.fives + calculation.sevens > 9 ? 9 : calculation.threes + calculation.fives + calculation.sevens;

	const character = await locals.pb
		.collection('character')
		.getFirstListItem(`quantity="${characterNum}"`, {});
	const energy = await locals.pb
		.collection('energy')
		.getFirstListItem(`quantity="${energyNum}"`, {});
	const interest = await locals.pb
		.collection('interest')
		.getFirstListItem(`quantity="${interestNum}"`, {});
	const health = await locals.pb
		.collection('health')
		.getFirstListItem(`quantity="${healthNum}"`, {});
	const logic = await locals.pb
		.collection('logic')
		.getFirstListItem(`quantity="${logicNum}"`, {});
	const labour = await locals.pb
		.collection('labour')
		.getFirstListItem(`quantity="${labourNum}"`, {});
	const luck = await locals.pb
		.collection('luck')
		.getFirstListItem(`quantity="${luckNum}"`, {});
	const owe = await locals.pb
		.collection('owe')
		.getFirstListItem(`quantity="${oweNum}"`, {});
	const memory = await locals.pb
		.collection('memory')
		.getFirstListItem(`quantity="${memoryNum}"`, {});
	const self_esteem = await locals.pb
		.collection('self_esteem')
		.getFirstListItem(`quantity="${self_esteemNum}"`, {});
	const well_being = await locals.pb
		.collection('well_being')
		.getFirstListItem(`quantity="${well_beingNum}"`, {});
	const talent = await locals.pb
		.collection('talent')
		.getFirstListItem(`quantity="${talantNum}"`, {});
	const spirituality = await locals.pb
		.collection('spirituality')
		.getFirstListItem(`quantity="${spirilualityNum}"`, {});
	const habits = await locals.pb
		.collection('habits')
		.getFirstListItem(`quantity="${habitsNum}"`, {});
	const family = await locals.pb
		.collection('family')
		.getFirstListItem(`quantity="${familyNum}"`, {});
	const aim = await locals.pb
		.collection('aim')
		.getFirstListItem(`quantity="${aimNum}"`, {});
	const temper = await locals.pb
		.collection('temper')
		.getFirstListItem(`quantity="${temperNum}"`, {});

	return {
		character,
		energy,
		interest,
		health,
		logic,
		labour,
		luck,
		owe,
		memory,
		self_esteem,
		well_being,
		talent,
		spirituality,
		habits,
		family,
		aim,
		temper
	}
};
