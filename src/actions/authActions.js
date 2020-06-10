import axios from "axios";
import {GET_USER,LOGOUT,USER_LOADING} from './types';

// Sign In user with Google auth
export const signIn = () => dispatch =>{
    dispatch(setUserLoading());
  
    axios.get('auth/google')
    .then(res => 
        console.log('sign in: ')
        )
    .catch(error =>
        console.log(error)
        );
    
 
};

// Getting if User is logged in
export const loggedIn = () => dispatch =>{
  
    axios
    .get ('auth/getcurrentuser')
    .then(res => 

        dispatch({
            type:GET_USER,
            payload:res.data
    }));
    
};
// Logging out users
export const logout = (user) => dispatch =>{
    console.log('logged out'+ user)
    axios
    .get ('/auth/logout')
    .then(res => 

        dispatch({
            type:LOGOUT,
            payload:user
    }))
    .then(() => {
    
    });
    
};

//project Loading
export const setUserLoading = () =>{
    return{
        type: USER_LOADING
    };

};