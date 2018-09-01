import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Groups from '../components/Groups/Groups';

import * as actions from '../../../actions/actions';

class GroupsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            groups: null
        };

        this.props.actions.getGroups();

        this.onSearchBoxChange = this.onSearchBoxChange.bind(this);
    }

    onSearchBoxChange(searchBoxValue) {
        // filter groups by searchBoxValue
        const filteredGroups = _.filter(this.props.worldCup.groups, (group) => {

            // find a team in the group where its name includes {searchBoxValue}
            return _.find(group.teams, (team) => {
                return team.name.toLowerCase().includes(searchBoxValue.toLowerCase());
            });
        });

        this.setState({
            groups: filteredGroups || [],
        });
    }

    render() {
        const groups = this.state.groups || this.props.worldCup.groups;

        return <Groups groups={groups} onSearchBoxChange={this.onSearchBoxChange} />;
    }
}

const mapStateToProps = (state) => {
    return {
        worldCup: state.worldCup
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
};

GroupsContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    worldCup: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupsContainer);
