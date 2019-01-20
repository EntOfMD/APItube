import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from '../components/VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state = { search: [], selectedSearch: null };

    componentDidMount() {
        this.onTermSubmit('infographic show');
    }

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
                <div className="ui grid">
                    <div className="row">
                        <div className="eleven wide column">
                            {/* there are default of 16 columns */}{' '}
                            <VideoDetail video={this.state.selectedSearch} />
                        </div>
                        <div className="five wide column">
                            <VideoList
                                onSearchSelect={this.onSearchSelect}
                                videos={this.state.search}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
