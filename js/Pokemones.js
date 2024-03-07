let botonOff = document.getElementById('off');
let botonOn = document.getElementById('on');
let pantalla = document.getElementById('pantallaDeck');
let pantalla2 = document.getElementById('pantallaDeckList');
let pantalla3 = document.getElementById('pantallaDeckDesc');
let contador = 0;


let Url = "https://pokeapi.co/api/v2/pokemon/";

botonOff.addEventListener('click', apagarPokeDeck = () => {
    location.reload();
});

botonOn.addEventListener('click', () => {
    contador++;

    if (contador === 1) {
        for (let i = 1; i <= 151; i++) {
            let UrlModificada = Url + i
            fetch(UrlModificada)
                .then((respuesta) => respuesta.json())
                .then((data) => {
                    //Menu
                    let menuPokemonsDeck = document.createElement('div')
                    menuPokemonsDeck.classList = 'divPokemonsList'
                    menuPokemonsDeck.innerHTML = `
                    <div>
                    <img src="${data.sprites.other["official-artwork"].front_default}" alt="img">
                    <button class="botonPokemonDescrip">Boton para decir hola</button>
                    </div>
                    <h2>Nombre: ${data.name}</h2>   
                    <h3>N${data.id}</h3>`
                    pantalla2.appendChild(menuPokemonsDeck)
                    pantalla2.style.display = 'block';
                    // Agregar evento a cada botón individualmente
                    let botonPokemon = menuPokemonsDeck.querySelector('.botonPokemonDescrip');

                    botonPokemon.addEventListener('click', function agregarcarro() {
                        let DescPokemons = document.createElement('div')
                        DescPokemons.classList = 'divDescPokemons'
                        DescPokemons.innerHTML = `
                        <div>
                        <img src="${data.sprites.other["official-artwork"].front_default}" alt="img">
                        <button class="botonPokemonDescrip">Boton para decir hola</button>
                        </div>
                        <h2>Nombre: ${data.name}</h2>   
                        <h3>N${data.id}</h3>
                        `;
                        pantalla3.appendChild(DescPokemons)
                        pantalla2.style.display = 'none';
                        pantalla3.style.display = 'block';
                    });
                });
        }
    }
});

//Descripcion Pokemon