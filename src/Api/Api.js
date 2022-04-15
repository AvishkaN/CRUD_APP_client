import { GETRequest,POSTRequest,PATCHRequest,DELETERequest } from "../Functions/RESTapi/restapi";


// REFACTORING

const urlProducts='https://crudapp-2.herokuapp.com/products'; 
// const urlProducts='http://localhost:5000/products'; 

export const fetchPost=()=>GETRequest(urlProducts);

export const createPost = (newPost) => POSTRequest(urlProducts, newPost);

export const editProduct = (id, editedProduct) => PATCHRequest(`${urlProducts}/${id}`, editedProduct);

export const deleteProduct = (id) => DELETERequest(`${urlProducts}/${id}`);




const urlUser='https://crudapp-2.herokuapp.com/user'; 
// const urlUser='http://localhost:5000/user'; 




export const LogIn = (Email,Password) =>  POSTRequest(`${urlUser}/logIn`,{email:Email,password:Password});
export const SignUp = (newUser) =>  POSTRequest(`${urlUser}`,newUser);









