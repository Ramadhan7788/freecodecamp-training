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

const clonePantry = function (pantry) {
	const copiedPantry = structuredClone(pantry);
	return copiedPantry;
};

const parseShipment = function (rawRecords) {
	const uniqueProducts = [];
	const seenSkus = new Set();

	for (const record of rawRecords) {
		const [sku, name, rawQty, expires, zone = 'general'] = record.split('|');
		const qty = +rawQty;
		const product = {sku, name, qty, expires, zone};

		if (!seenSkus.has(sku)) {
			seenSkus.add(sku);
			uniqueProducts.push(product);
		}
	}
	return uniqueProducts;
};

const shipment = parseShipment(rawData);
// console.log(shipment);

const planRestock = function (pantry , shipment) {
	const categorizedItems = [];
	const pantrySkus = [];
	for (const product of pantry) {
		pantrySkus.push(product.sku)
	}
	
	for (const item of shipment) {
		let label = '';
		if (item.qty <= 0) {
			label = 'discard';
		} else if (pantrySkus.includes(item.sku)) {
			label = 'restock';
		} else {
			label = 'donate'
		}
	categorizedItems.push({type: label, item: item});
	}
	return categorizedItems;
};

const restock = planRestock(pantry, shipment);
// console.log(restock);

const groupByZone = function (actions) {
	const grouped = {};
	
	for (const action of actions) {
		const zoneName = action.item.zone;
		if (!grouped[zoneName]) {
			grouped[zoneName] = [];
		}
		grouped[zoneName].push(action)
	}
	return grouped;
};

const checkZone = groupByZone(restock);
// console.log(checkZone);

