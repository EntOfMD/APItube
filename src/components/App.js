import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from '../components/VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state = { search: [], selectedSearch: null };
    onTermSubmit = async term => {
        const response = await youtube.get(`/search`, {
            //async request & need promise, sends query to params for search
            params: {
                q: term
            }
        });

        this.setState({ search: response.data.items });
    };

    onSearchSelect = video => {
        this.setState({ selectedSearch: video });
    };
    render() {
        return (
            <div className="ui container">
                <SearchBar
                    onFormSubmit={this.onTermSubmit}
                    searchCount={this.state.search.length}
                />
                <VideoDetail video={this.state.selectedSearch} />
                <VideoList
                    onSearchSelect={this.onSearchSelect}
                    videos={this.state.search}
                />
            </div>
        );
    }
}

export default App;
