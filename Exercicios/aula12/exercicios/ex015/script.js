function verificar() {
    var data = new Date() //Armazena data e hora
    var ano = data.getFullYear() //Pega o valor do ano com 4 digitos
    var fano = document.getElementById('txtano') //Pega valor do input txtano
    var res = document.getElementById('res') //Pega valor da div res

        //Verifica se está vazio | Verifica se o ano é maior que o atual
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex') //Pega valor da checkbox selecionada pelo name, que deve ser igual em ambas
        var idade = ano - Number(fano.value) //Calcula a idade em anos
        var genero = '' //Seta a genero em vazio

        //Cria uma tag img
        var img = document.createElement('img')
        img.setAttribute('id','foto') //Seta id da img como foto

        if (fsex[0].checked) { //Verifica se a checkbox Masculino está marcada
            //genero = 'Homem'

            if (idade >= 0 && idade <=10) {
                //Criança
                genero = 'Criança'
                img.setAttribute('src', 'foto-bebe-m.png') //Seta o atributo src com a imagem a ser mostrada
            } else if (idade < 21) {
                //Jovem
                genero = 'Jovem'
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                //Adulto
                genero = 'Adulto'
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                //Idoso
                genero = 'Idoso'
                img.setAttribute('src', 'foto-idoso-m.png')
            }

        } else if (fsex[1].checked) { //Verifica se a checkbox Feminino está marcada
            //genero = 'Mulher'

            if (idade >= 0 && idade <=10) {
                //Criança
                genero = 'Criança'
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) {
                //Jovem
                genero = 'Jovem'
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                //Adulto
                genero = 'Adulto'
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                //Idoso
                genero = 'Idoso'
                img.setAttribute('src', 'foto-idoso-f.png')
            }

        }
        res.style.textAlign = 'center' //Alinha o testo da div res ao centro
        res.innerHTML = `Detectamos ${genero} com ${idade} ano(s)`
        res.appendChild(img) //Faz aparecer a tag img na div com id res
    }
}