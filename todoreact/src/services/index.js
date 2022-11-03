const url="https://6363106266f75177ea3c93be.mockapi.io/tareas";

export const get= async()=> {
    try{
        const response = await fetch (url);
        const data = await response.json();
        return data;

    }catch (error){
        console.log(error);
    }
};
export const post =async (body)=>{
    try{
        const response = await fetch (url,{
            method:"POST",
            headers:{
                "Content-type":"application/json",
            },
            body: JSON.stringify(body),
        });
        const data = await response.json();
       return data;
    }catch (error){
        console.log(error);
    }
};