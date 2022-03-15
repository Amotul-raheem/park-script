import {parkLocations} from "../data/parkLocationData.js";
import {ParkLocation} from "../model/ParkLocation.js";
import {parkSpaces} from "../data/parkSpaceData.js";
import {ParkSpace} from "../model/ParkSpace.js";


export const saveParkLocations = async () => {
    for (let parkLocation of parkLocations) {
        let pl = new ParkLocation(parkLocation)
        await pl.save()
    }
}


export const saveParkSpaces = async () => {
    const victoriaPark = await ParkLocation.findOne({park_name: 'Victoria Car Park'});
    for (let parkSpace of parkSpaces) {
        parkSpace["location"] = victoriaPark._id
        let ps = new ParkSpace(parkSpace)
        await ps.save();
    }
}

