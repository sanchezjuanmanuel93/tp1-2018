import React from 'react';
import PropTypes from 'prop-types';

import Team from './Team/Team';

import './Teams.scss';

class Teams extends React.Component {

    renderTeams() {
        return this.props.teams.map((team) => {
            return <Team team={team} key={team.code} />;
        });
    }

    render() {
        return (
            <ul className="teams">
                {this.renderTeams()}
            </ul>
        );
    }

}

Teams.propTypes = {
    teams: PropTypes.array.isRequired
};

export default Teams;