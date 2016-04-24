/** 
 * this will just emit the list of env variables
 * using node's inbox process.env support 
 */

var t1 = require('vsts-task-lib/task')


var enabled = t1.getBoolInput('debug');

if (enabled) {

  var getKeys = function (obj) {
    var keys = [];
    for (var key in obj) {
      keys.push(key);
    }
    return keys;
  }

  console.log('getting env...');
  var env = getKeys(process.env);

  for (var k in env) {
    console.log("key: %s\n\t\tvalue: %s", env[k], process.env[env[k]]);
  }

  console.log('done with env..');
}