const config1 = {
    fault: false,
    phases: [
        { color: "green", duration: 5 },
        { color: "yellow", duration: 2 },
        { color: "red", duration: 4 }
    ]
};

const config2 = {
    fault: false,
    phases: [
        { color: "red", duration: 3 },
        { color: "yellow", duration: -2 },
        { color: "green", duration: 6 }
    ]
};

const config3 = {
    fault: true,
    phases: [
        { color: "green", duration: 5 },
        { color: "yellow", duration: 2 },
        { color: "red", duration: 6 }
    ]
};

const config4 = {
    fault: false,
    phases: []
};

const runSequence = function (config, cycles) {
    if (config.phases.length === 0) {
        console.log('No phases found');
        return;
    } else if (config.fault === true) {
        console.log('Faulted phase!');
        return;
    }

    for (let i = 1; i <= cycles; i++) {
        for (const phase of config.phases) {
            let message = '';
            if (phase.duration <= 0) {
                message = 'Invalid phase detected'
            } else {
                message = `Switching to ${phase.color} for ${phase.duration} s`;
            }
            console.log(message);
        }
    }
};

const generateTimeline = function (config, cycles) {
    const cumulativeDuration = [];
    let runningTotal = 0;

    for (let i = 1; i <= cycles; i++) {
        for (const phase of config.phases) {
            cumulativeDuration.push(runningTotal += phase.duration);
        }
    }
    return cumulativeDuration;
}