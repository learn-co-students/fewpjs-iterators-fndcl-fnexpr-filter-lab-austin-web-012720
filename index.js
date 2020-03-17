// Code your solution here


const findMatching = (drivers, name) => {
    let driversWithName = drivers.filter(n => {
        // console.log(n)
        // console.log(`name:${name}`)
        return n.toLowerCase() === name.toLowerCase();
    })
    return driversWithName;
};

const fuzzyMatch = (drivers, letter) => {
    return drivers.filter(driver => {
        return driver.toLowerCase().indexOf(letter.toLowerCase()) === 0
    })
}

// const getDriverNames = (drivers) => {
//     return drivers.filter 
// }

const matchName = (drivers, name) => {
    return drivers.filter(driver => {
        return driver.name.toLowerCase() === name.toLowerCase();  
    } )
}


// function fuzzyMatch(source, testString) {
//     return source.filter( possibleMatch =>
//       possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
//     )