import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GroupsContainer from './groups/containers/GroupsContainer';
import matchDetailsContainer from './matchDetails/containers/MatchDetailsContainer';
import GroupContainer from './group/containers/GroupContainer';

class Router extends React.Component {

    render() {
        return (
            <Switch>
                <Route exact path='/' component={GroupsContainer} />

                <Route exact path='/groups' component={GroupsContainer} />
                <Route exact path='/group/:groupId' component={GroupContainer} />

                <Route exact path='/match/:matchId' component={matchDetailsContainer} />
            </Switch>
        );
    }
}

export default Router;
