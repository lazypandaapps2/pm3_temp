import {USER_PROFILE_PIC} from  '../Constants'

export const setUserProfilePic = (data) => ({
  type: USER_PROFILE_PIC,
  payload: data,
});
