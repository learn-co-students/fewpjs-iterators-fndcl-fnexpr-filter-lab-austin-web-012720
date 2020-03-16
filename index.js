function findMatching(drivers, string) {
  return drivers.filter((word) => word.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch(array, string) {
  return array.filter((word) => word.charAt(0) === string.charAt(0));
}

function matchName(array, name) {
  return array.filter((driver) => driver.name === name);
}
