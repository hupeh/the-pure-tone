import { colors } from "./colors";
import { createTheme } from "./theme";
import { author, description, version, repository } from "../package.json";
import { ThemeFamilyContent } from "./types";
import { check } from "./check";
import { stringify as tomlStringify } from "smol-toml";

const name = "The Pure Tone";

const themes: ThemeFamilyContent = {
	$schema: "https://zed.dev/schema/themes/v0.2.0.json",
	name,
	author: author.name,
	themes: [
		createTheme("Dark", "dark", colors.default),
		createTheme("Dark Soft", "dark", colors.soft),
		createTheme("Black", "dark", colors.black),
		createTheme("Light", "light", colors.default),
		createTheme("Light Soft", "light", colors.soft),
	],
};

// Validate against schema before writing
console.log("Validating theme against schema...");
const validationResult = await check(themes);

if (!validationResult.valid) {
	console.error("❌ Theme validation failed:");
	validationResult.errors?.forEach((error) => {
		console.error(`  [${error.path}] ${error.message}`);
	});
	process.exit(1);
}

console.log("✓ Theme validation passed");

// Write theme file
await Bun.write(
	"./themes/the-pure-tone.json",
	JSON.stringify(themes, null, 2), // serialize the themes
);

// Write extension.toml
const extensionConfig = {
	id: "the-pure-tone",
	name,
	version,
	schema_version: 1,
	authors: [`${author.name} <${author.email}>`],
	description,
	repository: repository.url.replace(/\.git$/, ""),
};

await Bun.write(
	"./extension.toml",
	tomlStringify(extensionConfig), // serialize the extension
);

console.log("✓ Theme generated successfully");
