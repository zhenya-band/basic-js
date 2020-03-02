
  let max_depth = 0;
  module.exports = class DepthCalculator {
    calculateDepth(arr, current_depth = 1) {
      for (let i = 0; i < arr.length; i++) {
          if(Array.isArray(arr[i])) max_depth = this.calculateDepth(arr[i], current_depth + 1);
      }
      max_depth = (max_depth > current_depth) ? max_depth : current_depth;
      let depth = max_depth;
      max_depth = 0;
      return depth;
  }
}
