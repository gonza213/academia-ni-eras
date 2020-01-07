function resultado() {
    var p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, nota;
    
    //  1ª pregunta 
    if (document.getElementById('p2').checked==true) {p1=1}
    else {p1=0}

    //  2ª pregunta 
    if (document.getElementById('p4').checked==true) {p2=1}
    else {p2=0}

    //  3ª pregunta 
    if (document.getElementById('p6').checked==true) {p3=1}
    else {p3=0}

    //  4ª pregunta 
    if (document.getElementById('p8').checked==true) {p4=1}
    else {p4=0}

    //  5ª pregunta 
    if (document.getElementById('p10').checked==true) {p5=1}
    else {p5=0}

    //    6ª pregunta 
    if (document.getElementById('p12').checked==true) {p6=1}
    else {p6=0}

        //  7ª pregunta 
    if (document.getElementById('p14').checked==true) {p7=1}
    else {p7=0}

        //  8ª pregunta 
    if (document.getElementById('p16').checked==true) {p8=1}
    else {p8=0}

        //  9ª pregunta 
    if (document.getElementById('p18').checked==true) {p9=1}
    else {p9=0}

        //  10ª pregunta 
    if (document.getElementById('p20').checked==true) {p10=1}
    else {p10=0}
    
    nota=p1+p2+p3+p4+p5+p6+p7+p8+p9+p10;
    if(nota > 6){
        
            Swal.fire({
            icon: 'success',
            title: '¡Aprobado!',
            text: '¡Felicitaciones! Aciertos: ' + nota
            });


    }else{

        Swal.fire({
            icon: 'error',
            title: '¡Desaprobado!',
            text: '¡Vuelve a intentarlo! Aciertos: ' + nota
            });
       

    }
    location.reload(true);
}