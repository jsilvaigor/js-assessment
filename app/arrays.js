var _ = require('underscore');

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return _.indexOf(arr,item);
  },

  sum: function(arr) {
    return _.reduce(arr, function(memo, num){ return memo + num; }, 0);
  },

  remove: function(arr, item) {
    return _.without(arr, item);
  },

  removeWithoutCopy: function(arr, item) {
    var i;
    var len;

    for (i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
        len--;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift(arr);
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0;
    _.each(arr, function(number){
      if (number === item){
        count += 1;
      }
    });
    return count;
  },

  duplicates: function(arr) {
    var seen = {};
    var dupes = [];

    for (var i = 0, len = arr.length; i < len; i++) {
      seen[arr[i]] = seen[arr[i]] ? seen[arr[i]] + 1 : 1;
    }

    for (var item in seen) {
      if (seen.hasOwnProperty(item) && seen[item] > 1) {
        dupes.push(parseInt(item));
      }
    }

    return dupes;
  },

  square: function(arr) {
    var tmp = [];
    _.each(arr, function(n) { tmp.push(n * n); });
    return tmp;
  },

  findAllOccurrences: function(arr, target) {
    var tmp = [];
    arr.forEach(function(n, i){
      if (n === target){
        tmp.push(i);
      }
    });
    return tmp;
  }
};
