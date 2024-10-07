import fs from "fs/promises"
import fsn from "fs"
import path from 'path'

// console.log(fs)

let files = await fs.readdir("C:\\Users\\oyjaa\\clutter project")

// console.log(files)


for (const item of files) {
    let diff = item.split(".")[item.split(".").length - 1]

    console.log("running", item)

    if (diff != "js" && diff != "json" && item.split(".").length > 1) {

        if (fsn.existsSync(path.join("C:\\Users\\oyjaa\\clutter project", diff))) {
            //moving file to the directory
            fs.rename(path.join("C:\\Users\\oyjaa\\clutter project", item), path.join("C:\\Users\\oyjaa\\clutter project", diff, item))
        
        } else {
            fs.mkdir(diff)
            fs.rename(path.join("C:\\Users\\oyjaa\\clutter project", item), path.join("C:\\Users\\oyjaa\\clutter project", diff, item))

        }
    }
    // console.log(item)
}







const r = "ravu.teja";
let dif = r.split(".");
console.log(dif)