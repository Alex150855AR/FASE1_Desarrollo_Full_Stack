const { execSync } = require('child_process');
const fs = require('fs');

// Permite recibir el nombre de la tarea y el mensaje desde la terminal
// Ejemplo: node github_sync.js "frontend-react" "feat: creacion del frontend"
const featureName = process.argv[2] || 'actualizacion-frontend';
const commitMessage = process.argv[3] || 'feat: actualización de estructura y desarrollo front-end';

console.log(`\n🚀 Iniciando automatización del Flujo de Trabajo (Feature Branching)...\n`);

// Función auxiliar para ejecutar comandos en la terminal
function run(command, ignoreError = false) {
    try {
        console.log(`> ${command}`);
        execSync(command, { stdio: 'inherit' });
    } catch (error) {
        if (!ignoreError) {
            console.error(`\n❌ Error crítico al ejecutar: ${command}`);
            console.error('Asegúrate de que no haya conflictos en Git y vuelve a intentarlo.');
            process.exit(1);
        } else {
            console.log(`ℹ️ (El comando anterior arrojó una advertencia, pero continuamos...)\n`);
        }
    }
}

// 1. Verificación de repositorio Git
// Verifica si existe la carpeta .git en el directorio actual o en el superior
if (!fs.existsSync('.git') && !fs.existsSync('../.git') && !fs.existsSync('../../.git')) {
    console.error('❌ Error: No se detectó un repositorio Git inicializado.');
    console.log('Asegúrate de haber ejecutado "git init" en la carpeta principal de tu proyecto.');
    process.exit(1);
}

// 2. Flujo de Feature Branching
console.log('\n--- PASO 1: Preparando rama de integración (develop) ---');
// Asegura que exista develop y nos movemos a ella
run('git checkout develop || git checkout -b develop', true);

console.log(`\n--- PASO 2: Creando rama de característica (feature/${featureName}) ---`);
// Crea la rama de la característica basada en develop
run(`git checkout -b feature/${featureName} || git checkout feature/${featureName}`, true);

console.log('\n--- PASO 3: Agregando y guardando cambios (Commit) ---');
run('git add .');
try {
    // Commit de los cambios (falla silenciosamente si no hay nada nuevo que guardar)
    execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
} catch (e) {
    console.log('⚠️ No se detectaron archivos nuevos o modificados para commitear. Continuamos...');
}

console.log(`\n--- PASO 4: Subiendo rama feature/${featureName} a GitHub ---`);
run(`git push -u origin feature/${featureName}`);

console.log('\n--- PASO 5: Integrando (Merge) a la rama develop ---');
run('git checkout develop');
run(`git merge feature/${featureName}`);

console.log('\n--- PASO 6: Subiendo rama develop consolidada a GitHub ---');
run('git push origin develop');

console.log('\n🎉 ¡FLUJO COMPLETADO CON ÉXITO!');
console.log(`✅ Tus cambios de la característica "${featureName}" ya están respaldados en GitHub.`);