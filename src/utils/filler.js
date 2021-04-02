export default function fill(data, objects){
    for(let i = 0; i < Object.keys(objects).length; i++){
        let val = Object.values(objects)[i];

        // let reg = new RegExp("{{" + objects[i].name + "}}", "g");

        console.log(val);

        // data.replace(reg, object.value);
    }
}