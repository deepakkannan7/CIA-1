import { useState} from 'react';
import "./Form1.css";
function Form1() {
    const initValues={username:'',email:'',password:''}
    const [formValues,setFormValues]=useState(initValues);
    const [formErrors,setFormErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);
    const Change=(event)=>{
        const{id,value}=event.target;
        setFormValues({...formValues,[id]:value});
        console.log(formValues);
    }
    const Submit=(event)=>{
        event.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }
    const validate=(val)=>{
        const errors={};
        const reg=new RegExp("[0-9]")
        const prg=new RegExp("[A-Z][A-za-z0-9$_]+") 

        if(!val.username)
        errors.username="Please fill the column";
        else if(val.username.length<5)
        errors.username="Username must have minimum 5 characters";
        else if(reg.test(val.username))
        errors.username="Username must contain only alphabets";

        if(!val.email)
        errors.email="Invalid email";
        
        if(!val.password)
        errors.password="Please fill the password";
        else if(!prg.test(val.password))
        errors.password="Format of Password is not correct";
        return errors;
    }

    return ( 
        <>
        <div className='container'>
            {
                Object.keys(formErrors).length===0 && isSubmit?
                (<h1 style={{background:"green",color:"white"}}>Signed In Successfully</h1>)
                :(<pre></pre>)
            }
        <form onSubmit={Submit}>
            <h1>DYNAMIC FORM</h1>
            
            <div className='row'>
                <label className='un1'>User Name</label>
                <input  className='un' type="text" id='username' placeholder='Type User Name Here' value={formValues.username}
                    onChange={Change}/>
            </div>
            <p  style={{color:"red"}}>{formErrors.username}</p>

            <div className='row1'>
                <label className='un2'>E-mail</label>
                <input className='em'type="email" id='email' placeholder='Type User Email-id Here' value={formValues.email}
                    onChange={Change}/>
            </div>
            <p  style={{color:"red"}}>{formErrors.email}</p>

            <div className='row2'>
                <label className='un3'>Password</label>
                <input className='pa'type="password" id='password' placeholder='Type User Password Here' value={formValues.password}
                    onChange={Change}/>
            </div>
            <p  style={{color:"red"}}>{formErrors.password}</p>

            <div className='row3'>
                <button className='btn'>Login</button>
            </div>
        </form>
        </div>
        </>
     );
}

export default Form1;