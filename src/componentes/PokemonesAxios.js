import React, {useState, useEffect} from 'react';
import axios from 'axios';

const PokemonesAxios =() =>{

    const [pokemon , setPokemon] = useState([]);
    const [clicks, setClicks] = useState(0);
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')

    useEffect(() => {
        if (clicks > 0) {
            axios.get(url)
            .then(response => response.data)
            .then(data => {
                let nombre = data.results;
                let newUrl = data.next;
                setPokemon(nombre)
                setUrl(newUrl)
            })
        }
    }, [clicks])

    const updateClicks = () => {
        setClicks(clicks+1)
    }

    return (
        <div>
            <div>
                <h1 style={{color:'blue'}}>Pokemones</h1>
                <br></br>
                <p>Obten 20 nuevos pokemos haciendo click en el boton</p>
            </div>
            <div>
                <button className='btn btn-success' onClick={updateClicks}>Fetch Pokemon</button>
            </div>
            <div>
                {
                    pokemon.map((pokemon, index) => {
                        return (<div key={index}>{pokemon.name}</div>)
                    })
                }
            </div>
        </div>
    )
}

export default PokemonesAxios;
// https://pokeapi.co/api/v2/pokemon