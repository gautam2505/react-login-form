import { USER_NAME, LOGGED_IN, PASSWORD, USERS, ROLE, NAME, PHONE_NUMBER } from '../actions/actions';

const initialState = {
    userName: '',
    name: '',
    password: '',
    loggedIn: false,
    phoneNumber: '',
    users: null,
    role: ''
  };

  function reducer(state = initialState, action) {
    switch(action.type) {
        case USER_NAME:
            console.log('userName', action.value);
            return {
                ...state,
                userName: action.value
            };
            case NAME:
            return {
                ...state,
                name: action.value,
            };
            case PASSWORD:
            return {
                ...state,
                password: action.value
            };
            case PHONE_NUMBER:
                return {
                    ...state,
                    phoneNumber: action.value
                }
        case USERS:
            return {
                ...state,
                users: action.value
            }
            case LOGGED_IN:
            return {
                loggedIn: action.value
            }
            case ROLE:
                console.log('role', action.value);
            return {
                ...state,
                role: action.value
            }
        default:
            return state;
      }
    }
export default reducer;