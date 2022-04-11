import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import {LogIn, SignUp} from '../../Api/Api';





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

  console.log(Email,Password);

  const data=await LogIn(Email,Password);

  return data.data; 
  try{

  }catch(error){
      console.log(error);
      console.log(error.message);
  
  }


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
        state.status = 'loading'
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

      // [logInAsync.rejected]: (state, action) => {

      //   // state.user = payload;
      //   // state.status = 'success';

      //   console.log('😎😎');
      //   console.log(action);
      //   console.log(action.payload.message);
      // },


     



    },
  });




  

  export const {logOutUserFN} =UsertSlice.actions; 






//selectors
export const selectUser=(state)=>state.user;

export default UsertSlice.reducer;





