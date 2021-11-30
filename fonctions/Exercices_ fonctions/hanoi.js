/**
 * 
 * @param {number} nbr 
 * @param {number} depart 
 * @param {number} intermediaire 
 * @param {number} arrive
 */

function hanoi(nbr, depart, arrive, intermediaire){


  if(nbr > 0){
    hanoi(nbr-1, depart, intermediaire, arrive);
    console.log(depart,"->", arrive);
    hanoi(nbr-1, intermediaire, arrive, depart);
  }


}
function hanoiTransfer(nbr = 3, depart = 1, arrive = 3){
  intermediaire = 6-(depart + arrive);

  hanoi(nbr, depart, arrive, intermediaire);
}

hanoiTransfer(3, 1, 2)
