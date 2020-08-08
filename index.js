//* Implement own of version of forEach
module.exports = {
  forEach(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
      const value = arr[i];
      fn(value, i);
    }
  },
};
