/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return '';
    var FirstString = strs[0];
    var CommonLength = firstString.length;
    for (var i = 1; i < strs.length; i++) {
        for (var j = 0; j <CommonLength; j++) {
            if (!strs[i][j]) break;
            if (firstString[j] !== strs[i][j]) break;
        }
        CommonLength = j;
    }

    return firstString.substring(0, CommonLength);
};

// a better way
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return '';
    }
    
    return strs.reduce(function(pre, str) {
        while (str.indexOf(pre) !== 0) {
            pre = pre.slice(0, pre.length - 1); 
        }
        
        return pre;
    }, strs[0]);
};
