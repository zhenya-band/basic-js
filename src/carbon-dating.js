const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;
module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) == 'string') {
    sampleActivity = parseFloat(sampleActivity);
  }
  else return false;
  let k = 0.693 / HALF_LIFE_PERIOD;
  if (sampleActivity > 0 && sampleActivity < 15) {
    return Math.ceil((Math.log(MODERN_ACTIVITY / sampleActivity) / k));
  }
  else return false;
};
