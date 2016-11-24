function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('.target')
}

function increaseRankBy(n){
  const lis = document.querySelectorAll('.ranked-list');
  for (let i = 0, l = lis.length; i < l; i++){
    lis[i].innerHTML = (parseInt(lis[i].innerHTML, 10) + n)
  }
}

function deepestChild(){
  let deepestElement = document.querySelector('div#grand-node');

    while (deepestElement.children[0]){

      deepestElement = deepestElement.children[0];

    }
  return deepestElement
}
