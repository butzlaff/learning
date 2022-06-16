function save(){
    event.preventDefault()
    let name = document.querySelector("input[name='name']").value
    let programming = document.querySelector("select[name='programming-lang']").value
    alert('Meu nome é' + name + '\nLingaguem da programação: ' +programming)
}