import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'


let LoadSubreddit = ({dispatch}) => (
  <div>
    <input type='text' name='subreddit' />
  <button
    onClick={() => dispatch(fetchPosts(name))}
    >Fetch Posts</button>
    </div>
)

export default connect()(LoadSubreddit)
