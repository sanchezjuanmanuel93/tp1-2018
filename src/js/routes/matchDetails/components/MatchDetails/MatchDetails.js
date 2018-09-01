import React from 'react';
import PropTypes from 'prop-types';

require('./MatchDetails.scss');

class MatchDetails extends React.Component {

    renderGoalTeam(goals) {
        return goals.map((goal) => {
            return (
                <div className='goals' key={`${goal.name}-${goal.score1}-${goal.score2}`}>
                    <span><b>{goal.name}</b> {goal.minute}&apos; {goal.offset ? `+ ${goal.offset}` : ''}  </span>
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