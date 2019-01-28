import React, { Component } from 'react';

import CharacterList from './CharacterList';

export default class CharactersPage extends Component {
    constructor() {
        super();
        this.state = {
            pokeCharacters: [],
            starWarsCharacters: []
        };
    }


    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
        .then(data => {
            return data.json()
        }).then(data => {
            this.setState({pokeCharacters: data.results})
        })

        fetch('https://swapi.co/api/people?limit=10')
        .then(data => {
            return data.json()
        }).then(data => {
            this.setState({starWarsCharacters: data.results})
        })
    }


    render() {
        return (
            <div className="mdl-grid">
                <CharacterList characters={this.state.starWarsCharacters}/>
                <CharacterList characters={this.state.pokeCharacters}/>
            </div>
        );
    }
}
