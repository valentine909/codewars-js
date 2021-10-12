// https://www.codewars.com/kata/57e5a6a67fbcc9ba900021cd

function arrayToTree(array, order = 1) {
    if (order > array.length) return;
    const root = array[order - 1];
    return new TreeNode(root, arrayToTree(array, 2 * order), arrayToTree(array, 2 * order + 1));
}