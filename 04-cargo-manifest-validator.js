const LB_IN_KG = 0.45;

const maers = {
  containerId: -88,
  destination: 'Carmel',
  weight: NaN,

}

let normalizeUnits = manifest => {
    let newManifest = {...manifest};
    if (newManifest.unit === 'lb') {
        const weightInKg = newManifest.weight * LB_IN_KG;
        newManifest.weight = weightInKg;
        newManifest.unit = 'kg';
    } 
    return newManifest;
}


let validateManifest = manifest => {
    const errors = {};
    const safeManifest = manifest || {};

    const rules = {
        containerId: val => Number.isInteger(val) && val > 0,
        destination: val => typeof val === 'string' && val.trim().length > 0,
        weight: val => typeof val === 'number' && !Number.isNaN(val) && val > 0,
        unit: val => val === 'lb' || val === 'kg',
        hazmat: val => typeof val === 'boolean',
    };

    Object.keys(rules).forEach(key => {
        const val = safeManifest[key];

        if (val === undefined) {
            errors[key] = "Missing";
        } else if (!rules[key](val)) {
            errors[key] = "Invalid";
        }
    });

    return errors;
};

let processManifest = manifest => {
    const errors = validateManifest(manifest);

    if (Object.keys(errors).length === 0) {
        const normalized = normalizeUnits(manifest);
        console.log(`Validation success: ${manifest.containerId}`);
        console.log(`Total weight: ${normalized.weight} kg`);
    } else {
        console.log(`Validation error: ${manifest.containerId}`);
        console.log(errors);
    }
};

const original = {};
const result = validateManifest(maers);
console.log("Result:", result);

processManifest(maers);