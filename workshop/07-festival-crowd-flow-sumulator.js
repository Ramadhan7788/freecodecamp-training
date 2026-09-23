const morningGates = [
	{ id: "North", capacity: 5, queue: [3, 6, 2, 4] },
	{ id: "East", capacity: 3, queue: [2, 4, 3, 5] },
	{ id: "South", capacity: 4, queue: [1, 2, 3, 1] },
	{ id: "West", capacity: 2, queue: [4, 1, 2, 3] },
];

const nightGates = [
	{ id: "North", capacity: 4, queue: [6, 2, 5, 1] },
	{ id: "East", capacity: 2, queue: [3, 3, 4, 2] },
	{ id: "South", capacity: 5, queue: [2, 1, 2, 3] },
	{ id: "West", capacity: 3, queue: [5, 2, 1, 4] },
];

const initializeThroughput = function (gates) {
	let summary = {};
	for (const gate of gates) {
		summary[gate.id] = 0;
	}
	return summary;	
};

console.log(initializeThroughput(nightGates));

const processGateFlow = function (gate, tickIndex) {
	let currentTickQueue = gate.queue[tickIndex];
	let processed = 0;
	while (currentTickQueue > 0 && processed < gate.capacity) {
		currentTickQueue--;
		processed++;
	}
	return {
		processed: processed,
    	overflow: currentTickQueue
	};
};

console.log(processGateFlow(nightGates[1], 1))

const rerouteOverflow = function ({ 
	gates, 
	currentGate, 
	tickIndex, 
	overflowAmount,
}) {
	const currentIndex = gates.indexOf(currentGate);
	const nextGateIndex = (currentIndex + 1) % gates.length;
	gates[nextGateIndex].queue[tickIndex] += overflowAmount;
	console.log(overflowAmount + " attendees rerouted to " + gates[nextGateIndex].id)
};

rerouteOverflow({
	gates: nightGates,
	currentGate: "East",
	tickIndex: 1,
	overflowAmount: 1,
});

const handleGateAtTick = function ({
	gates,
	gate,
	tickIndex,
	throughputSummary,
}) {
	console.log("\nProcessing " + gate.id + "...");
	console.log(gate.queue[tickIndex] + " attendees arriving.");

	const result = processGateFlow(gate, tickIndex);
	throughputSummary[gate.id] += result.processed;
	
	console.log("Overflow of " + result.overflow + " attendees. Rerouting...");
	rerouteOverflow({
		gates: gates,
		currentGate: gate,
		tickIndex: tickIndex,
		overflowAmount: result.overflow,
	})

};

console.log(handleGateAtTick({
	gates: nightGates,
	gate: nightGates[0],
	tickIndex: 1,
	throughputSummary: 1,
}));

const printSummary = function (summary) {
	console.log('\nThroughput Summary');
	for (let gate in summary) {
		console.log(gate + ": " + summary[gate] + " attendees processed");
	}
};