const config = require('config')

function getRecent() {
  return new Promise(function(resolve, reject) {
    $.getJSON(config.RECENT_URL, function(data) {
      resolve(data);
    })
  })
}

function getAllTime() {
  return new Promise(function(resolve, reject) {
    $.getJSON(config.ALLTIME_URL, function(data) {
      resolve(data);
    })
  })
}

exports.getTopUsers = function() {
  return new Promise(function(resolve, reject) {
    var users = {};
    var done = 0;
    getRecent()
      .then(function(recent) {
        users.recent = recent;
        emitDone()
      })
      .catch(rejectError)
    getAllTime()
      .then(function(allTime) {
        users.allTime = allTime;
        emitDone()
      })
      .catch(rejectError)
    function emitDone() {
      done++;
      if (done > 1) {
        resolve(users)
      }
    }
    function rejectError(err) {
      reject(err)
    }
  })
}
