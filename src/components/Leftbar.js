import React from 'react';
import ProfileCard from './ProfileCard';
import Trends from './Trends';


const Leftbar = React.createClass({
    render: function () {
        return (
            <div className='leftbar'>
                {this.generateUser(this.props.profileData)}
                <Trends trends={this.props.trending} loading={this.props.loading}/>
            </div>
        );
    },
    generateUser (userData) {
        return (
            <ProfileCard
            backgroundImg={userData.profile_background_image_url}
            profilePic={userData.profile_image_url}
            userName={userData.name}
            userHandle={userData.screen_name}
            followingNumber={userData.friends_count}
            followersNumber={userData.followers_count}
            description={userData.description}
            tweets={userData.statuses_count}
            />
        );
    }
});





export default Leftbar;