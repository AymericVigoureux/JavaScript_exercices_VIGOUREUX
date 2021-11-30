
let result = ["<ul>\n"];
  if (document.querySelector('h1')){
    console.log(document.querySelectorAll('h1,h2,h3,h4,h5,h6'));
    let tab = document.querySelectorAll('h1,h2,h3,h4,h5,h6');
    for (let element = 0; element < tab.length; element++){
      console.log(tab[element].tagName);
      if(tab[element].tagName !== "H1" && element > 0){
        if( parseInt(tab[element].tagName.slice(-1)) > parseInt(tab[element - 1].tagName.slice(-1)) ){
          result.push("\n<ul>\n");
        }
        if( parseInt(tab[element].tagName.slice(-1)) === parseInt(tab[element - 1].tagName.slice(-1)) ){
          result.push(" </li> \n");
        }
        if( parseInt(tab[element].tagName.slice(-1)) < parseInt(tab[element - 1].tagName.slice(-1)) ){
          result.push("\n </li> \n </ul>\n");
        }
      }
      result.push("<li> " + tab[element].innerText);
      if(element === tab.length -1 ){
        result.push("</li> \n");
        for(let i = 0; i < parseInt(tab[element].tagName.slice(-1)); i++){
          result.push("</ul>\n");
        }
      }
    }
  }

console.log(result.join(""));
document.querySelector('body').insertAdjacentHTML('afterbegin', result.join(""));
