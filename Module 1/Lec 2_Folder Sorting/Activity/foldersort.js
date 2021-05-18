let FS=require("fs");

let extensionMapping=require("./util.js");

//console.log(extensionMapping);
//let {Audio} = require("./util");
//console.log({Audio});
// to get only one element of the module.export
let testFolderPath="./Downloads";
let allFiles=FS.readdirSync(testFolderPath);


for(let i=0;i<allFiles.length;i++)
{
    sortFile(allFiles[i]);
}

function getExtension(file){
    file=file.split(".");
    return file[1];
}


function checkExtensionFolderName(extension){
    let extensionFolderName = testFolderPath;
    for(let key in extensionMapping){
        let extensions =extensionMapping[key];
        if(extensions.includes(extension)){
            extensionFolderName=extensionFolderName+"/"+key;
            break;
        }
    }
    let isFolderExist=FS.existsSync(extensionFolderName);
    if(!isFolderExist){
        FS.mkdirSync(extensionFolderName);
    }
    return extensionFolderName;


}

function moveFile(file,extensionFolderName){
    let sourceFile=testFolderPath+"/"+file;
    let destinationFile=extensionFolderName+"/"+file;

    FS.copyFileSync(sourceFile,destinationFile);

    FS.unlinkSync(sourceFile);

}

function sortFile(file){
    let extension=getExtension(file);
    checkExtensionFolderName(extension);
    let extensionFolderName = checkExtensionFolderName(extension);
    moveFile(file , extensionFolderName);
}