import React from "react";
import { useEffect, useState } from 'react';

class SearchField extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: props.setSearchParameter };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        //alert('A name was submitted: ' + this.state.value);
        this.props.setSearchParameter(this.state.value)
        event.preventDefault();
    }

    render() {
        return (
            <form className="input-group col-12" onSubmit={this.handleSubmit}>
                <input className='form-control form-control-lg' placeholder='Bitte gib deinen Suchbegriff ein.' type="text" value={this.state.value} onChange={this.handleChange} />
                <button type="submit" value="Submit" className='btn btn-primary'>Finden</button>
            </form>
        )
    }
}

export default SearchField