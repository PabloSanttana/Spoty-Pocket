import { combineReducers } from 'redux'

import Athu from './Auth/AuthReducer'
import User from './User/userReducer'
import Content from './Content/ContentReducer'

export default combineReducers({
    auth: Athu,
    user: User,
    content: Content,
})