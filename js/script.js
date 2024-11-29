/*function joguinhoksks(id){
    alert("OK");
}

function joguinhoksks(id){
    alert(id);
}
*/

var player = "Bart";
var numJog = 0;

function joguinhoksks(id) {
    var opt = verificarSrc(id);
    var pc = document.getElementById('cpu').checked;

    if (opt == "transp.png") {
        document.getElementById(id).src = "imagens/" + player + ".png";
        numJog++;

        if (wincheck()) {
            showGameOver(player);
            return false;
        }

        if (numJog >= 9) {
            showGameOver("Deu velha");
            return false;
        }

        player = (player === "Bart") ? "Homer" : "Bart";
    }

    if (pc && player === "Homer") {
        joguinhoksks(jogoDoPc());
    }
}

function showGameOver(winner) {
    var modal = document.getElementById("gameOverModal");
    var message = document.getElementById("modalMessage");
    var modalImage = document.getElementById("modalImage");
    var homervitoria = document.getElementById("homervitoria");
    var bartvitoria = document.getElementById("bartvitoria");
    var drawAudio = document.getElementById("drawAudio");

    message.textContent = "Fim de Jogo! " + winner + " venceu!";

    if (winner === "Deu velha") {
        modalImage.src = "gif/velha.gif";
        drawAudio.play();
    } else {
        if (winner === "Homer") {
            modalImage.src = "gif/homer_win.gif";
            homervitoria.play();
        } else if (winner === "Bart") {
            modalImage.src = "gif/bart_win.gif";
            bartvitoria.play();
        }
    }

    modal.style.display = "block";

    setTimeout(function() {
        location.reload();  
    }, 5000);
}





function verificarSrc(id){
    var file = document.getElementById(id).src;
    return file.substring(file.length - 10, file.length);
}

function jogoDoPc(){
    if(verificarSrc('c5') == "transp.png"){
        return 'c5';
    }
    return 'c' + Math.floor((Math.random() * 9) + 1);
}

function wincheck(){
    if ((verificarSrc("c1") == verificarSrc("c2")) && (verificarSrc("c1") == verificarSrc("c3")) && verificarSrc("c1") != "transp.png") {
        return true;
    }
    if ((verificarSrc("c4") == verificarSrc("c5")) && (verificarSrc("c4") == verificarSrc("c6")) && verificarSrc("c4") != "transp.png") {
        return true;
    }
    if ((verificarSrc("c7") == verificarSrc("c8")) && (verificarSrc("c7") == verificarSrc("c9")) && verificarSrc("c7") != "transp.png") {
        return true;
    }

    if ((verificarSrc("c1") == verificarSrc("c4")) && (verificarSrc("c1") == verificarSrc("c7")) && verificarSrc("c1") != "transp.png") {
        return true;
    }
    if ((verificarSrc("c2") == verificarSrc("c5")) && (verificarSrc("c2") == verificarSrc("c8")) && verificarSrc("c2") != "transp.png") {
        return true;
    }
    if ((verificarSrc("c3") == verificarSrc("c6")) && (verificarSrc("c3") == verificarSrc("c9")) && verificarSrc("c3") != "transp.png") {
        return true;
    }

    if ((verificarSrc("c1") == verificarSrc("c5")) && (verificarSrc("c1") == verificarSrc("c9")) && verificarSrc("c1") != "transp.png") {
        return true;
    }
    
    if ((verificarSrc("c3") == verificarSrc("c5")) && (verificarSrc("c3") == verificarSrc("c7")) && verificarSrc("c3") != "transp.png") {
        return true;
    }
    return false;

}






