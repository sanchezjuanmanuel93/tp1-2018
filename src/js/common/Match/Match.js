import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

require('./Match.scss');

class Match extends React.Component {

    render() {
        const {
            num,
            team1,
            team2,
            score1,
            score2,
            date,
            time
        } = this.props.match;

        return (
            <div className="match" key={num}>
                <Link to={`/match/${num}`}>
                    <div>{date} {time}</div>
                    <div>{team1.name} VS {team2.name}</div>
                    <div>{score1} - {score2}</div>
                </Link>
            </div>
        );
    }
}

Match.propTypes = {
    match: PropTypes.object.isRequired
};

export default Match;