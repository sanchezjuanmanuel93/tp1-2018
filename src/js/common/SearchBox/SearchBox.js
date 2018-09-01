import React from 'react';
import PropTypes from 'prop-types';

import './SearchBox.scss';

class SearchBox extends React.Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.props.onChange(event.target.value);
    }

    render() {
        return (
            <div className="search-box">
                <input
                    type="text"
                    placeholder={this.props.placeholder}
                    className="input"
                    autoComplete="none"
                    onChange={this.onChange}
                />
            </div>
        );
    }
}

SearchBox.propTypes = {
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string
};

SearchBox.defaultProps = {
    placeholder: 'Search'
};

export default SearchBox;