let l1 = [1, 2, 4];
let l2 = [1, 3, 4];
// Output: 1->1->2->3->4->4


var mergeTwoLists = function(l1, l2) {
  let newList = [];

  while (l1.length && l2.length) {
    if (l1[0] < l2[0]) {
      newList.push(l1.shift());
    } else if (l1[0] === l2[0]) {
      newList.push(l1.shift());
      newList.push(l2.shift());
    } else if (l1[0] > l2[0]) {
      newList.push(l2.shift());
    }
  }

  while (l1.length) {
    newList.push(l1.shift());
  }

  while (l2.length) {
    newList.push(l2.shift);
  }

  return newList;
};

console.log(mergeTwoLists(l1, l2));

