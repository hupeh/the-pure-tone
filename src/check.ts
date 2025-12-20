import Ajv from "ajv";
import type { ThemeFamilyContent } from "./types";

/**
 * Validates theme data against the remote Zed theme JSON Schema
 * 根据远程 Zed 主题 JSON Schema 验证主题数据
 *
 * @param themeData - The theme data to validate
 * @param schemaUrl - The URL of the JSON Schema (optional, defaults to the schema in themeData.$schema)
 * @returns Validation result with errors if any
 */
export async function check(
	themeData: ThemeFamilyContent,
	schemaUrl?: string,
): Promise<{
	valid: boolean;
	errors?: Array<{ path: string; message: string }>;
}> {
	try {
		// Get schema URL from data or parameter
		const url = schemaUrl || themeData.$schema;

		if (!url) {
			return {
				valid: false,
				errors: [
					{
						path: "$schema",
						message: "Missing $schema field in theme data",
					},
				],
			};
		}

		// Fetch the schema
		console.log(`Fetching schema from: ${url}`);
		const response = await fetch(url);

		if (!response.ok) {
			return {
				valid: false,
				errors: [
					{
						path: "$schema",
						message: `Failed to fetch schema: ${response.status} ${response.statusText}`,
					},
				],
			};
		}

		const schema = await response.json();

		// Create Ajv instance
		const ajv = new Ajv({
			allErrors: true,
			verbose: true,
			strict: false,
		});

		// Compile and validate
		const validate = ajv.compile(schema);
		const valid = validate(themeData);

		if (valid) {
			return { valid: true };
		}

		// Format errors
		const errors = (validate.errors || []).map((error) => ({
			path: error.instancePath || error.schemaPath,
			message: error.message || "Validation error",
		}));

		return {
			valid: false,
			errors,
		};
	} catch (error) {
		return {
			valid: false,
			errors: [
				{
					path: "validation",
					message: `Validation failed: ${error instanceof Error ? error.message : String(error)}`,
				},
			],
		};
	}
}
