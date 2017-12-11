import {combineReducers} from 'redux';
import getaddress from  './getaddressReducer';
import getChefs from './getChefReducer';
import updateCart from './updateCartReducer';
import identifyUser from './identifyingUserReducer';
import showPage from './showPageReducer';
import signup from './signUpReducer'


export default combineReducers({
	address:getaddress,
	chef:getChefs,
	cart:updateCart,
	user:identifyUser,
	page:showPage,
	SignUp:signup
		});