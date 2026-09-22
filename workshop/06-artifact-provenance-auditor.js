const collection = {
	101: {
		title: "Golden Mask",
		category: "Ceremonial",
		curator: {
			id: 201,
			name: "Earl Sinclair",
		},
		locations: [
			{ gallery: "Hall A", year: 2020 },
			{ gallery: "Hall C", year: 2024 },
		],
		tags: ["gold", "egypt"],
		onDisplay: true,
	},
	102: {
		title: "Bronze Tablet",
		category: "Inscription",
		curator: {
			id: 202,
			name: "Robert Sinclair",
		},
		locations: [{ gallery: "Archive Wing", year: 2019 }],
		tags: ["bronze", "writing"],
		onDisplay: false,
	} 
};

// console.log(collection[101].title);
// console.log(collection[101].curator.name);

const getArtifactTitle = function (id) {
	const artifact = collection[id];

	if (!artifact) {
		return 'Artifact not f0und';
	}

	return artifact.title;
}

// console.log(getArtifactTitle(104));

const addTag = function (id, tag) {
	const artifact = collection[id];
	if (!artifact) {
		return 'Artifact not f0und';
	}

	if (artifact) {
		if (!artifact.tags.includes(tag)) {
			artifact.tags.push(tag);
		}
	}
};

addTag(101, "royal");
// console.log(collection[101].tags);

const moveArtifact = function (id, gallery, year) {
	const artifact = collection[id];

	if (!artifact) {
		return 'Artifact not f0und';
	}

	const newLocation = {
		gallery: gallery,
		year: year
	}
	artifact.locations.push(newLocation);

};

moveArtifact(102, "Hall B", 2026);
// console.log(collection[102].locations);