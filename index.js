//Required files
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs"

inquirer
  .prompt([{
    message: "Please enter your URL: ", //Input message
    name: "URL" //Stored data variable name
    }
  ])
  .then((answers) => {
    const url = answers.URL; //Create url
    var qr_png = qr.image(url); //Turn it to png
    qr_png.pipe(fs.createWriteStream('qr.png')); //Create file
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

  
