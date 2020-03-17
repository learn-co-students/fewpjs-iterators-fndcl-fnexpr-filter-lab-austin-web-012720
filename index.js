function findMatching(driversArray, string) {
  return driversArray.filter(driver => {
    return driver.toLowerCase() === string.toLowerCase()
  });
};

function fuzzyMatch(driversArray, string) {
  return driversArray.filter(driver => {
      driver.toLowerCase();
      string.toLowerCase();

      if (driver.charAt(0) === string.charAt(0)) {
        return driver    
      };
  })
}

function matchName(driversArray, string) {
  return driversArray.filter(driver => {
    return driver.name === string;    
  })
};
