import axios from "axios"

export const loginUser = async (email,password)=>{

        await axios.post('',{email,password})
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })

}


