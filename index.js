function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}


function deepestChild() {
  var lis = document.querySelector('div#grand-node')
  var los = document.querySelector('div#grand-node')
  var counter = 0
  while ( lis != null) {
    counter++
    lis = lis.querySelector('div')
  }
  for (var i = 0; i < counter-1; i++) {
    los= los.querySelector('div')
  }
  return los
}

function increaseRankBy(n) {
  const lis =document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + parseInt(n)).toString()
  }
}



console.log(string);
