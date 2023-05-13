// function removeItems(data, namesToRemove) {
//   const namesToRemoveSet = new Set(namesToRemove);
//   return data.filter(item => !namesToRemoveSet.has(item.name));
// }

function removeItems(data, namesToRemove) {
  let updatedItems = [];
  for (let item of data) {
    if (namesToRemove.includes(item.name)) {
      continue;
    }
    updatedItems.push(item);
  }
  return updatedItems;
}

function removeItems(data, namesToRemove) {
  let namesToRemoveHash = {};
  for (let name of namesToRemove) {
    namesToRemoveHash[name] = true;
  }

  updatedItems = [];
  for (let item of data) {
    if (namesToRemoveHash[item.name]) {
      continue;
    }
    updatedItems.push(item);
  }
  return updatedItems;
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

const familyBook = [
  { name: "Joe", parents: [] },
  { name: "Sally", parents: ["Joe", "Beth"] },
  { name: "Harry", parents: ["Joe", "Beth"] },
  { name: "Jonny", parents: ["Harry", "Jessica"] },
  { name: "Melissa", parents: ["Jonny", "Dawn"] },
];

/* Example output */
// const tree = {
//   name: "Joe",
//   children: [
//     { name: "Sally", children: [] },
//     {
//       name: "Harry",
//       children: [
//         { name: "Jonny", children: [{ name: "Melissa", children: [] }] },
//       ],
//     },
//   ],
// };


function createFamilyTree(familyBook) {
  // Create a map for easy lookup.
  const familyMap = new Map();
  familyBook.forEach(member => {
    familyMap.set(member.name, member);
  });

  // Recursive function to build the tree.
  function buildTree(member) {
    const children = familyBook.filter(person => person.parents.includes(member.name));
    return {
      name: member.name,
      children: children.map(child => buildTree(child))
    };
  }

  // Assuming the root of the tree is the person with no parents.
  const root = familyBook.find(member => member.parents.length === 0);
  return buildTree(root);
}


const tree = createFamilyTree(familyBook);
console.log(tree);

