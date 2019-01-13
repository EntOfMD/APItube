import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = event => {
        this.setState({ term: event.target.value });
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label className="title">
                            justTheBud - a YouTube explorer app
                        </label>
                        <input
                            type="text"
                            placeholder="type to search..."
                            value={this.state.term}
                            onChange={this.onInputChange}
                            //onChange={e=> this.setState({term:e.target.value})}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
