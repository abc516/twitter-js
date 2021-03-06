const _ = require('lodash')

var data = []

var id = 0

function add (name, content) {
  id++
  data.push({ name: name, content: content, id: id });
}

function list () {
  return _.cloneDeep(data);
}

function find (properties) {
  return _.cloneDeep(_.filter(data, properties));
}

module.exports = { add: add, list: list, find: find };

const randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getFakeName = function() {
  const fakeFirsts = ['Nimit', 'David', 'Shanna', 'Emily', 'Scott', 'Karen', 'Ben', 'Dan', 'Ashi', 'Kate', 'Omri', 'Gabriel', 'Joe', 'Geoff'];
  const fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

const getFakeTweet = function() {
  const awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

for (let i = 0; i < 10; i++) {
  module.exports.add( getFakeName(), getFakeTweet() );
}

module.exports.add('bob', 'tweet 1')
module.exports.add('bob', 'tweet 2')
module.exports.add('bob', 'tweet 3')
module.exports.add('bob', 'tweet 4')
module.exports.add('bob', 'tweet 5')
module.exports.add('bob', 'tweet 6')

// const names = ['anton', 'daniel', 'omri', 'john']

// const tweets = ['this is the first tweet ever', 'something about fullstack', 'something else with fullstack', 'nothing']

// for (var i = 0; i < names.length; i++) {
//   data.push({name: names[i], content: tweets[i]})
// }

console.log(data)

// // console.log(module.exports.find({name: 'anton'}))

// console.log(module.exports.list())

// console.log(module.exports.list() === data)
