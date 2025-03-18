const myAll = (data) => {
  return new Promise((resolve, reject) => {
    let result = [];
    let cnt = 0;
    const addData = (item, index) => {
      result[index] = item;
      cnt++;
      if (cnt === data.length) {
        resolve(result);
      }
    };
    data.forEach((item, index) => {
      if (item instanceof Promise) {
        item.then(
          (res) => {
            addData(item, index);
          },
          (err) => {
            reject(err);
          }
        );
      } else {
        addData(item, index);
      }
    });
  });
};
