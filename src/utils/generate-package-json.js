export async function generatePackageJsonFile(projectInfo) {
    const packageJson = {
        name: projectInfo.projectName,
        version: '1.0.0',
        main: 'server.js',
        scripts: {
          dev: 'node --watch .',
        },
        license: 'ISC',
        dependencies: {},
        devDependencies: {},
    };
    
    if (projectInfo.framework === 'express') {
        packageJson.dependencies['express'] = '^4.17.1';

        if (projectInfo.typescript) {
            packageJson.dependencies['@types/express'] = '^4.17.13';
        }
    } 
    
    else if (projectInfo.framework === 'fastify') {
        packageJson.dependencies['fastify'] = '^3.17.0';
    }
    
    if (projectInfo.typescript) {
        packageJson.devDependencies['typescript'] = '^4.5.4';
        packageJson.devDependencies['ts-node'] = '^10.3.0';
    }

    if (projectInfo.eslint) {
        packageJson.devDependencies['eslint'] = '^8.3.0';
    }

    return packageJson;
}
