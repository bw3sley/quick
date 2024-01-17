export function generateSuccessMessage(projectName) {
    console.log(`Scaffolding project in ${process.cwd()}`);

    console.log("");
    
    console.log("Done. Now run:");

    console.log(`
        cd ${projectName}
        npm install
        npm run dev
    `)
}