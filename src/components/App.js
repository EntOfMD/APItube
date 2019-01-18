import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';

class App extends React.Component {
    state = { search: [] };
    onTermSubmit = async term => {
        const response = await youtube.get(`/search`, {
            //async request & need promise, sends query to params for search
            params: {
                q: term
            }
        });

        this.setState({ search: response.data.items });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar
                    onFormSubmit={this.onTermSubmit}
                    searchCount={this.state.search.length}
                />
            </div>
        );
    }
}

export default App;
