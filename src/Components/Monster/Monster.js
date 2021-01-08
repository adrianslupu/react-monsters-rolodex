import React, {Component} from 'react';

export class Monster extends Component {
    clickHandler() {
        alert(this.props.name + " made poopoo sound!");
    }

    render() {
        return (
            <h1 onClick={() => this.clickHandler()}>{this.props.name}</h1>
        );
    }
}