import styled from 'styled-components';
import ScrollWindowTop from './../../../Functions/DOM/ScrollWindowTop';
import { useEffect } from 'react';
import Loader from './Loader';





function LoaderPage({className=""}) {

  useEffect(()=>{
    
    //Scroll To Top
    ScrollWindowTop();
  },[])


  return (
    <DIV className={`${className}  display-flex justify-content-center align-item-center`}>
             <Loader className='pb-2' dotcolor="var(--color-primary)"></Loader>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    min-height:70vh; 
    /* margin-top: var(--margin-top-fix-nav);  */  /*only LoaderPage */
    
    
`;

export default LoaderPage;
