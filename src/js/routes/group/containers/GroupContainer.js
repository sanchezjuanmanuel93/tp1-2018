import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Group from '../components/Group';
// import Comments from '../../../common/Comments/Comments';

import * as actions from '../../../actions/actions';

class GroupContainer extends React.Component {
    constructor(props) {
        super(props);

        this.props.actions.getGroup(this.props.match.params.groupId);
    }

    render() {
        return (
            <div>
                <Group group={this.props.group} />
                {/*<Comments />*/}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        group: state.worldCup.group
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
};

GroupContainer.propTypes = {
    group: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupContainer);
