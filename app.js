

mostrarPiedra = () => {
    document.getElementById("imgUsuario").src = "Imagenes/piedra.png";
}
mostrarPapel = () => {
    document.getElementById("imgUsuario").src = "Imagenes/papel.png";
}
mostrarTijera = () => {
    document.getElementById("imgUsuario").src = "Imagenes/tijera.png";
}

mostrarImgRandom = () => {
    let imgagen = Math.floor(Math.random() * 3);
    switch(imgagen){
        case 0: document.getElementById("imgMaquina").src = "Imagenes/piedra.png";
        break;
        case 1: document.getElementById("imgMaquina").src = "Imagenes/papel.png";
            break;
        case 2: document.getElementById("imgMaquina").src = "Imagenes/tijera.png";
            break;
        default: alert("something has gone wrong.");
            break;
    }
    return;
}

