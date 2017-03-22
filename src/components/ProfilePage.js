import React from 'react';

const ProfilePage = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Profile</h1>
                {this.props.params.user}
            </div>
        );
    }
});

export default ProfilePage;