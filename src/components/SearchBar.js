import React from 'react';
import '../css/index.css';

class SearchBar extends React.Component {
    state = { term: '', appName: `justTheBud - a YouTube explorer app` };

    onInputChange = event => {
        this.setState({ term: event.target.value });
    };

    onFormSubmit = event => {
        event.preventDefault();
        //This prevents the page from reloading everytime query is submitted, good for single page apps!

        this.props.onFormSubmit(this.state.term);
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label className="title">{this.state.appName}</label>
                        <input
                            type="text"
                            placeholder="type to search..."
                            value={this.state.term}
                            onChange={this.onInputChange}
                            //onChange={e=> this.setState({term:e.target.value})}
                        />
                        <div className="searchCount">
                            Found {this.props.searchCount} videos
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
