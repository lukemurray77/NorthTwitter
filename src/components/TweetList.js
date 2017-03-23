import React from 'react';
import Tweet2 from './Tweet2';


const TweetList = React.createClass({

    render: function () {
        const tweetlist = this.props.tweets.map((user, i) => {
            return <Tweet2 
                userName= {user.user.name}
                userHandle={user.user.screen_name}
                time={user.created_at}
                text={user.text}
                />
        })
        return (
            <div>
             {tweetlist}
            </div>
        );
    }
});


export default TweetList;


