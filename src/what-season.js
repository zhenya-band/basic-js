
module.exports = function getSeason(date) {
  //Errors
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  let toString = ({}.toString);
  if((toString.call(date)) !== '[object Date]'){
     throw new Error('Error');
  }
  // main
  let month = date.getMonth();
  const season = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn','winter'];
  return season[month];
};
