import styled from 'styled-components';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { selectUser } from '../../../Redux/slices/userSlice';


import Password from '../../../Components/UI/Input/PasswordInput/Password';
import CommonComp from './../CommonComp';
import LinkComp from '../../../Components/UI/Link/Link';
import Input from '../../../Components/UI/Input/Input';
import Button from '../../../Components/UI/Button/Button';

import FormValidationError from './../FormValidationError';
import Loader from '../../../Components/UI/Loader/Loader';





function LoginPage({className="",btnText="LOGIN",secondText="Sign Up",to="/signUp"}) {

  const navigate=useNavigate();


  const UserSelect=useSelector(selectUser);
  const [showBtn,setShowBtn]=useState(true);




  useEffect(()=>{
    
    if(UserSelect.user){ 
      navigate('/');
    };

  },[UserSelect.user]);

  return (
    <DIV >

       
       


      <CommonComp className={`${className} display-flex align-items-center `} showBtn={showBtn} setShowBtn={setShowBtn} >

        {/* Form  */}
        <form className="    ">

            <Input id="Email" name="Email" className="input w-100 p-2  ps-3 mt-4  font-1-6  border-radius-5  border-grey  "   placeholder='demo@gmail.com'   ></Input>
            <Password id="Password" name="Password" className="input w-100 p-2  ps-3 mt-4  font-1-6  border-radius-5  border-grey  "   placeholder='pass'   ></Password> 



            {/* form validation error  */}
            {UserSelect.userValidatiionError && <FormValidationError text={UserSelect.userValidatiionError}/>}


            {/* LOG IN Button */}
            <Button type="submit" disabled={showBtn} id={"log-in-btn"}   className="background-primary border-radius-5  text-color-white mt-4 w-100 font-1-6 p-2">
            
              <div className="display-flex justify-content-center align-item-center">

               {UserSelect.status==='pending' && <Loader></Loader>  }
               {!(UserSelect.status==='pending') &&  <div className=""> Log In</div>  }
               

              </div>
             
            </Button>





            {/* Txt */}
            <div className="sign-in text-center mt-4">
                <span className='  text-color-grey'> Don't have an account ? </span>
                <LinkComp to={to} className='  cursor-p text-color-primary fw-bold '>{secondText}</LinkComp>
            </div> 





        </form>


                  
      </CommonComp>


    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only LoginPage */
    
`;

export default LoginPage;
