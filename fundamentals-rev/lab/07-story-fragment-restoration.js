const shuffledFragments = [
	{ id: 15, text: "and, after a time, passed the place where the Hare was sleeping." },
	{ id: 12, text: "he lay down beside the course to take a nap" },
	,
	{ id: 11, text: "and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare," },
	{ id: 7, text: "but for the fun of the thing he agreed." },
	{ id: 19, text: "The Hare now ran his swiftest," },
	,
	{ id: 1, text: "A Hare was making fun of the Tortoise one day for being so slow." },
	{ id: 14, text: "The Tortoise meanwhile kept going slowly but steadily," },
	{ id: 9, text: "marked the distance and started the runners off." },
	,
	{ id: 5, text: "I'll run you a race and prove it.\"" },
	{ id: 17, text: "and when at last he did wake up," },
	{ id: 2, text: '"Do you ever get anywhere?" he asked with a mocking laugh.' },
	{ id: 12, text: "he lay down beside the course to take a nap" },
	,
	{ id: 8, text: "So the Fox, who had consented to act as judge," },
	{ id: 20, text: "but he could not overtake the Tortoise in time." },
	{ id: 5, text: "I'll run you a race and prove it.\"" },
	{ id: 6, text: "The Hare was much amused at the idea of running a race with the Tortoise," },
	,
	{ id: 13, text: "until the Tortoise should catch up." },
	{ id: 10, text: "The Hare was soon far out of sight," },
	{ id: 12, text: "he lay down beside the course to take a nap" },
	{ id: 18, text: "the Tortoise was near the goal." },
];

function compactFragments (arr) {
	const cleanFragments = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i]) { cleanFragments.push(arr[i]); } 
		else { console.log(`[COMPACTED] index: ${i}`); }
	}
	return cleanFragments;
}

const compactedShuffledFragments = compactFragments(shuffledFragments);

function sortFragments (fragments) {
	const copiedFragments = [...fragments];
	for (let i = 0; i < copiedFragments.length; i++) {
		for (let j = 0; j < copiedFragments.length -1; j++) {
			if (copiedFragments[j].id > copiedFragments[j + 1].id) {
				[copiedFragments[j], copiedFragments[j + 1]] = [copiedFragments[j + 1], copiedFragments[j]]
			}
		}
	}
	return copiedFragments;
}

const sortedFragments = sortFragments(compactedShuffledFragments);

function dedupeFragments (fragments) {
	const uniqueFragments = [];
	for (let i = 0; i < fragments.length; i++) {
		const currentFragment = fragments[i];
		const fragmentexist = uniqueFragments.some(fragment => fragment.id === currentFragment.id);
		if (!fragmentexist) {
			uniqueFragments.push(currentFragment);
		} else 
			console.log('[DEDUPED]');
	}
	return uniqueFragments;
}

const dedupedFragments = dedupeFragments(sortedFragments);
// console.log(dedupedFragments);

function fillMissingFragments (deduFragments) {
	const filledFragments = [];
	if (deduFragments.length === 0 || deduFragments.length < 2) {
		return [...deduFragments];
	}
	const minId = deduFragments[0].id;
	const maxId = deduFragments.at(-1).id;

	let index = 0;
	for (let i = minId; i <= maxId; i++) {
		if (deduFragments[index].id === i) {
			filledFragments.push(deduFragments[index]);
			index++;
		}	else {
			filledFragments.push({id: i, text: '[...]'});
			console.log('[FILLED]')
		}
	} 
	return filledFragments;
}	

const filledFragments = fillMissingFragments(dedupedFragments);
console.log(filledFragments);