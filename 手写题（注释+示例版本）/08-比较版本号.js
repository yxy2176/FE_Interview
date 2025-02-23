/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */

// 返回规则如下：
// 如果 version1 < version2 返回 -1，
// 如果 version1 > version2 返回 1，
// 除此之外返回 0。
var compareVersion = function(version1, version2) {
    const v1 = version1.split('.')
    const v2 = version2.split('.')
    for(let i=0;i<v1.length || i<v2.length;i++){
        let x=0,y=0;
        if(i<v1.length) x=parseInt(v1[i]);   //通过parseInt可以去掉前导0的情况
        if(i<v2.length) y=parseInt(v2[i]);
        if(x<y) return -1;
        else if(x>y) return 1;
    }
    return 0;
}