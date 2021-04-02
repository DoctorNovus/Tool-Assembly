const color = {
    reset: "",
    bright: "",
    dim: "",
    underscore: "",
    blink: "",
    reverse: "",
    hidden: "",

    black: "",
    red: "",
    green: "",
    yellow: "",
    blue: "",
    magenta: "",
    cyan: "",
    white: "",

    bgBlack: "",
    bgRed: "",
    bgGreen: "",
    bgYellow: "",
    bgBlue: "",
    bgMagenta: "",
    bgCyan: "",
    bgWhite: ""
};

export function logColor(message, colorCode = "reset"){
    console.log(`${color[colorCode] || color.reset}${typeof message == "object" ? JSON.stringify(message) : message}${color.reset}`);
}

export function logError(message){
    console.log(`${color.red}[ERROR]: ${JSON.stringify(message)}${color.reset}`);
}