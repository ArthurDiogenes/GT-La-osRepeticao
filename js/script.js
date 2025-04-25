const usuarios = [
    { id: 1, nome: "Arthur", idade: 29 },
    { id: 2, nome: "Bruno", idade: 25 },
    { id: 3, nome: "Carlos", idade: 35 },
    { id: 4, nome: "Daniel", idade: 28 },
    { id: 5, nome: "Eduardo", idade: 30 },
    { id: 6, nome: "Felipe", idade: 22 },
    { id: 7, nome: "Gabriel", idade: 27 },
    { id: 8, nome: "Henrique", idade: 31 },
    { id: 9, nome: "Igor", idade: 24 },
    { id: 10, nome: "João", idade: 26 }    
]

for (const x of usuarios) {
    console.log(x.nome+" tem "+x.idade+" anos.");
}