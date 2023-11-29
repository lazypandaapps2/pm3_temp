import {USER_PROFILE_PIC} from '../Constants'

const initialState = {
  profilePic: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_PROFILE_PIC: {
      return {
        ...state,
        profilePic: action.payload,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
