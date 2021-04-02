import { logColor } from "../utils/logger";
import fs from "fs";
import path from "path";

import config from "../utils/config";
import { outputFiles } from "../utils/file-system";

let firebase = capture(`templates/firebase/default`);

export default function create(args) {

    switch (args[0]) {
        case "firebase":
            logColor("Creating firebase project", "cyan");
            outputFiles(firebase, config());
            break;

        default:
            logColor(`Unknown option: ${args[0]}`, "yellow");
            break;
    }
}

function capture(pathe, loop = false) {
    if (!loop)
        pathe = path.join(__dirname, "../", pathe);

    let templates = {};

    for (let file of fs.readdirSync(pathe)) {
        if (fs.lstatSync(`${pathe}/${file}`).isDirectory())
            templates[file] = capture(`${pathe}/${file}`, true);
        else
            templates[file] = Buffer.from(fs.readFileSync(`${pathe}/${file}`)).toString("utf-8");
    }

    return templates;
}