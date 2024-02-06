const validate=(user)=>{
    let errors={};

    if(!user.email){
        errors.email="Email required";
    }
    if(!user.password){
        errors.password="Password required";
    }
    if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(user.email)){
        errors.email="Invalid email";
    }
    if(user.password.length<6 || user.password.length>10){
        errors.password="Password must be 6 to 10 characters";
    }
    if(!/\d/.test(user.password)){
        errors.password="Password must contain one number";
    }
    if(user.email.length>35){
        errors.email="email is too long";
    }

    return errors;


}

export default validate;