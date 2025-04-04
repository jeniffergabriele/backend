let livros = [
    {
        titulo:"Coraline",
        autor: "Neil gauman ",
        editora:"capa dura com pintura trilateral",
        ano: 2002,
        sinopse: 567,
        genero: ["terror","ficçãõ cientica"],
        preco:52.
    
    },
    {
        titulo:"Crepusculo",
        autor: "Stepnhenie ",
        editora:"untrinseca",
        ano: 2005,
        sinopse: 567,
        genero: ["romance, ficcção"],
        preco:54.23
    },
    {
        titulo:"alice no ais das maravilhas",
        autor: " lewis carrol",
        editora:"Darkside;",
        ano:1865,
        sinopse:547, 
        genero: ["ficção cienntica, literatura nonsense"],
        preco:100.00
        
    },
    {
        titulo:"Como eu era antes de voce",
        autor: " Jakob Ludwig Karl Grimm, Wilhelm Grimm",
        editora:"grimm",
        ano: 1812,
        sinopse: 456,
        genero: ["conto de fadas,"],
        preco:142.00
    },
    {
        titulo:" dario de anne frank",
        autor: " anne frank",
        editora:"anne",
        ano: 1947,
        sinopse: 456,
        genero: ["Gêneros: Biografia, Autobiografia,"],
        preco:50.00
    }
]   






function mostralivros(){
    livros.forEach((livro) => {
        console.log(livro.titulo+" - "+
        livro.autor+"ano:" +
        livro.ano + " paginas:" + 
        livro.sinopse + "preço : R$"+
        livro.preco)
    })
}
mostralivros();

    

