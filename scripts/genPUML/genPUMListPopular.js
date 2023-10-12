const { execSync } = require('child_process');
const path = require('path');
var plantuml = require('node-plantuml');
var fs = require('fs');

// Define the JSDoc generation process
function genPUMListPopular() {
    // Set the working directory to the root of the project
    const projectRoot = path.resolve(__dirname, '../../');
    process.chdir(projectRoot);

    try {
      // The flag --dry-run is used to simulate the installation of the dependencies
      // The object { stdio: 'inherit' } is used to display the output of the command in the console
      execSync('npm install node-plantuml', { stdio: 'inherit' });

      var gen = plantuml.generate("docs/plantUML/listPopular.puml", {format: 'png'});
      gen.out.pipe(fs.createWriteStream("images/list-popular.png"));
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
}
genPUMListPopular() 