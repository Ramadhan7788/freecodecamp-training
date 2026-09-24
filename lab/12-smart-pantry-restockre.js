const pantry = [
	{ sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
	{ sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

const rawData = [
	"A10|Tomatoes|5|2027-01-01",
	"B21|Bananas|10|2027-01-01",
	"C32|Eggs|3|2027-01-01|fridge",
	"C32|Eggs|3|2027-01-01",
	"D43|Pineapples|0|2027-01-01",
	"E54|Peppers|-1|2027-01-01|fridge"
];

const parseShipment = function (arr) {
	const newData = [];
	const seenSkus = new Set();

	for (let i = 0; i < arr.length; i++) {
		const product = arr[i].split('|');
		const sku = product[0];
		const name = product[1];
		const qty = +product[2];
		const expires = product[3];
		const zone = product[4] ?? 'general';

		const productInfo = {sku, name, qty, expires, zone};

		if (!seenSkus.has(sku)) {
			seenSkus.add(sku);
			newData.push(productInfo);
		}

	}
	return newData;
};

parseShipment(rawData);