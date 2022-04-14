import styled from 'styled-components';



function Loader2({className="",dotcolor}) {

  return (
    <DIV className={`${className} `}  dotColor={dotcolor}>
       <div className="background-re lds-ellipsis pe-4 "><div></div><div></div><div></div><div></div></div>

    </DIV>
  );
}


const DIV=styled.div`
.lds-ellipsis {
        display: flex; 
        // width: 100%;    
        // position: relative;
        // height: 8rem;  
      }
      .lds-ellipsis div {
        // position: absolute;
        // top: 30%;
        width: 1.3rem;
        height: 1.3rem;
        border-radius: 50%;
        background: ${props => props.dotColor?  props.dotColor:'#fff'};
        animation-timing-function: cubic-bezier(0, 1, 1, 0);
      }
      .lds-ellipsis div:nth-child(1) {
        left: .8rem;
        animation: lds-ellipsis2 0.6s infinite;
      }
      .lds-ellipsis div:nth-child(2) {
        left: .8rem;
        animation: lds-ellipsis2 0.6s infinite;
      }
      .lds-ellipsis div:nth-child(3) {
        left: 3.2rem;
        animation: lds-ellipsis2 0.6s infinite;
      }
      .lds-ellipsis div:nth-child(4) {
        left: 5.6rem;
        animation: lds-ellipsis3 0.6s infinite;
      }
      @keyframes lds-ellipsis1 {
        0% {
          transform: scale(0);
        }
        100% {
          transform: scale(1);
        }
      }
      @keyframes lds-ellipsis3 {
        0% {
          transform: scale(1);
        }
        100% {
          transform: scale(0);
        }
      }
      @keyframes lds-ellipsis2 {
        0% {
          transform: translate(0, 0);
        }
        100% {
          transform: translate(2.4rem, 0);
        }
      }
      
 
`;

export default Loader2;