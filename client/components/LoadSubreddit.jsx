import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts, showNewSubreddit} from '../actions'

//get dispatch from class. handle change will triugger dispatch with new action

// class LoadSubreddit extends React.Component {

// }

let LoadSubreddit = ({dispatch}) => (
  <div>
    <input type='text' name='subreddit' />
  <button
    onClick={() => dispatch(fetchPosts(name))}
    >Fetch Posts</button>
    </div>
)

export default connect()(LoadSubreddit)
