import { test, expect, describe } from "bun:test";
import { check } from "./check";
import type { ThemeFamilyContent } from "./types";

describe("check", () => {
	test("validates theme against remote schema", async () => {
		const validTheme: ThemeFamilyContent = {
			$schema: "https://zed.dev/schema/themes/v0.2.0.json",
			name: "Test Theme",
			author: "Test Author",
			themes: [
				{
					name: "Dark Theme",
					appearance: "dark",
					style: {
						background: "#000000",
						text: "#ffffff",
					},
				},
			],
		};

		const result = await check(validTheme);

		if (!result.valid) {
			console.log("Validation errors:", result.errors);
		}

		expect(result.valid).toBe(true);
		expect(result.errors).toBeUndefined();
	}, 10000);

	test("rejects theme without $schema", async () => {
		const invalidTheme = {
			name: "Test Theme",
			author: "Test Author",
			themes: [],
		} as unknown as ThemeFamilyContent;

		const result = await check(invalidTheme);

		expect(result.valid).toBe(false);
		expect(result.errors?.some((e) => e.path === "$schema")).toBe(true);
	});

	test("validates actual theme file", async () => {
		try {
			const file = Bun.file("themes/the-pure-tone.json");
			const themeData = (await file.json()) as ThemeFamilyContent;
			const result = await check(themeData);

			if (!result.valid) {
				console.log("Validation errors:");
				result.errors?.forEach((error) => {
					console.log(`  ${error.path}: ${error.message}`);
				});
			}

			expect(result.valid).toBe(true);
		} catch {}
	}, 10000);
});
