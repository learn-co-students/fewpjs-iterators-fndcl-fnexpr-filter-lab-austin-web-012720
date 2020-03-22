function findMatching(drivers, str) {
  return drivers.filter( result => 
    result.toLowerCase() === str.toLowerCase())
};

function fuzzyMatch(drivers, str) {
  return drivers.filter( result => 
    result.toLowerCase().indexOf(str.toLowerCase()) === 0);
};

function matchName(driver, str) {
  return driver.filter( result => result.name === str);
};