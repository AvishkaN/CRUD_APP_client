export const POSTRequest=async (link,bodyData)=>{

    const data=await fetch(link, {
       method: 'POST', 
       headers: {
           'Content-Type': 'application/json',
       },
       body:JSON.stringify(bodyData),
    }); 

    return data;
};
