 const FS = require("fs");
 //console.log(FS);
 FS.writeFileSync("DEMO.txt","this is my first file using File sorting With function writeFileSync");
 let dataread= FS.readFileSync("./DEMO.txt");
 console.log(dataread+"");
 FS.writeFileSync("..../Activity/Activity.txt","this is my first Activity  using File sorting With function writeFileSync");
 