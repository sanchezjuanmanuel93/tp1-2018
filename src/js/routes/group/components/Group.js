import React from 'react';
import PropTypes from 'prop-types';

import Match from '../../../common/Match/Match';

import './Group.scss';

class Group extends React.Component {

    renderMatches() {
        return this.props.group.matches.map((match) => {
            return (
                <div className="group-match" key={match.id}>
                    <Match match={match} />
                </div>
            );
        });
    }

    render() {
        return (
            <div className="group-container">
                <div className="group">
                    <h4>{this.props.group.name}</h4>
                    {this.props.group.matches && this.renderMatches()}
                </div>
            </div>
        );
    }

}

Group.propTypes = {
    group: PropTypes.object,
};

Group.defaultProps = {
    group: {},
};

export default Group;