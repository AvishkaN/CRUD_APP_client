import styled from 'styled-components';
import Button from '../../../Components/UI/Button/Button';
import Input from '../../../Components/UI/Input/Input';
import Password from '../../../Components/UI/Input/PasswordInput/Password';
import CommonComp from '../CommonComp';


import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../Redux/slices/userSlice';
import { useState } from 'react';





function RegisterPage({className="",}) {

  const navigate=useNavigate();
  const UserSelect=useSelector(selectUser);
  const [showBtn,setShowBtn]=useState(true);



  useEffect(()=>{
    
    if(UserSelect.user){ 
      navigate('/');
    };

  },[UserSelect.user]);


  return (
    <DIV className={`${className}`}>
         <div className="RegisterPage-wrapper">

             
         <CommonComp className={`${className} display-flex align-items-center `} showBtn={showBtn} setShowBtn={setShowBtn}>







                    <form    id={"myform"}>

                    
                    <Input id="FirstName" name="FirstName" className="input w-100 p-2  ps-3 mt-5  font-1-6  border-radius-5 border-grey"   placeholder='First Name *' required={true}></Input>
                   
                    <Input id="LastName" name="LastName" className="input w-100 p-2  ps-3 mt-4  font-1-6  border-radius-5  border-grey  "   placeholder='Last Name  *'    required={true} ></Input>
                    <Input id="Email" name="Email"  type={"email"} className="input w-100 p-2  ps-3 mt-4  font-1-6  border-radius-5  border-grey  "   placeholder='Email  *'  required={true}  ></Input>
                    <Input id="MobileNumber" name="MobileNumber" type={"number"} className="input w-100 p-2  ps-3 mt-4  font-1-6  border-radius-5  border-grey  " required={true}  placeholder='MobileNumber  *' ></Input>
                    <Input id="Address" name="Address" className="input w-100 p-2  ps-3 mt-4  font-1-6  border-radius-5  border-grey  "   placeholder='Address  *'  required={true}  ></Input>
                    <Input id="Password" name="Password" className="input w-100 p-2  ps-3 mt-4  font-1-6  border-radius-5  border-grey  "   placeholder='Password  *'  required={true}  ></Input>
                    
                    




                    {/* Button */}
                    <div className="text-right">

                                  {/* <Input type="submit" id={"sign-up-btn"}  className='background-primary border-radius-5  text-color-white mt-4 w-60 font-1-6 p-2' border={false} disabled={true}></Input> */}
                                  {/* <Button type="submit" id={"sign-up-btn"}  className='background-primary border-radius-5  text-color-white mt-4 w-60 font-1-6 p-2' border={false} disabled={true}></Input> */}
                    
                                  <Button type="submit" disabled={showBtn} id={"sign-up-btn"}   className="background-primary border-radius-5  text-color-white mt-4 w-60 font-1-6 p-2">Sign Up</Button>
                    
                    
                    </div>
                      </form>











                        {/* Term and Condions */}
                    <div className="font-1-2 cursor -p   text-center text-sm-end  mt-4">  
                                By login you agree to 
                                <a href="" className='font-1-1 me-1 ms-1' > Terms-Conditions</a>
                                    and 
                                <a href="" className='font-1-1 ms-1' >Privacy-Policy</a>
                         
                    </div>


        </CommonComp>


         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only RegisterPage */
    
    .RegisterPage-wrapper{
      /* width: var(--RegisterPage-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }
`;

export default RegisterPage;
