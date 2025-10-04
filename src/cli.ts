import cac from "cac";
import { generateTypes } from "./generator.js";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const packageJsonPath = resolve(__dirname, "../package.json");
const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf-8"));

const cli = cac("tailwind-typed");

cli
  .command("generate", "Generate Tailwind CSS type definitions")
  .alias("gen")
  .option("-o, --output <path>", "Output file path", {
    default: "./system/tailwind-types.ts",
  })
  .option("-c, --config <path>", "Tailwind config file path")
  .action(async (options) => {
    try {
      if (!options.config) {
        console.error("Error: --config option is required");
        console.log("\nUsage:");
        console.log("  tailwind-typed generate --config <path>");
        console.log("\nExample:");
        console.log("  tailwind-typed generate --config ./globals.css");
        process.exit(1);
      }

      await generateTypes({
        configPath: options.config,
        outputPath: options.output,
      });
    } catch (error) {
      console.error("Error occurred:", error);
      process.exit(1);
    }
  });

cli.help();
cli.version(packageJson.version);

cli.parse();
