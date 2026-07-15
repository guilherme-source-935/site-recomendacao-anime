const buttonAction = document.querySelectorAll('.redirect')

buttonAction.forEach(function(btn) {
    btn.addEventListener('click', (evento) => {
        switch(evento.target.value){
            case 'contato':
                window.location.href = '../pages/bug-report.html'
                break
            case 'sugestao':
                window.location.href = '../pages/sugestoes.html'
                break
        }
    })
})

const buttonSend = document.querySelector('.forms-geral')
buttonSend.addEventListener('submit', () => {
    alert('Mensagem enviada com sucesso!')
})