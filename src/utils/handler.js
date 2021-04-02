import create from "../commands/create";

export function runCommand(command, args){
    switch(command){
        case "create":
            create(args);
            break;
    }
}