// function removeItems(data, namesToRemove) {
//   const namesToRemoveSet = new Set(namesToRemove);
//   return data.filter(item => !namesToRemoveSet.has(item.name));
// }

function removeItems(data, namesToRemove) {
  let updatedItems = []
  for (let item of data) {
    if (namesToRemove.includes(item.name)) {
      continue;
    }
    updatedItems.push(item);
  }
  return updatedItems
}

function removeItems(data, namesToRemove) {
  let namesToRemoveHash = {};
  for (let name of namesToRemove) {
    namesToRemoveHash[name] = true;
  }

  updatedItems = []
  for (let item of data) {
    if (namesToRemoveHash[item.name]) {
      continue
    }
    updatedItems.push(item)
  }
  return updatedItems
}

const data = [
  { name: "Alice", number: 1 },
  { name: "Bob", number: 2 },
  { name: "Carol", number: 3 },
  { name: "Dave", number: 4 },
  { name: "Eve", number: 5 },
];

const namesToRemove = ["Bob", "Eve"];

console.log(removeItems(data, namesToRemove));



