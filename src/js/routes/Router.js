import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TeamsContainer from './teams/containers/TeamsContainer';
import GroupsContainer from './groups/containers/GroupsContainer';
import RoundsContainer from './rounds/containers/RoundsContainer';
import matchDetailsContainer from './matchDetails/containers/MatchDetailsContainer';
import GroupContainer from './group/containers/GroupContainer';

class Router extends React.Component {

    render() {
        return (
            <Switch>
                <Route exact path='/' component={RoundsContainer} />

                <Route exact path='/teams' component={TeamsContainer} />

                <Route exact path='/groups' component={GroupsContainer} />
                <Route exact path='/group/:groupName' component={GroupContainer} />

                <Route exact path='/rounds' component={RoundsContainer} />
                <Route exact path='/match/:matchId' component={matchDetailsContainer} />
            </Switch>
        );
    }
}

export default Router;
