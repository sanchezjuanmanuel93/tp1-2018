import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Match.scss';

class Match extends React.Component {

    render() {
        const {
            date,
            id,
            score1,
            score2,
            team1,
            team2,
        } = this.props.match;

        return (
            <div className="match-container">
                <Link to={`/match/${id}`}>
                    <div className="match">
                        <div className="match-date">
                            <div>{date}</div>
                        </div>
                        <div className="match-score">
                            <span>{team1.name}</span>
                            <img src={`https://api.fifa.com/api/v1/picture/flags-fwc2018-2/${team1.code}`} alt={team1.name} />
                            <b>{score1} - {score2}</b>
                            <img src={`https://api.fifa.com/api/v1/picture/flags-fwc2018-2/${team2.code}`} alt={team2.name} />
                            <span>{team2.name}</span>
                        </div>
                    </div>
                </Link>
            </div >
        );
    }
}

Match.propTypes = {
    match: PropTypes.object.isRequired
};

export default Match;