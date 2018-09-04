import React from 'react';
import PropTypes from 'prop-types';

import './WriteCommentForm.scss';

export default class WriteCommentForm extends React.PureComponent {
    constructor(props) {
        super(props);

        this.submit = this.submit.bind(this);
    }

    submit(event) {
        event.preventDefault();

        const input = document.getElementById('text');
        const text = input.value;

        if (text) {
            input.value = '';
            this.props.submitComment(text);
        }
    }

    render() {
        const placeholder = this.props.creatingComment ? 'Saving...' : 'Write comment';

        return (
            <form className="write-comment-form" onSubmit={this.submit}>
                <input
                    id="text"
                    name="text"
                    className="input"
                    autoComplete="off"
                    placeholder={placeholder}
                    disabled={this.props.creatingComment}
                />
            </form>
        );
    }
}

WriteCommentForm.propTypes = {
    submitComment: PropTypes.func.isRequired,
    creatingComment: PropTypes.bool.isRequired,
};
