import React from 'react';

const ProfileCard = React.createClass({
    render: function () {
        return (
            <div className="col-xs-12 profile-card-container">

                <img src={this.props.backgroundImg} alt="avatar" className="background-image"></img>

                <img src={this.props.profilePic} alt="avatar" className="profile-image"></img>
                <div className="name-block">
                    <h3>{this.props.userName}</h3>
                    <h4>@{this.props.userHandle}</h4>
                </div>
                <div>
                    
                        <div className="profile-stats">
                            <h4>TWEETS</h4>
                            <h5>{this.props.tweets}</h5>
                        </div>
                        <div className="profile-stats">
                            <h4>FOLLOWERS</h4>
                            <h5>{this.props.followersNumber}</h5>
                        </div>
                        <div className="profile-stats">
                            <h4>FOLLOWING</h4>
                            <h5>{this.props.followingNumber}</h5>
                        </div>
                    
                </div>
            </div>
        )
    }
})


export default ProfileCard;


/**<img src={this.props.profilePic} alt="" />
                <img src={this.props.backgroundImg} alt="" />
                {this.props.userName}
                {this.props.userHandle}
                {this.props.followersNumber}
                {this.props.followingNumber} */