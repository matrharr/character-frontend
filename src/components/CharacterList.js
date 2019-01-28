import React, { Component } from 'react';

import CharacterItem from './CharacterItem';

export default class CharacterList extends Component {

    render() {
        const {
            characters,
        } = this.props;

        return (
            <div className="mdl-cell mdl-cell--6-col">
                <ul className="demo-list-item mdl-list">
                    { characters.map((character) => (
                        <CharacterItem key={character.url} character={character}/>
                    ))}
                </ul>
            </div>
        )
    }
}
