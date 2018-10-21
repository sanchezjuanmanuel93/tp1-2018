import React from 'react';
import PropTypes from 'prop-types';

import './MatchDetails.scss';

class MatchDetails extends React.Component {

    renderGoalTeam(goals) {
        return goals.map((goal) => {
            return (
                <div className='goals' key={goal.id}>
                    <span><b>{goal.player}</b> {goal.time}&apos;</span>
                </div>
            );
        });
    }

    render() {
        const {
            num,
            goals1,
            goals2,
            team1,
            team2,
        } = this.props.match;

        return (
            <div className="match-details" key={num}>
                <div>
                    <h2>{team1.name}({goals1.length})</h2>
                    {this.renderGoalTeam(goals1)}
                </div>
                <div>
                    <h2>{team2.name}({goals2.length})</h2>
                    {this.renderGoalTeam(goals2)}
                </div>
            </div>
        );
    }
}

MatchDetails.propTypes = {
    match: PropTypes.object.isRequired
};

export default MatchDetails;