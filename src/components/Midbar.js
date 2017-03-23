import React from 'react';
import { connect } from 'react-redux';
import { fetchTweetData } from '../actions/actions';
import TweetList from './TweetList';

const Midbar = React.createClass({
    componentDidMount() {
        this.props.getTweetData();
    },
    render: function () {
        if (this.props.loading) {
            return (
                <h1>loading...</h1>
            );
        }
        return (
            <div>
                <TweetList tweets={this.generateTweets(this.props.tweetData, 1)} loading={this.props.loading} />
            </div>
        );
    },
    generateTweets (users, limit) {
        var tweets = users.reduce(function (acc, user) {
            if (!user.tweets.errors) {
            const tweets = (user.tweets.slice(0, limit));

            return acc.concat(tweets);
        }
        return acc;
    }, []);
        return tweets;
        }
    
});

function mapDispatchToProps(dispatch) {
    return {
        getTweetData: () => {
            dispatch(fetchTweetData());
        }
    };
}

function mapStateToProps(state) {
    return {
        tweetData: state.tweetData.TweetsData,
        loading: state.tweetData.loadingTweets
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Midbar);


