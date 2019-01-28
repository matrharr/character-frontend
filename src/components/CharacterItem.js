import React, { Component } from 'react';

export default class CharacterItem extends Component {

    render() {
        const {
            character,
        } = this.props;

        return (
            <li className="mdl-list__item">
                <span className="mdl-list__item-primary-content">
                    {character.name}
                </span>
            </li>
        )
    }
}
