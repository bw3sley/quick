import inquirer from "inquirer";

const prompts = [
  {
    type: 'input',
    name: 'projectName',
    message: 'Project name:',
    default: "quick-api"
  },
  
  {
    type: 'list',
    name: 'framework',
    message: 'Select a framework:',
    choices: ['express', 'fastify'],
  },
  
  {
    type: 'confirm',
    name: 'typescript',
    message: 'Would you like to use TypeScript?',
    default: false,
  },
  
  {
    type: 'confirm',
    name: 'eslint',
    message: 'Would you like to use ESLint?',
    default: true,
  },
]

export async function askQuestions() {
  return await inquirer.prompt(prompts);
}