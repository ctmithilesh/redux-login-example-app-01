import axios from "axios"
let data = null
export const loginUser = async (email,password)=>{

        await axios.post('https://reqres.in/api/login',{email,password})
        .then(res=>{
            console.log(res.data.token)
            data = res.data.token
        })
        .catch(err=>{
            console.log(err)
        })
    return data
}


