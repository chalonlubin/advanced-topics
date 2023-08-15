'use strict';

const familyBook = [
  { name: 'Joe', parents: [] },
  { name: 'Sally', parents: ['Joe', 'Beth'] },
  { name: 'Harry', parents: ['Joe', 'Beth'] },
  { name: 'Jonny', parents: ['Harry', 'Jessica'] },
  { name: 'Melissa', parents: ['Jonny', 'Dawn'] },
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

// find name without an empty parent array
// this is now the first name in the tree, create a tree :
// - name:
// - children: []
// find name that lists the last name as a parent, and populate that into the
// children array.
// continue this process for each child.

function createTree(people) {

  // build recursive function
  function buildTree(member) {

    // find children of the member
    const children = people.filter((person) =>
      person.parents.includes(member.name)
    );
    // return an object with the name and their children in an array.
    return {
      name: member.name,
      children: children.map((child) => buildTree(child)),
    };
  }


  // find the root
  const root = people.find(
    (person) => person.parents.length === 0
  );

  // output the tree
  return buildTree(root);
}

const tree = createTree(familyBook);

console.log(tree);
