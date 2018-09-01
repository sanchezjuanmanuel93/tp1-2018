import React from 'react';
import PropTypes from 'prop-types';

import GroupCard from './GroupCard/GroupCard';

import './Groups.scss';

class Groups extends React.Component {

    renderGroups() {
        return this.props.groups.map((group) => {
            return <GroupCard group={group} key={group.code} />;
        });
    }

    render() {
        return (
            <div className="groups">
                {this.renderGroups()}
            </div>
        );
    }

}

Groups.propTypes = {
    groups: PropTypes.array.isRequired
};

export default Groups;