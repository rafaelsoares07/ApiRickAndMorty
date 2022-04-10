const url = "https://rickandmortyapi.com/api/character/"
let numPerson = prompt('Digite um número de 0 a 826 e em seguida clique em buscar para descobrir quem você seria em Rick And Morty')



//Pegar dados da API
function buscarDados(){
    axios.get(url+numPerson)
    .then(response=>{
        let data = response.data

        rederizarPersonagem(data)

    })
    .catch(error => console.log(error))
    
}

function rederizarPersonagem(personagem){
    document.querySelector(".imagem-do-personagem").src = personagem.image
    document.querySelector(".nome").innerHTML = personagem.name
    document.querySelector(".especie").innerHTML = personagem.species

}


buscarDados()

