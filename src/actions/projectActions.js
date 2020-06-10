import axios from 'axios';
import {GET_PROJECTS,ADD_PROJECT,DELETE_PROJECT,UPDATE_PROJECT,PROJECTS_LOADING} from './types';

// Getting all projects
export const getProjects = () => dispatch =>{
    dispatch(setProjectsLoading());
   
    axios 
    .get ('api/projects')
        .then(res => 
            dispatch({

                type:GET_PROJECTS,
                payload:res.data

        }));
    

};

//add new Project
export const addProject = project => dispatch => {

    axios
        .post ('/api/projects', project)
        .then(res => 
            dispatch({

                type: ADD_PROJECT,
                payload: res.data

        }));
};

//Deleting Project
export const deleteProject = _id => dispatch =>{
    axios
    .delete (`/api/projects/${_id}`)
    .then(res => 
        dispatch({

            type:DELETE_PROJECT,
            payload:_id

    }));
};

//update Project
export const updateProject = project => dispatch =>{
    
    console.log('Project id'+project);
    
    axios
    .put (`/api/projects/${project._id}`,project)
    .then(res => 
        dispatch({

            type:UPDATE_PROJECT,
            payload:project

    }));
};



//project Loading
export const setProjectsLoading = () =>{
    return{
        type:PROJECTS_LOADING
    };

};