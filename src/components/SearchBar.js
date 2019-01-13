import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form">
                    <div className="field">
                        <label className="title">
                            justTheBud - a YouTube explorer app
                        </label>
                        <input
                            type="text"
                            placeholder="type to search..."
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
