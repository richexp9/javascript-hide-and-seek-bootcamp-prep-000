// function getFirstSelector(selector) {
//   return document.querySelector(selector)
// }
//
// function nestedTarget() {
//   return document.querySelector('#nested .target')
// }


// function deepestChild() {
//   var lis = document.querySelector('div#grand-node')
//   var los = document.querySelector('div#grand-node')
//   var counter = 0
//   while ( lis != null) {
//     counter++
//     lis = lis.querySelector('div')
//   }
//   for (var i = 0; i < counter-1; i++) {
//     los= los.querySelector('div')
//   }
//   return los
// }

// function increaseRankBy(n) {
//   const lis =document.getElementById('app').querySelectorAll('ul.ranked-list li')
//   for (let i = 0; i < lis.length; i++) {
//     lis[i].innerHTML = (parseInt(lis[i].innerHTML) + parseInt(n)).toString()
//   }
// }

// function increaseRankBy(n) {
//   var count = 0
//   var allList = document.querySelectorAll('.ranked-list')
//   var list1 = allList[0]
//   var list2 = allList[1]
//   var list1Elements = list1.querySelectorAll('li')
//   var list2Elements = list2.querySelectorAll('li')
//   for (var i = 0; i < list1Elements.length; i++) {
//     list1Elements[i].innerHTML = parseInt(list1Elements[i].innerHTML) + n
//   }
//   for (var i = 0; i < list2Elements.length; i++) {
//     list2Elements[i].innerHTML = parseInt(list2Elements[i].innerHTML) + n
//   }
// }
function increaseRankBy(n) {
  var rankedLists = document.querySelectorAll('.ranked-list')
  var children = []
  var eachChild = []
  for (var i = 0; i < rankedLists.length; i++) {
    children.concat(rankedLists[i].children)
  }
  // for (var i = 0; i < children.length; i++) {
  //   for (var j = 0; j < children[i].length; j++) {
  //     children[i][j].innerHTML = parseInt(children[i][j].innerHTML) +  n
  //   }
  // }
}



//
// function increaseRankByGeneral(n) {
//   var rankedLists = document.querySelectorAll('.ranked-list')
//   var children = []
//   var eachChild = []
//   for (var i = 0; i < rankedLists.length; i++) {
//     children.push(rankedLists[i].children)
//   }
//   for (var i = 0; i < children.length; i++) {
//     for (var j = 0; j < children[i].length; j++) {
//       children[i][j].innerHTML = parseInt(children[i][j].innerHTML) +  n
//     }
//   }
// }

//
// function increaseRankBy(n) {
//   var rankedLists = document.querySelectorAll('.ranked-list')
//   var children = []
//   var eachChild = []
//   for (var i = 0; i < rankedLists.length; i++) {
//     children.push(rankedLists[i].children)
//   }
//   for (var j = 0; j < children.length; j++) {
//     eachChild.push(children[j])
//   }
//   // for (var i = 0; i < eachChild.length; i++) {
//   //   eachChild[i]
//   // }
//   //console.log(eachChild[0]);
//   console.log(children[0]);
//   //console.log(rankedLists[0]);
// }



// console.log(string);
