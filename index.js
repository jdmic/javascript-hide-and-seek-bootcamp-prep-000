function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('div.target');
}

function increaseRankBy(n){
  
  const lis = document
    .getElementById('app')
    .querySelectorAll('ul.ranked-list li');
  
  for(let i=0; i<lis.length; i++){
    lis[i].innerHTML = (parseInt(lis[i].innerHTML, 10)+n)
  }
}

function deepestChild(){
  const divs = document
    .getElementById('app')
    .querySelectorAll('div.grand-node div');
    
  console.log('DIVS VARIABLE: '+divs[divs.length].innerHTML)
  
 // return divs[divs.length-1].innerHTML.toString();
}




