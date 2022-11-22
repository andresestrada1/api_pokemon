import React, {useState, useEffect} from 'react';

function Pokemones() {

    const [pokemon , setPokemon] = useState([]);
    const [clicks, setClicks] = useState(0);
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')

    useEffect(() => {
        if (clicks > 0) {
            fetch(url)
            .then(response => response.json())
            .then(responseJson => {
                let data = responseJson.results;
                let newUrl = responseJson.next;
                setPokemon(data)
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

export default Pokemones
// https://pokeapi.co/api/v2/pokemon