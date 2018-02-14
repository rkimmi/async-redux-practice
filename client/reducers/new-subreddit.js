import {SHOW_NEW_SUBREDDIT} from '../actions'

function newsubreddit (state = '' , action) {
    switch (action.type) {
      case SHOW_NEW_SUBREDDIT:
        return action.subreddit
  
      default:
        return state
    }
  }
  
  export default newsubreddit
  