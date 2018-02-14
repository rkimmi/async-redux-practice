import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts, showNewSubreddit} from '../actions'

//get dispatch from class. handle change will triugger dispatch with new action

class LoadSubreddit extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
  this.props.dispatch(showNewSubreddit(e.target.value))
  }

  render() {
    return (
      <div>
        <input type='text' name='subreddit' value={this.props.newSubreddit} onChange={this.handleChange}/>
        <button
          onClick={() => this.props.dispatch(fetchPosts(this.props.newSubreddit))}
        >Fetch Posts</button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    newSubreddit: state.newsubreddit
  }
}
// let LoadSubreddit = ({dispatch}) => (
//   <div>
//     <input type='text' name='subreddit' />
//   <button
//     onClick={() => dispatch(fetchPosts(name))}
//     >Fetch Posts</button>
//     </div>
// )

export default connect(mapStateToProps)(LoadSubreddit)
