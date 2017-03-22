import React from 'react';
import {connect} from 'react-redux';
import {fetchUserData, fetchTrendsData} from '../actions/actions';

import Leftbar from './Leftbar';
import Midbar from './Midbar';
import Rightbar from './Rightbar';

const Home = React.createClass({
    componentDidMount () {
        this.props.getUserData();
        this.props.getTrendsData();
    },

    render: function () {
        return (
            <div className="columns">

                <div className='column'>
                    <Leftbar profileData={this.props.userData} trending={this.props.trendsData} loading={this.props.loadingTrendsData} />   
                </div>
                <div className='column'>
                    <Midbar />   
                </div>
                <div className='column'>
                    <Rightbar />   
                </div>
            </div>

        );
    },
});

function mapDispatchToProps(dispatch) {
    return {
        getUserData: () => {
            dispatch(fetchUserData());
        },
        getTrendsData: () => {
            dispatch(fetchTrendsData());
        }
    };
}

function mapStateToProps(state) {
    return {
        userData: state.userData.userData,
        trendsData: state.trendData.trendsData,
        loadingTrendsData: state.trendData.loadingTrendsData
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);