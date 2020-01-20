$(function (){

    const socket = io();

    //Obteniendo los elementos de DOM desde la Interface
    const $messageForm = $('#message-form');
    const $messageBox = $('#message');
    const $chat = $('#chat');

    //Obteniendo los elementos de DOM desde nicknameForm
    const $nickForm = $('#nickForm');
    const $nickError = $('#nickError');
    const $nickname = $('#nickname');

    const $users = $('#usernames');

    $nickForm.submit(e => {
        e.preventDefault();
        socket.emit('new user', $nickname.val(), data => {
            if(data){

                $('#nickWrap').hide();
                $('#contentWrap').show();

            }else{

                $nickError.html(`
                <div class="alert alert-danger">
                   ¡Este usuario ya existe!
                </div>
            `);

            }

            $nickname.val(' ');
        });
    });

    //Eventos
    $messageForm.submit( e => {
        e.preventDefault();
        socket.emit('Send messages', $messageBox.val(), data => {
            $chat.append(`<span class="error">${data}</span>`);
        });
        $messageBox.val(' ');
    });

    socket.on('new message', function (data){
        $chat.append('<p class="text-primary"> <b>'+ data.nick + '</b> : '+ data.msg +'</p>');
    });

    socket.on('usernames', data => {
        let html = '';
        for (let i = 0; i < data.length; i++){
            html += `<p><i class="fas fa-grin-beam"></i> ${data[i]}</p>`;
        }
        $users.html(html);
    });

    socket.on('whisper', data => {
        $chat.append(`<p class="whisper"><b>${data.nick}: </b> ${data.msg}</p>`);
    });

    socket.on('Leer mensajes antiguos', msgs =>{
        for (let i = 0; i < msgs.length; i++){
            displayMsg(msgs[i]);
        }
    });

    function displayMsg(data){
        $chat.append(`<p class="whisper"><b>${data.nick}: </b> ${data.msg}</p>`);
    }
});

