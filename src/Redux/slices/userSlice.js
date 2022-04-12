import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import {LogIn, SignUp} from '../../Api/Api';
import { POSTRequest } from '../../Functions/RESTapi/restapi';





// SIGN UP
export const signUpAsync=createAsyncThunk('user/signUp',async(userData)=>{

  try{
    const data=await SignUp(userData);
    console.log(data);

    const sendObject={  // set what data send it 
      FirstName:data.data.FirstName,
      Email:data.data.Email,
      UserId:data.data._id,  
    };

    return sendObject; 

  }catch(error){
      console.log(error);
  
  }


});


// Log In
export const logInAsync=createAsyncThunk('user/logIn',async({Email,Password})=>{
  
  
  
  return new Promise(async function (resolve, reject) {
    
    
    try{
      const user=await POSTRequest('http://localhost:5000/user/logIn',{email:Email,password:Password});

  
      const userData=await user.json();
  
      if(userData.FirstName){ // check if userData is valid 
         resolve(userData);
      } else{
        throw new Error(userData);
      }


  
    }catch(error){
  
      reject(error);  
    }




  

    


  });



});





 
const UsertSlice = createSlice({
    name: 'user',
    initialState: {
      user: null,
      status: null,
      // userValidatiionError: 'wrong !!',
      userValidatiionError: null, 

    },
    reducers:{

      logOutUserFN:(state)=>{     
        state.user=null;     
      },

      setUserValidationErrorFN:(state,action)=>{     
        state.userValidatiionError=action.payload;     
      },


    },
    extraReducers: {

     


      // CREATE
      [signUpAsync.pending]: (state, action) => {
        state.status = 'pending'
      },
      [signUpAsync.fulfilled]: (state, { payload }) => {
        state.user = payload;
        state.status = 'success';
      },
      [signUpAsync.rejected]: (state, action) => {
        state.status = 'failed'
      },
      
      
      // Log In
      [logInAsync.fulfilled]: (state, { payload }) => {

        state.user = payload;
        state.status = 'success';
      },
      [logInAsync.pending]: (state,  action) => {
        
        state.status = 'pending';   
      
      },

      [logInAsync.rejected]: (state, action) => {

        state.userValidatiionError=action.error.message;   
      
      },


     



    },
  });




  

  export const {logOutUserFN,setUserValidationErrorFN} =UsertSlice.actions; 






//selectors
export const selectUser=(state)=>state.user;

export default UsertSlice.reducer;





