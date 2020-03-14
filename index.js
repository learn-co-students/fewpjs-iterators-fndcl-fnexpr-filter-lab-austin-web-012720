// Code your solution here
function findMatching(array, string) {
  return array.filter(driver => {
    return driver.toUpperCase() === string.toUpperCase();
  });
}

function fuzzyMatch(array, string) {
  return array.filter(driver => {
    return driver.charAt(0) === string.charAt(0);
  });
}

function matchName(array, string) {
  return array.filter(driver => {
    return driver.name.toUpperCase() === string.toUpperCase();
  });
}
