import React from 'react';
import Trend from './Trend';

const Trends = React.createClass({

    render: function () {
        if (this.props.loading) {
            return (
                <h1>loading...</h1>
            );
        }
        return (
            <div>
                {this.generateTrends(this.props.trends)}

            </div>
        );
    },
    generateTrends (trends) {
        return trends.map((trend, i) => {
            return <Trend key={i}
                    name={trend.name}
                    tweetVol={trend.tweet_volume}
                    url={trend.url}
                    />;
        });
    }
});


export default Trends;