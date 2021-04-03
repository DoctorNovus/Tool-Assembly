import fs from "fs";
import fill from "./filler";

export function outputFiles(firebase, config, path = "") {
    path = path.replace("//", "/");

    let keys = Object.keys(firebase);

    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let val = Object.values(firebase)[i];

        let pathe = `${path}`.replace(/\/\//g, "");

        if (typeof val == "object") {
            if (!fs.existsSync(`${pathe}${key}`))
                fs.mkdirSync(`${pathe}${key}`);

            outputFiles(val, config, `${pathe}/${key}`);
        } else {
            if (path.startsWith("/"))
                path = path + "/";

            let pathe = `${process.cwd()}${path.length > 0 ? path : "/"}${key}`;

            fs.writeFileSync(pathe, fill(val, JSON.parse(config).build));
        }
    }
}