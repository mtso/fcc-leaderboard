
/*
https://fcctop100.herokuapp.com/api/fccusers/top/recent
https://fcctop100.herokuapp.com/api/fccusers/top/alltime

*/

const recentUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
const allTimeUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

exports.getRecent = function() {
  return new Promise(function(resolve, reject) {
    $.getJSON(recentUrl, function(data) {
      resolve(data);
    })
  })
}

exports.getAllTime = function() {
  return new Promise(function(resolve, reject) {
    $.getJSON(allTimeUrl, function(data) {
      resolve(data);
    })
  })
}