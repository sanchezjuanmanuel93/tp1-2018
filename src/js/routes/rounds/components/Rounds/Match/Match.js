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
            time,
            stadium,
            city,
        } = this.props.match;

        return (
            <Link to={`/match/${num}`}>
                <div className="match" key={num}>
                    <div className="match-date">
                        <div>{date} {time}</div>
                        <div>{stadium.name}</div>
                        <div>{city}</div>
                    </div>
                    <div className="match-score">
                        <span>{team1.name}</span><img src={`https://api.fifa.com/api/v1/picture/flags-fwc2018-2/${team1.code}`} alt={team1.name} />
                        <b>{score1} - {score2}</b>
                        <img src={`https://api.fifa.com/api/v1/picture/flags-fwc2018-2/${team2.code}`} alt={team2.name} />
                        <span>{team2.name}</span>
                    </div>
                </div>
            </Link>
        );
    }
}

Match.propTypes = {
    match: PropTypes.object.isRequired
};

export default Match;