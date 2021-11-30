let [a,,[b,...c],...d] = [5,[4,9,6,7],[8.5,9.4,10.6],[10.5,9.4,8],8]

//1) quels sont les valeurs de c et d

let [a,f,[b,...c],...d] = [5,[4,9,6,7],[8.5,9.4,10.6],[10.5,9.4,8],8]
let data = f, sum = 0;
for (let element of data) {
    sum += element;
}

/// que vaut sum : 31,28.5,26,nan