import axios from '../axios'
 const handleLoginAPI=(userEmail,userPassword)=>{
    return axios.post('/api/login',{email:userEmail,password:userPassword});

}
const getAllUser=()=>{
    return axios.get(`/api/get_all_user?id=ALL`)

}
const createNewUserService=(data)=>{
    console.log('Check create new user',data)
    return axios.post('/api/create_new_user',data)

}
const deleteUserService=(userId)=>{
    //return axios.delete('/api/delete_new_user',{id:userId})
    return axios.delete('/api/delete_new_user',{
        data:{
            id:userId
        }
    })
}
const editUserServie=(inputData)=>{
    return axios.put('/api/edit_new_user',inputData)

}
const getAllCodeSevice=(inputType)=>{
    return axios.get(`/api/allcode?type=${inputType}`)

}

export {handleLoginAPI,getAllUser,createNewUserService,deleteUserService,editUserServie,getAllCodeSevice}