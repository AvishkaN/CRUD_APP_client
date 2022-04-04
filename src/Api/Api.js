import axios from "axios";



const url='https://crudapp23q.herokuapp.com/products'; 

export const fetchPost=()=>axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);

export const editProduct = (id, editedProduct) => axios.patch(`${url}/${id}`, editedProduct);

export const deleteProduct = (id) => axios.delete(`${url}/${id}`);




const urlUser='https://crudapp23q.herokuapp.com/user'; 


export const SignUp = (newUser) => axios.post(urlUser, newUser);

export const LogIn = (email,password) => axios.post(`${urlUser}/logIn`, {email,password});









