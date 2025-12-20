export type Palette = Record<string, [string, string] | string>;

// [dark, light]
export const defaultPalette = {
	primary: ["#4d9375", "#1c6b48"],

	foreground: ["#dbd7caee", "#393a34"],
	activeForeground: ["#bfbaaa", "#4e4f47"],
	secondaryForeground: ["#dedcd590", "#393a3490"],

	ignored: ["#dedcd550", "#393a3450"],
	faded: ["#dedcd510", "#393a3410"],
	border: ["#191919", "#f0f0f0"],

	background: ["#121212", "#ffffff"],
	activeBackground: ["#181818", "#f7f7f7"],
	selectionBackground: ["#eeeeee18", "#22222218"],
	selectionBackgroundActive: ["#eeeeee18", "#22222218"],
	selectionBackgroundInActive: ["#eeeeee10", "#22222210"],

	comment: ["#758575dd", "#a0ada0"],
	string: ["#c98a7d", "#b56959"],
	variable: ["#bd976a", "#b07d48"],
	keyword: ["#4d9375", "#1e754f"],
	number: ["#4C9A91", "#2f798a"],
	boolean: ["#4d9375", "#1e754f"],
	operator: ["#cb7676", "#ab5959"],
	function: ["#80a665", "#59873a"],
	constant: ["#c99076", "#a65e2b"],
	class: ["#6872ab", "#5a6aa6"],
	interface: ["#5d99a9", "#2e808f"],
	type: ["#5DA994", "#2e8f82"],
	builtin: ["#cb7676", "#ab5959"],
	property: ["#b8a965", "#998418"],
	namespace: ["#db889a", "#b05a78"],
	punctuation: ["#666666", "#999999"],
	decorator: ["#bd8f8f", "#bd8f8f"],
	regex: ["#c4704f", "#ab5e3f"],

	// colors
	green: ["#4d9375", "#1e754f"],
	cyan: ["#5eaab5", "#2993a3"],
	blue: ["#6394bf", "#296aa3"],
	red: ["#cb7676", "#ab5959"],
	orange: ["#d4976c", "#a65e2b"],
	yellow: ["#e6cc77", "#bda437"],
	magenta: ["#d9739f", "#a13865"],
} satisfies Palette;

export const createPalette = (...variants: Palette[]) => {
	return variants.reduce(
		(acc, overrides) => Object.assign(acc, overrides),
		structuredClone(defaultPalette),
	);
};

export const colors = {
	default: createPalette(),
	black: createPalette({
		foreground: "#dbd7cacc",
		background: "#000",
		activeBackground: "#121212",
		punctuation: "#444444",
	}),
	soft: createPalette({
		background: ["#222", "#F1F0E9"],
		activeBackground: ["#292929", "#E7E5DB"],
		border: ["#252525", "#E7E5DB"],
	}),
};
