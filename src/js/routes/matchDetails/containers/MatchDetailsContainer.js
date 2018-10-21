import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MatchDetails from '../components/MatchDetails/MatchDetails';

import * as actions from '../../../actions/actions';

class MatchDetailsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.props.actions.getMatch(this.props.match.params.matchId);
    }

    render() {
        return _.isEmpty(this.props.worldCupMatch) ? null : <MatchDetails match={this.props.worldCupMatch} />;
    }
}

const mapStateToProps = (state) => {
    return {
        worldCupMatch: state.worldCup.match
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
};

MatchDetailsContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired, // react-router object
    worldCupMatch: PropTypes.object.isRequired // db object
};

export default connect(mapStateToProps, mapDispatchToProps)(MatchDetailsContainer);
