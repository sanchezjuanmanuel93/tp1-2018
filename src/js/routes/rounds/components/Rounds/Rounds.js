import React from 'react';
import PropTypes from 'prop-types';

import Match from '../../../../common/Match/Match';

import './Rounds.scss';

class Rounds extends React.Component {

    renderMatches() {
        return this.props.rounds.map((matchday) => {
            return (
                <div key={matchday.name.toString()} className='matchday'>
                    <h4>{matchday.name}</h4>
                    {matchday.matches.map((match) => {
                        return <Match match={match} key={match.num} />;
                    })}
                </div>
            );
        });
    }

    render() {
        return (
            <div className="rounds">
                {this.renderMatches()}
            </div>
        );
    }

}

Rounds.propTypes = {
    rounds: PropTypes.array.isRequired
};

export default Rounds;