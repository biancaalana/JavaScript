var agora = new Date() //Pega data e hora
var hora = agora.getHours() //Pega somente a data da variavel agora
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log(`Bom dia!`)
} else if (hora <= 18) {
    console.log(`Boa tarde!`)
} else {
    console.log(`Boa noite!`)
}