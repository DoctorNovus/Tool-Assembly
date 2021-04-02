import fs from "fs";

let settings = {};
let path = `${process.cwd()}/tool-assembly.json`;

if(fs.existsSync(path)){
    let localSettings = require(`${process.cwd()}/tool-assembly.json`);

    settings = {
        ...localSettings
    };
}

export default function getConfig(){
    return JSON.stringify(settings);
}