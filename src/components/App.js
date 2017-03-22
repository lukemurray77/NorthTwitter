import React from 'react';
import NavBar from './Navbar';


const App = React.createClass({
    render: function () {
        return (
            <div>
                <NavBar />
                {this.props.children}
            </div>

        );
    }
});

export default App;