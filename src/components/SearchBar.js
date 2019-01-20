import React from 'react';
import '../css/SearchBar.css';
import Favicon from '../css/img.png';
class SearchBar extends React.Component {
    state = {
        term: '',
        appName: `APItube- a YouTube explorer app`
    };

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
                        <label className="title">
                            <img
                                src={Favicon}
                                alt="Favicon img"
                                height="40"
                                className="image-favicon"
                            />
                            <a href="/">{this.state.appName}</a>
                        </label>
                        <input
                            type="text"
                            placeholder="type to search..."
                            value={this.state.term}
                            onChange={this.onInputChange}
                            //onChange={e=> this.setState({term:e.target.value})}
                            className="search-bar-half"
                        />
                    </div>

                    {/* Search result length display */}
                    <div className="searchCount ui mini statistics">
                        <div className="statistic">
                            <div className="result">
                                {' '}
                                Showing {this.props.searchCount} results...
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
