// Шта су низови?

let x1 = 4
let x2 = 5
let x3 = 7

let nizBrojeva = [4,5,7,3,4,23,'23',true,3242,[1,2,3]]
console.log(typeof nizBrojeva, nizBrojeva)

// Како приступамо елементима низа?
console.log(nizBrojeva[9])
console.log(nizBrojeva[9][0])

let x 
console.log(x)

// function f(x,y){
//     console.log(x + y)
// }

// console.log(f(5,6)) // Исписује undefined

// Како итерирамо (пролазимо) кроз низ?

console.log(nizBrojeva.length)

for(let i = 0; i < nizBrojeva.length; i++){
    console.log(i,nizBrojeva[i])
}

// Збир бројева у низу
{
    let niz = [1,34,23,78,231,'A',67,2,6,23,-234]
    // console.log(niz.reduce((total,curr) => total + curr,0))
    let zbir = 0
    for(let i = 0; i < niz.length; i++){
        if(typeof niz[i] === 'number')
            zbir += niz[i]
    }
    console.log(zbir)
}


// Из низа извући (у други низ) бројеве који су дељиви са 2
{
    let nizBrojeva = [1,2,3,4,24,24,654,123,566,78,23]
    let nizDeljivih = []

    nizDeljivih.push(nizBrojeva[1])
    nizDeljivih.push(nizBrojeva[3])
    nizDeljivih.push(nizBrojeva[4])

    nizDeljivih.unshift(nizBrojeva[6])

    

}

// Како прослеђујемо низ функцији?