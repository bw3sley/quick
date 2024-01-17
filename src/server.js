import shell from "shelljs";

import fs from "node:fs";

import { askQuestions } from "./data/prompts.js";

import { generateExpressCode } from "./utils/generate-express-code.js";
import { generateFastitfyCode } from "./utils/generate-fastify-code.js";

import { generatePackageJsonFile } from "./middleware/generate-package-json.js";
import { generateSuccessMessage } from "./middleware/generate-success-message.js";

async function main() {
    console.clear();
    
    const projectInfo = await askQuestions();

    if (!fs.existsSync(projectInfo.projectName)) {
        fs.mkdirSync(projectInfo.projectName);
    }

    const packageJson = await generatePackageJsonFile(projectInfo);

    shell.cd(projectInfo.projectName);

    fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));

    let serverCode;

    if (projectInfo.framework === "express") {
        serverCode = generateExpressCode();
    }

    else {
        serverCode = generateFastitfyCode();
    }

    fs.writeFileSync('server.js', serverCode);

    console.clear();

    generateSuccessMessage(projectInfo.projectName);
}

main();