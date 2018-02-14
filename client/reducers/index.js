import {combineReducers} from 'redux'

import errorMessage from './error-message'
import subreddits from './subreddits'
import waiting from './waiting'
import newsubreddit from './new-subreddit'

export default combineReducers({
  errorMessage,
  subreddits,
  waiting,
  newsubreddit
})

