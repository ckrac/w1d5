var numList = [];

var addToNumList = function(num) {
  numList.push(num);
  return numList;
}

var sortNumList = function () {
  return numList.sort(function(a,b) {
    return a - b;
  });
}

////// exports

module.exports = {

  pushToNumList: addToNumList,

  sortedNumList: sortNumList
};


// module.exports.pushToNumList(52);
// module.exports.pushToNumList(22);
// console.log(numList);
// module.exports.sortedNumList();
// console.log(numList);