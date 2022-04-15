import { GETRequest,POSTRequest,PATCHRequest,DELETERequest } from "../Functions/RESTapi/restapi";


// REFACTORING

const url='https://crudapp-2.herokuapp.com/products'; 
// const url='http://localhost:5000/products'; 

export const fetchPost=()=>GETRequest(url);

export const createPost = (newPost) => POSTRequest(url, newPost);

export const editProduct = (id, editedProduct) => PATCHRequest(`${url}/${id}`, editedProduct);

export const deleteProduct = (id) => DELETERequest(`${url}/${id}`);




const urlUser='https://crudapp-2.herokuapp.com/user'; 
// const urlUser='http://localhost:5000/user'; 




export const LogIn = (Email,Password) =>  POSTRequest(`${urlUser}/logIn`,{email:Email,password:Password});
export const SignUp = (newUser) =>  POSTRequest(`${urlUser}`,newUser);









