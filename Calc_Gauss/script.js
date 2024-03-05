var n1 = document.getElementById("n1")
var n2 = document.getElementById("n2")

Number(n1, n2)

function gauss(){
    let vetor = [ n1, n2 ]
    let numVet = 0

    for (let i = 1; numVet < n2; i++) {
        numVet = n1 + i
        numVet.push(vetor)
    }

    if (vetor.length % 2 === 0){
        let meio = vetor.length / 2
        
    }
}