let a = {
  x: 'adf',
  y: 'sadf',
  z: 'f03d'
}

let b = [
  {x: 2},
  [1,2,3],
  {y: 2},
  {z: 2}
]

// of 個別物件
for (var i of b) {
  console.log(i)
}

// in 屬性
for (var i in a) {
  console.log(i)
}

var arr = ['a', 'b', 'c'];
var eArr = arr.entries();
eArr
for (let e of eArr) {
  console.log(e);
}