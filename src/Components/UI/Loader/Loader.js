import styled from 'styled-components';



function Loader({className="",size=2}) {

  return (
    <DIV className={`${className} display-flex justify-content-center `} size={size}>
       
       <div className="loader ">

       </div>

    </DIV>
  );
}


const DIV=styled.div`
        width:100%;
        overflow-y: hidden;
            .loader{
                width: 100%;
                border: 1rem solid #f3f3f3;
                border-radius: 100%; 
                border-top: ${props => (props.size)/2+'rem'}  solid var(--color-primary);
                width: ${props => props.size+'rem'};
                height: ${props => props.size+'rem'};
                -webkit-animation: spin 2s linear infinite; /* Safari */
                animation: spin 1s linear infinite;
            }
        /* Safari */
        @-webkit-keyframes spin {
                0% { -webkit-transform: rotate(0deg); }
                100% { -webkit-transform: rotate(360deg); }
        }
        @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
        }
 
`;

export default Loader;