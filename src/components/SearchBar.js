import React from 'react';

class SearchBar extends React.Component {
    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form">
                    <div className="field">
                        <label className="title"></label>
                        <input type="text" placeholder="type to search..." />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
