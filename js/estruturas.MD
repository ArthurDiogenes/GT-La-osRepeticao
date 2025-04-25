for (let i =0; i < 10; i++) {
    console.log("Hello World "+i);
}

while (i<5) {
    console.log("Hello World "+i);
    i++;
}

do {
    console.log("Hello World "+i);
    i++;
} while (i<5);

const frutas = ["Maçã", "Banana", "Laranja", "Uva"];
for (const fruta of frutas) {
    console.log("Fruta:" +fruta);
}

const user = {nome: "Lucas", idade: 25, cidade: "São Paulo"};
for (let key in user) {
    console.log(`${key}: ${user[key]}`);
}