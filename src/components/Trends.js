import React from 'react';
import Trend from './Trend';

const Trends = React.createClass({

    render: function () {
        if(this.props.loading) {
            return (
                <h1>loading...</h1>
            )
        }
        return (
            <div>
                <p>hello</p>

            </div>
        );
    },
});


export default Trends;