import axios from "axios"
const baseUrl = `${process.env.REACT_APP_PROJECT_API}/api`


//Authentication Routes 
export const signup = (username, email, password) => { //order has to match with the handleFormsubmit on signup.js
    return axios.post(`${baseUrl}/signup`, {username, email, password})
}

export const login = (username, password) => { //order has to match with the handleFormsubmit on signup.js
    return axios.post(`${baseUrl}/login`, {username, password}, {withCredentials: true})
}

export const loggedin = () => {
    return axios.get(`${baseUrl}/loggedin`, {withCredentials: true});
  }

  export const addowner = (OwnerProfile) => {
    return axios.post(`${baseUrl}/sitter-request`, OwnerProfile)
}

export const uploadFile = (uploadData) => {
    return axios.post(`${baseUrl}/upload`, uploadData)
}