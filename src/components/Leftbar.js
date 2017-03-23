import React from 'react';
import {connect} from 'react-redux';
import {fetchTrendsData} from '../actions/actions';

import ProfileCard from './ProfileCard';
import Trends from './Trends';


const Leftbar = React.createClass({
    componentDidMount () {
        this.props.getTrendsData();
    },
    render: function () {
        const trendArr = [];
        for (var i = 0; i < 10; i++) {
            trendArr.push(this.props.trendsData[i]);
        }
        return (
            <div className='leftbar'>
                {this.generateUser(this.props.profileData)}
                <Trends trends={trendArr} loading={this.props.loadingTrendsData}/>
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

function mapDispatchToProps (dispatch) {
    return {
        getTrendsData: () => {
            dispatch(fetchTrendsData());
        }
    };
}

function mapStateToProps (state) {
    return {
        trendsData: state.trendData.trendsData,
        loadingTrendsData: state.trendData.loadingTrendsData
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Leftbar);


