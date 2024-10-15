// criando um atendimento de saúde

let pesquisa = prompt("Qual atendimento você quer?")

if (pesquisa.toLowerCase() === 'fisioterapia'){
  console.log("A consulta com Fisioterapeuta custa R$200,00")
}
else if (pesquisa.toLowerCase() === 'cardiologia'){
  console.log("A consulta com o Cardiologista custa R$250,00")
}
else if (pesquisa.toLowerCase() === 'odontologia'){
  console.log("A consulta com o Odontologista custa R$250,00")
}
else if (pesquisa.toLowerCase() === 'dermatologia'){
  console.log("A consulta com o Dermatologista custa R$350,00")
}
else if (pesquisa.toLowerCase() === 'neuro'){
  console.log("A consulta com o Neurologista custa R500,00")
}
else if (pesquisa.toLowerCase() === 'urologia'){
  console.log("A consulta com o Urologista custa R$175,00")
}
else if (pesquisa.toLowerCase() === 'ortopedia'){
  console.log("A consulta com o otorpedista custa R$370,00")
}
else if (pesquisa.toLowerCase() === 'nutricao'){
  console.log("A consulta com o Nutricionista custa R$140,00")
}
else
  console.log("isso não existe")


//criando um algoritmo de pesquisa

let busca = prompt("Qual gênero de artista internacional você quer ouvir?").toLowerCase()

switch (busca){
  case "pop":
    console.log("Você Pode ouvir Brintey Spears ou Lady Gaga")
    break;
  case "R&B":
    console.log("Você Pode ouvir The weeknd ou Beyonce")
    break;
  case "rap":
    console.log("Você Pode ouvir Kanye West ou Travis Scott")
    break;
  default:
    console.log("este gênero não existe")
}