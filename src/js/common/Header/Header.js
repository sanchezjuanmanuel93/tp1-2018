import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

class Header extends React.Component {

    render() {
        return (
            <ul className="navigation">
                <li><Link to='/groups'>Groups</Link></li>
                {/*<li><Link to='/rounds'>Matches</Link></li>*/}
            </ul>
        );
    }
}

export default Header;
