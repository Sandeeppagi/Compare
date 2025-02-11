import React from 'react';
import {connect} from 'react-redux';

class UserHeader extends React.Component{

    render() {
        const {user} = this.props;

        if(!user){
           return <div>Loading.. </div>
        }
        return (
            <div className="header">{user.name}</div>
        );
    }
}

const mapStateToProps = (state, ownProps) =>{
    return {user: state.user.find((item) => item.id === ownProps.userId)}
};

export default connect(mapStateToProps)(UserHeader);
