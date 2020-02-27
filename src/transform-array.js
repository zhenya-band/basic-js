module.exports = function transform(arr){
  if (!(Array.isArray(arr))) throw new Error();
  let newarr = [];
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] != '--discard-prev' && arr[i] != '--double-prev' && arr[i] != '--double-next' && arr[i] != '--discard-next') {
        newarr.push(arr[i]);
      }
      else if (arr[i] == '--discard-next') {
        i++;
      }
      else if (arr[i] == '--discard-prev') {
        newarr.pop();
      }
      else if (arr[i] == '--double-next' && i < arr.length - 1) {
        newarr.push(arr[i + 1]);
      }
      else if (arr[i] == '--double-prev'  && i > 0) {
        newarr.push(arr[i - 1]);
      }
    }

    /*
    --discard-next excludes the next element of the array from the transformed array.
    --discard-prev excludes the previous element of the array from the transformed array.
    --double-next doubles the next element of the array in the transformed array.
    --double-prev doubles the previous element of the array in the transformed array.
    */
      return newarr;
};
