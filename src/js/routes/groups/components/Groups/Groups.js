import React from 'react';
import PropTypes from 'prop-types';

import GroupCard from './GroupCard/GroupCard';
import SearchBox from '../../../../common/SearchBox/SearchBox';

import './Groups.scss';

class Groups extends React.Component {

    renderGroups() {
        return this.props.groups.map((group) => {
            return <GroupCard group={group} key={group.code} />;
        });
    }

    render() {
        return (
            <div>
                <SearchBox onChange={this.props.onSearchBoxChange} placeholder="Search by team name" />
                <div className="groups">
                    {this.renderGroups()}
                </div>
            </div>
        );
    }

}

Groups.propTypes = {
    groups: PropTypes.array.isRequired,
    onSearchBoxChange: PropTypes.func.isRequired
};

export default Groups;