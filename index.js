// Code your solution here
function findMatching(array,string){
  let match = array.filter( arg => arg.toLowerCase() === string.toLowerCase())
  return match

}

function fuzzyMatch(drivers, string){
  let match = drivers.filter( arg => arg.toLowerCase().startsWith(string.toLowerCase()))
  return match
}

function matchName(aray, string){
  return aray.filter(arg => arg.name === string)
}
