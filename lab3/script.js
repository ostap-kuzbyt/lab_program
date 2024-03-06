class BinaryTree {
  constructor(value, left=null, right=null) {
      this.value = value;
      this.left = left;
      this.right = right;
  }
}

function isBalanced(node) {
  function getHeight(node) {
      if (!node) return 0;
      return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
  }

  function checkBalance(node) {
      if (!node) return true;

      let leftHeight = getHeight(node.left);
      let rightHeight = getHeight(node.right);

      if (Math.abs(leftHeight - rightHeight) > 1) {
          return false; 
      }

      return checkBalance(node.left) && checkBalance(node.right);
  }

  return checkBalance(node);
}

let root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.right = new BinaryTree(3);
root.left.left = new BinaryTree(4);
root.left.right = new BinaryTree(5);

console.log(isTreeBalanced(root)); 
