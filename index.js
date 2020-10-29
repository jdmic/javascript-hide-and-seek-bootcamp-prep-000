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
    var results = [];
    var lastResult = results[results.length-1];
  for(var i=0; i<divs.length; i+){
    if(divs[i].innerHTML !== undefined){
      results.push(divs[i].innerHTML)
    }
  }
  
  return result[result.length-1];
}




