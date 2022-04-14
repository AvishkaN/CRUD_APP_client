export const GETRequest=async (link)=>{

    const data=await fetch(link); 

    console.log(data); 
    


    return data.json();
};




export const POSTRequest=async (link,bodyData)=>{

    const data=await fetch(link, {
       method: 'POST', 
       headers: {
           'Content-Type': 'application/json',
       },
       body:JSON.stringify(bodyData),
    }); 


    return data.json();
};


export const PATCHRequest=async (link,bodyData)=>{

    const data=await fetch(link, {
       method: 'PATCH', 
       headers: {
           'Content-Type': 'application/json',
       },
       body:JSON.stringify(bodyData),
    }); 


    return data.json();
};


export const PUTRequest=async (link,bodyData)=>{

    const data=await fetch(link, {
       method: 'PUT', 
       headers: {
           'Content-Type': 'application/json',
       },
       body:JSON.stringify(bodyData),
    }); 


    return data.json();
};





export const DELETERequest=async (link,bodyData)=>{

    const data=await fetch(link, {
       method: 'DELETE', 
       headers: {
           'Content-Type': 'application/json',
       },
       body:JSON.stringify(bodyData),
    }); 


    return data.json();
};
