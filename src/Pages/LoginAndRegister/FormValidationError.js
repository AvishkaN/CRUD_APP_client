import styled from 'styled-components';
import WarningIcon from '@mui/icons-material/ErrorOutlineOutlined';



function FormValidationError({className="",text="Please Provide Valid Email"}) {

  return (
    <DIV className={`text-color-red  display-flex align-items-center mt-3   ${className}`}>

            <WarningIcon className="font-2-1 me-1 " ></WarningIcon>
            <div className="">{text}</div>

    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    
 
`;

export default FormValidationError;
