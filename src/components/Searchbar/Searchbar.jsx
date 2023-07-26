import { Component } from "react";
import styled from "./Searchbar.module.css";
import PropTypes from "prop-types";

export class Searchbar extends Component {
    state = {
        query: ''
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.query);
        this.setState({ query: '' });
    }
    handleChange = (e) => {
        this.setState({ query: e.target.value });
    }
    
    render() {
        return (
            <header className={styled.Searchbar}>
                <form onSubmit={this.handleSubmit} className={styled.SearchForm}>
                    <button type="submit" className={styled.SearchFormButton}>
                        <span className={styled.SearchFormbuttonlabel}>Search</span>
                    </button>

                    <input
                        className={styled.SearchFormInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.query}
                        onChange={this.handleChange}
                    />
                </form>
            </header>
        );
    }
}