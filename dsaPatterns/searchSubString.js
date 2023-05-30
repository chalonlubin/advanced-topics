/* Find the subset of strings within a given string

ex. "hellohahahello" find "haha" */


function stringSearch(str, sub) {
  let strMap = new Map ();

  for (let i = 0; i < str.length - sub.length; i++) {
    strMap.set(str.slice(i, i+ sub.length))
  }

  return strMap.has(sub)
}


console.log(stringSearch("hellohahahello", "haha"))
