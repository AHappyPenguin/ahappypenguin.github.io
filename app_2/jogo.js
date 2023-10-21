
    var altura = 0
    var largura = 0
    var vidas = 1
    var tempo = 15

    var criaMosquitoTempo = 1500

    var nivel = window.location.search
    nivel = nivel.replace('?',"")

    if(nivel === 'normal') {
        criaMosquitoTempo = 1500
    } else if (nivel === 'dificil'){
        criaMosquitoTempo = 1000
    } else if (nivel === 'chupetao'){
        criaMosquitoTempo = 750
    }

    function ajustaTamanhoPalcoJogo() {
        altura = window.innerHeight
        largura = window.innerWidth

        console.log(largura, altura)
    }

    ajustaTamanhoPalcoJogo()

    var cronometro = setInterval(function() {
        tempo -= 1

        if(tempo < 0 && nivel === 'chupetao'){
            clearInterval(cronometro)
            clearInterval(criaMosquito)
        window.location.href="chupetao_vitoria.html"
        } else if(tempo < 0){
            window.location.href="vitoria.html"
        } else{
            document.getElementById('cronometro').innerHTML = tempo
        }
    }, 1000)

    function posicaoRandomica() {

    //remover o mosquito anterior (caso exista)
    
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        //console.log('elemento selecionado foi:' + vidas)
        if(vidas > 3 && nivel === 'chupetao') {
            window.location.href = 'chupetao.html'
        } else if (vidas > 3){
            window.location.href = 'fim_de_jogo.html'
        }

        document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"

        vidas++
    }

    var posicaoX = Math.floor/*Floor/Ceil*/(Math.random() * largura - 90) // Multiplica numero aleatório por X/Ys
    var posicaoY = Math.floor (Math.random () * altura - 90)

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    var imagemMosquitoNivel =" imagens/coracao_cheio.png"

    if(nivel === 'normal'){
        imagemMosquitoNivel = "imagens/mosquito.png"
        } else if(nivel === 'dificil') {
        imagemMosquitoNivel = "imagens/mosquito.png"
        } else if(nivel === 'chupetao'){
            imagemMosquitoNivel = "imagens/chupetao.jpeg"
        }

    //Criar o elemento html
    var mosquito = document.createElement('img')
    mosquito.src = imagemMosquitoNivel
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosquito)

    console.log(ladoAleatorio())
    console.log(tempo)
}


//Tamanho Aleatorio
function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)
    
    switch(classe) {
        case 0 :
            return 'mosquito1'
        case 1 :
            return 'mosquito2'
        case 2 :
            return 'mosquito3'
    }
}
//Lado A/B
function ladoAleatorio () {
    
    var classe = Math.floor(Math.random() * 2)

    switch(classe) {
        case 0 :
            return 'ladoA'
        case 1 :
            return 'ladoB'
    }
}