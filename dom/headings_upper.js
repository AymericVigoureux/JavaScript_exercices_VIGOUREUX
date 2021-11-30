
let tab =[];

for(let i = 1; i<7; i++){
  if(document.querySelector('h' + i)){
    tab = tab.concat(document.querySelectorAll('h' + i));
  }
}
for(element of tab){
  for(elements of element){
    elements.innerHTML = elements.innerHTML.toUpperCase();
  }
}


