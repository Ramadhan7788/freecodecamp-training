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

const rerouteOverflow = function ({ 
	gates, 
	currentGate, 
	tickIndex, 
	overflowAmount,
}) {
	const currentIndex = typeof currentGate === "string" 
		? gates.findIndex(g => g.id === currentGate)
		: gates.indexOf(currentGate);

	const nextGateIndex = (currentIndex + 1) % gates.length;
	gates[nextGateIndex].queue[tickIndex] += overflowAmount;
	console.log(overflowAmount + " attendees rerouted to " + gates[nextGateIndex].id);
};

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
	if (result.overflow > 0) {
		console.log(
			"Overflow of " + result.overflow + " attendees. Rerouting..."
		);
			rerouteOverflow({
				gates: gates,
				currentGate: gate,
				tickIndex: tickIndex,
				overflowAmount: result.overflow
        });
    }
};

const printSummary = function (summary) {
    console.log('\nThroughput Summary');
    for (let gate in summary) {
        console.log(gate + ": " + summary[gate] + " attendees processed");
    }
};

const simulateFestival = function (gates, timeBlock) {
    console.log('\n' + timeBlock + ' Simulation');
    const throughputSummary = initializeThroughput(gates);
    const maxTicks = gates[0].queue.length;
    let tickIndex = 0;
    while (tickIndex < maxTicks) {
        console.log("\nTick " + (tickIndex + 1));
        for (const gate of gates) {
            handleGateAtTick({
                gates: gates,
                gate: gate,
                tickIndex: tickIndex,
                throughputSummary: throughputSummary,
            });
        }
        tickIndex++;
    }
    printSummary(throughputSummary);
};