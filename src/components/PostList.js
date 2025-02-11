import React from 'react';
import { fetchPostandUser } from "../actions";
import { connect } from 'react-redux';
import UserHeader from './UserHeader';

class PostList extends React.Component{
    componentDidMount(){
        this.props.fetchPostandUser();
    }

    renderList(){
        return this.props.posts.map(post => {
            return(
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    </div>
                    <UserHeader userId={post.userId}/>
                </div>
            );
        })
    }

    render(){
        return(
            <div className="ui relaxed divided list">{this.renderList()}</div>
        );
    }
}

const mapStateToProps = state => {
    return { posts : state.post }
};
export default connect(mapStateToProps, {fetchPostandUser})(PostList);
