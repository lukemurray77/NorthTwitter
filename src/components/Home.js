import React from 'react';
import {connect} from 'react-redux';
import {fetchUserData} from '../actions/actions';

import Leftbar from './Leftbar';
import Midbar from './Midbar';
import Rightbar from './Rightbar';

const Home = React.createClass({
    componentDidMount () {
        this.props.getUserData();
    },

    render: function () {
        
        return (
            <div className="columns">

                <div className='column'>
                    <Leftbar profileData={this.props.userData} />   
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
        }
    };
}

function mapStateToProps(state) {
    return {
        userData: state.userData.userData,
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);