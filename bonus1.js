async function call(url){
    const promessa = await fetch(url);
    const obj = await promessa.json();
    return obj
}

async function getChefBirthday(id) {

    let ricetta;

    try{

        //logica
        ricetta = await call(`https://dummyjson.com/recipes/${id}`);
        // console.log('ricetta', ricetta)
        
    } catch(error) {
        throw new Error (error)
    
    } if (ricetta.message) {
        throw new Error(ricetta.message)
    } 

    let userId;

    try{
        //logica 
        userId = await call(`https://dummyjson.com/users/${ricetta.userId}`);
        
    } catch(error){
        //logica
        throw new Error (error)
    
    } if (userId.message) {
        throw new Error(userId.message)
    }
    
    return {birthDate: userId.birthDate}
}


(async () => {

    try {
        //logica
        const chefBirthDate = await getChefBirthday(1);
        console.log('Chef BirthDate:', chefBirthDate) 
        
    } catch(error) {
        console.error(error)
        
    } finally {
        //logica
        console.log('Fine dello Script')
    }
})()