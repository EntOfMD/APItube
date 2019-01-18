import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from '../components/VideoList';

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
                <VideoList />
            </div>
        );
    }
}

export default App;
