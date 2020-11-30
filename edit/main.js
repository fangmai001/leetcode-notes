// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
  // console.log(s, t);
  const checkTree = (fooS, fooT) => {
    console.log(fooS, fooT);
    if (fooS === null && fooT === null) {
      return true;
    } else if (
      (fooS === null && fooT !== null) ||
      (fooS !== null && fooT === null)
    ) {
      return false;
    } else if (fooS.val === fooT.val) {
      return (
        checkTree(fooS.left, fooT.left) && checkTree(fooS.right, fooT.right)
      );
    } else {
      return false;
    }
  };

  if (checkTree(s, t)) {
    return true;
  } else {
    return isSubtree(s.left, t) || isSubtree(s.right, t);
  }
};

// console.log(
//   isSubtree(
//     new TreeNode(
//       3,
//       new TreeNode(4, new TreeNode(1), new TreeNode(2)),
//       new TreeNode(5)
//     ),
//     new TreeNode(4, new TreeNode(1), new TreeNode(2))
//   )
// );

console.log(
  isSubtree(
    new TreeNode(
      3,
      new TreeNode(4, new TreeNode(1), new TreeNode(2)),
      new TreeNode(5)
    ),
    new TreeNode(4, new TreeNode(1), new TreeNode(0))
  )
);

// console.log(
//   isSubtree(
//     new TreeNode(
//       3,
//       new TreeNode(
//         4,
//         new TreeNode(1),
//         new TreeNode(2, new TreeNode(0), undefined)
//       ),
//       new TreeNode(5)
//     ),
//     new TreeNode(4, new TreeNode(1), new TreeNode(2))
//   )
// );
