import React from 'react';
import Logos from './Logos';


var NavBar = React.createClass({
    render: function () {
        return (
            <nav className='navbar navbar-default'>
                <div className='container-fluid'>
                    <Logos />
                </div>
            </nav>
        );
    }
});

export default NavBar;