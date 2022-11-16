fetch("https://reqres.in/api/users/" )
.then((response) =>{
    if (response.ok) {
        return response.json()
    }else{
        return Promise.reject({
            status:response.status
        })
    }
})
.then((JSON)=>console.log(JSON))
.catch((error)=>{
    if (error.status==404) {
        console.log('Data  tidak di temukan')
    }
})