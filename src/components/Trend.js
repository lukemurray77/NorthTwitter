import React from 'react';

const Trend = React.createClass({
    render: function () {

        return (
            <div className="trend">
                <a href={this.props.url}>

                    {this.props.name}
                </a>
                <p></p>
                {this.formatTweetVol((this.props.tweetVol))}
                <p></p>


            </div>
        );
    },
    formatTweetVol: function (vol) {
            if (vol && vol < 10000) return vol + ' Tweets';
            if (vol && vol < 100000) return vol.toString().slice(0, 2) + 'K Tweets';
            if (vol && vol < 1000000) return vol.toString().slice(0, 3) + 'K Tweets';
        }
    
});

export default Trend;