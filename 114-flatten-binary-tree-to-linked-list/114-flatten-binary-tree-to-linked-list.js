/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if (!root) return "edge";

    const left_Tail = flatten(root.left);
    const right_Tail = flatten(root.right);    
    
    if (left_Tail !== "edge") {
        const temp = root.right;
        root.right = root.left;
        root.left = null;
        
        let helper = root.right;
        while(helper.right) {
            helper = helper.right;
        }
        helper.right = temp;
    }
};