//Procurar o botão
//QUando clicar no botão
document.querySelector("#add-time").addEventListener('click', cloneField)
//Executar uma ação
function cloneField() {
    //duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //pegar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo, limpar
    fields.forEach(function(field) {
        //pegar o field do momento e limpa-lo
        field.value = ""

    })

    //Colocar na página: onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
