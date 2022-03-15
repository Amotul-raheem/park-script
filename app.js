import {mongodbConnection} from "./db.js";
import dotenv from "dotenv";
import {saveParkLocations, saveParkSpaces} from "./uploader/ParkSpaceDetailsUploader.js";


function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

dotenv.config()

console.log("Starting Park data upload to db")

mongodbConnection().then(r => console.log("connected")).catch(e => console.log("Error connecting"))

await sleep(1000)

saveParkLocations().then(r => console.log("Park Locations saved successfully")).catch(e => console.log("Failure saving park locations"))

await sleep(10000)

saveParkSpaces().then(r => console.log("Park spaces saved successfully")).catch(e => console.log("Failure saving park spaces"))

console.log("Park data upload to db completed successfully")

await sleep(15000)

process.exit()