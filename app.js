

mostrarPiedra = () => {
    document.getElementById("imgUsuario").src = "Imagenes/piedra.png";
    document.getElementById("imgUsuario").value = "0";
}
mostrarPapel = () => {
    document.getElementById("imgUsuario").src = "Imagenes/papel.png";
    document.getElementById("imgUsuario").value = "1";
}
mostrarTijera = () => {
    document.getElementById("imgUsuario").src = "Imagenes/tijera.png";
    document.getElementById("imgUsuario").value = "2";
}

mostrarImgRandom = () => {
    let imgagen = Math.floor(Math.random() * 3);
    switch(imgagen){
        case 0: 
            document.getElementById("imgMaquina").src = "Imagenes/piedra.png";
            document.getElementById("imgMaquina").value = "0";
        break;
        case 1: 
            document.getElementById("imgMaquina").src = "Imagenes/papel.png";
            document.getElementById("imgMaquina").value = "1";
            break;
        case 2: 
            document.getElementById("imgMaquina").src = "Imagenes/tijera.png";
            document.getElementById("imgMaquina").value = "2";
            break;
        default: alert("something has gone wrong.");
            break;
    }
    return;
}

agregarPuntaje = () => {
    let selecUsuario, selecMaquina;
    selecUsuario = document.getElementById("imgUsuario").value;
    selecMaquina =  document.getElementById("imgMaquina").value;
    /* 
    0 -> piedra
    1 -> papel
    2 -> tijera
    */
    if(selecUsuario == '0' && selecMaquina == '2'){
        aumentarMarcadorUsuario();
    }
    else if(selecUsuario == '1' && selecMaquina == '0'){
        aumentarMarcadorUsuario();
    }
    else if(selecUsuario == '2' && selecMaquina == '1'){
        aumentarMarcadorUsuario();
    }
    else if(selecMaquina == '0' && selecUsuario == '2'){
        aumentarMarcadorMaquina();
    }
    else if(selecMaquina == '1' && selecUsuario == '0'){
        aumentarMarcadorMaquina();
    }
    else if(selecMaquina == '2' && selecUsuario == '1'){
        aumentarMarcadorMaquina();
    }
    return;
}
let numero;
aumentarMarcadorUsuario = () => {
    numero = parseInt(document.getElementById("marcadorUsuario").innerHTML) + 1;
    document.getElementById("marcadorUsuario").innerHTML = numero;
    return;
}
aumentarMarcadorMaquina = () => {
    numero = parseInt(document.getElementById("marcadorMaquina").innerHTML) + 1;
    document.getElementById("marcadorMaquina").innerHTML = numero;
    return;
}
controlGanador = () => {
    let contador = parseInt(document.getElementById("marcadorUsuario").innerHTML);
    if(contador == 3){
        alert(`¡¡¡ FELICIDADES ERES EL GANADOR !!!`);
        resetearContadores();
        return;
    }
    contador = parseInt(document.getElementById("marcadorMaquina").innerHTML);
    if(contador == 3){
        alert(`¡¡¡ HAS PERDIDO, INTENTALO DE NUEVO !!!`);
        resetearContadores();
        return;
    }
}
resetearContadores = () => {
    document.getElementById("marcadorUsuario").innerHTML = "0";
    document.getElementById("marcadorMaquina").innerHTML = "0";
}

correrLogica = () => {
    mostrarImgRandom();
    agregarPuntaje();
    setInterval(controlGanador, 1000);
}