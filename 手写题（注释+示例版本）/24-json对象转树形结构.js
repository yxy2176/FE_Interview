// 转换前：
// source = [{
//     id: 1,
//     pid: 0,
//     name: 'body'
//   }, {
//     id: 2,
//     pid: 1,
//     name: 'title'
//   }, {
//     id: 3,
//     pid: 2,
//     name: 'div'
//   }]
// // 转换为:
// tree = [{
//   id: 1,
//   pid: 0,
//   name: 'body',
//   children: [{
//     id: 2,
//     pid: 1,
//     name: 'title',
//     children: [{
//       id: 3,
//       pid: 1,
//       name: 'div'
//     }]
//   }
// }]

function jsonToTree(data) {
  if (!Array.isArray(data)) return [];
  let res = [];
  let map = {};
  data.forEach((item) => {
    map[item.id] = item;
  });
  data.forEach((item) => {
    let parent = map[item.pid];
    if (parent) {
      (parent.children ?? []).push(item);
    } else {
      res.push(item);
    }
  });
  return res;
}
