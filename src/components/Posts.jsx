import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as postActions from '../actions/postActions'

export class Posts extends Component {
    async componentWillMount() {
        const { postActions } = this.props;
        await postActions.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
            // ---- Add the new post to the actual prop posts
            this.props.posts.unshift(nextProps.newPost);
        }
    }
    render() {
        const { posts } = this.props;
        const postItems = posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));
        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        )
    }
}

Posts.propTypes = {
    postActions: PropTypes.objectOf(PropTypes.func).isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
})

const mapDispatchToProps = dispatch => ({
    postActions: bindActionCreators(postActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts);