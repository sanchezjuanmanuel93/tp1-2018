import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Groups from '../components/Groups/Groups';

import * as actions from '../../../actions/actions';

class GroupsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.props.actions.getGroups();
    }

    render() {
        return  <Groups groups={this.props.worldCup.groups} />;
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
