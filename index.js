// Code your solution here
// function findMatching(drivers, str){
//     let idk = drivers.filter(d => {
//          d === str;
//     });
//     return idk
// }

function findMatching(drivers, str){
    const results = drivers.filter(d => d.toLowerCase() === str.toLowerCase());
    return results
}

function fuzzyMatch(drivers, letter){
    return drivers.filter(l => l[0].toLowerCase() === letter.toLowerCase())
}

function matchName(drivers, soughtName){
    return drivers.filter(driverNames => driverNames.name === soughtName)
}