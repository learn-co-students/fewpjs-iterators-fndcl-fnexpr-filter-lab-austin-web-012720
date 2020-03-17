// Code your solution here
function findMatching(drivers, string) {
  const match = drivers.filter((driver) => driver.toLowerCase() === string.toLowerCase());
  return match;
}

function fuzzyMatch(drivers, string) {
  const match = drivers.filter((driver) => driver.toLowerCase().indexOf(string.toLowerCase()) === 0);
  return match;
}

function matchName(drivers, string) {
  const match = drivers.filter((driver) => driver.name === string);
  return match;
}
