import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './GroupCard.scss';

class GroupCard extends React.Component {
    constructor(props) {
        super(props);

        this.redirectToGroupMatches = this.redirectToGroupMatches.bind(this);
    }

    redirectToGroupMatches() {
        this.props.history.push(`/group/${this.props.group.id}`);
    }

    render() {
        const {
            name,
            teams
        } = this.props.group;

        return (
            <div className="group-card" onClick={this.redirectToGroupMatches}>
                <h3>{name}</h3>
                {teams.map((team) => { return <div className="group-item" key={team.name}>{team.name}</div>; })}
            </div>
        );
    }
}

GroupCard.propTypes = {
    group: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default withRouter(GroupCard);