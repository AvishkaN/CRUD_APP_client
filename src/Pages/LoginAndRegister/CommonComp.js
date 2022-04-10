import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


import CloseBtn from '../../Components/UI/CloseBtn/CloseBtn';
import LinkComp from '../../Components/UI/Link/Link';
import { logInAsync, signUpAsync } from '../../Redux/slices/userSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { ShowChart } from '@mui/icons-material';




function CommonComp(props) {


    const [formData,setFormData]=useState({});
    // const [showBtn,setShowBtn]=useState(false);

    const dispatch=useDispatch();


    const handleFormSubmit=(e)=>{ 
        e.preventDefault();
    
        const logInBtn=e.target.querySelector('#log-in-btn');
        const SignUpBtn=e.target.querySelector('#sign-up-btn');
        console.log(e.target);
        
        
        const getFormData =  Object.fromEntries(new FormData(e.target));

        if(logInBtn){  // if select login btn
            dispatch(logInAsync(getFormData));

        }  

        if(SignUpBtn){ //  if select register btn
            dispatch(signUpAsync(getFormData));

        }


  
    
    
    };

    const handleFormChange=(e)=>{ 
        e.preventDefault();

        const logInBtn=e.target.closest('form').querySelector('#log-in-btn');
        const SignUpBtn=e.target.closest('form').querySelector('#sign-up-btn');

        // console.log(e.target.closest('form').querySelector('#log-in-btn'));  
        // console.log(e.target.name);  
        // console.log(e.target.value);    
        // console.log(e.target.value);     
        
        

       
        // console.log(logInBtn);    
        // console.log(SignUpBtn);    

        


        
        
        
        // set form date to state
        setFormData({...formData,[e.target.name]:e.target.value});
        
        
        // what input values I want to check .
        let inputValues=[]; 


        if(logInBtn){ // if login page
            
            inputValues=["Email",'Password']; 
        }
        
        if(SignUpBtn){  // if sign up page
            inputValues=['Address',"Email",'FirstName','LastName','MobileNumber','Password'];
            
        }
        
        
        
        // get all empty fields now
        const isEmpty=inputValues.filter(item=>{ 
            return formData[item]===undefined  || formData[item]===''
        });
        
        
        
        if(isEmpty.length===0) props.setShowBtn(false);   // set button state 
        
     
        
    
    };
  


  return (
      <>
  


    <DIV className={`${props.className} background-aqu`} onSubmit={handleFormSubmit} onChange={handleFormChange}>
        
        <div className="common-comp-wrapper border-radius-10">


                                    <h2 className='text-center fw-bold text-color-primary background-black text-color-white p-3 dispaly-flex align-items-center  '>
                                        
                                                Login / Register
                                        
                                    </h2>    


                                        

                                    {/* Login and Register Content */}
                                    <div className="p-4  p-sm-5    ">

                                        {/* Login registrer Nav */}
                                        <div className="login-register-navv background-aqu display-flex justify-content-between w-80 ms-auto me-auto">

                                                     
                                                    <NavLink to="/login" activeclassname="active"  className="a   font-1-6  fw-bold">login</NavLink>
                                                    <NavLink to="/signUp"   className="a   font-1-6  fw-bold">SignUp</NavLink>
                                                    

                                        </div>


                                            {props.children}


                                    </div>

        </div>


        
    </DIV>
      </>
  );
}


const DIV=styled.div`
    width: 100%;
    min-height: 90vh; 

    
    .common-comp-wrapper{
        width: 45%;
        box-shadow: -2px 5px 11px 0px #b6a2a2;
        margin-left: auto;
        margin-right: auto; 

        
        @media(max-width:1067px){     
                      width: 70%; 
        }
        @media(max-width:700px){     
            width: 94%;  
        }


     

       

    }
 
    .active{ 
        color:#3cafd5;
        text-decoration:underline;
    }

    
`;

export default CommonComp;
