import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';

class App extends React.Component {
    onTermSubmit = term => {
        console.log(term);
        youtube.get(`/search`, {
            //async request & need promise, sends query to params for search
            params: {
                q: term
            }
        });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
            </div>
        );
    }
}

export default App;
