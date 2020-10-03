
module.exports = function repeater(str, options) {
  const {
    repeatTimes,
    separator = '+',
    addition,
    additionRepeatTimes,
    additionSeparator = '|'
  } = options;
  str = str + '';
  let additionToString = addition  + '';

  let strAdition = '';
  let result = '';

  if (additionToString) {
    if (addition !== undefined && addition !== null) {
      addition.toString();
    }
    for (let i = 0; i < additionRepeatTimes; i++) {
      if (i === additionRepeatTimes - 1) {
        strAdition += addition + separator;
      } else {
        strAdition += addition + additionSeparator;
      }
    }
  }

  if (strAdition) {
    str += strAdition;
  } else if (repeatTimes === undefined) {
    str += '';
  } else {
    str += separator;
  }

  if (repeatTimes) {
    for (let i = 0; i < repeatTimes; i++) {
      result += str;
    }
  } else {
    result += str + addition;
    return result;
  }
  return result.slice(0, -(separator.length));
}

