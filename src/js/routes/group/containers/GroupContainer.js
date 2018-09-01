import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Group from '../components/Group';

import * as actions from '../../../actions/actions';

class GroupsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.props.actions.getGroups();
        this.props.actions.getRounds();
    }

    getMatches() {
        let matches = [];
        const groupName = this.props.match.params.groupName;

        this.props.rounds.forEach((round) => {
            const roundFilteredMatches = _.filter(round.matches, (match) => { return match.group === groupName; });

            matches = matches.concat(roundFilteredMatches);
        });

        return matches;
    }

    render() {
        const groupName = this.props.match.params.groupName;
        const group = _.find(this.props.groups, { name: groupName });
        const matches = this.getMatches();

        return <Group group={group} matches={matches} />;
    }
}

const mapStateToProps = (state) => {
    return {
        groups: state.worldCup.groups,
        rounds: state.worldCup.rounds
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
};

GroupsContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    groups: PropTypes.array.isRequired,
    rounds: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupsContainer);
