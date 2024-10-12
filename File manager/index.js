import fs from "fs/promises"
import fsn from "fs"
import path from 'path'


//give your file location (ie. path)
const file_address="C:\\Users\\oyjaa\\clutter project"

let files = await fs.readdir(file_address)



for (const item of files) {
    let diff = item.split(".")[item.split(".").length - 1]

    console.log("running", item)

    if (diff != "js" && diff != "json" && item.split(".").length > 1) {

        if (fsn.existsSync(path.join(file_address, diff))) {
            //moving file to the directory
            fs.rename(path.join(file_address, item), path.join(file_address diff, item))
        
        } else {
            fs.mkdir(diff)
            fs.rename(path.join(file_address, item), path.join(file_address, diff, item))

        }
    }
    // console.log(item)
}


