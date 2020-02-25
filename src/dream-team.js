module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let arr = members.filter(word => typeof(word) == 'string');
  arr = arr.map(elem => elem.trim().toUpperCase()).sort();
  return arr.reduce((DreamTeam, elem) => DreamTeam + elem[0] , "");
};
