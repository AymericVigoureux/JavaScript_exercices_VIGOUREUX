let tab = document.querySelectorAll('p');

for(element of tab){
  element.insertAdjacentHTML('afterbegin', element.innerText.length);
}

