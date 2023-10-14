function Validation (values) {
    
    let error = {}
    const email_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)$/
    const password_pattern = /^(?=.*[0-9])(?=. *[!@#$ %^&*])[a-zA-Z0-9!@#$ %^&*]{7,15}$/

    if (values.email === "") {
       error.email = "Nom ne doit pas etre vide"
    }

    else if(!email_pattern.test(values.email)){
       error.email = "Votre Email ne marche pas!"

   }else { 
       error.email = ""
   
   }
       
   if (values.password === "") {
       error.password = "Password ne doit pas etre vide"
       
    }
    else if (!password_pattern.test(values.password)){
       error.email = "Votre password ne marche pas!"
   }
   else { 
       error.password = ""
    }

    return error;
}
export default Validation