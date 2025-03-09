class LRUCache {
  constructor(capability) {
    this.capability = capability;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return -1;
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }
  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else {
      if (this.cache.size >= this.capability) {
        //this.cache.keys()返回的是一个迭代器对象
        // .next()用于获得第一个元素
        const firstKey = this.cache.keys().next().value;
        cache.delete(firstKey);
      }
    }
    this.cache.set(key, value);
  }
}

// 使用示例
const cache = new LRUCache(2);
cache.put(1, 1); // 缓存是 {1=1}
cache.put(2, 2); // 缓存是 {1=1, 2=2}
console.log(cache.get(1)); // 返回 1
cache.put(3, 3); // 删除 key 2，缓存是 {1=1, 3=3}
console.log(cache.get(2)); // 返回 -1 (未找到)
