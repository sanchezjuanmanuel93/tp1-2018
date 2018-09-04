import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import WriteCommentForm from './WriteCommentForm/WriteCommentForm';

import * as actions from '../../actions/actions';

import './Comments.scss';

class Comments extends React.Component {
    render() {
        const {
            worldCup,
            creatingComment,
            actions
        } = this.props;

        return (
            <div>
                <ul className="comments">
                    {worldCup.comments.map((comment) => {
                        return (
                            <li className="comment" key={comment.id}>{comment.body}</li>
                        );
                    }
                    )}
                </ul>
                <WriteCommentForm
                    submitComment={actions.createComment}
                    creatingComment={creatingComment}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        worldCup: state.worldCup,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
};

Comments.propTypes = {
    actions: PropTypes.object.isRequired,
    worldCup: PropTypes.object.isRequired,
    creatingComment: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
