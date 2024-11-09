export const handleEditProfile = (e, navigate) => {
  
    e.preventDefault()
    navigate('/profiledetail')
    console.log("asri");
  }
  
  export const handleChangePassword = (e, navigate) => {

    e.preventDefault()
    navigate('/changepassword')
    console.log('password change')
   
  }