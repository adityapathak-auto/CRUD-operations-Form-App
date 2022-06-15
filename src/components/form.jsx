import { useEffect, useRef, useState } from "react";
import "./form.css";
// import {axios} from "axios";



export const Form = ()=>{
    const [form,setForm] = useState({
        name:"",
        email:"",
        age:"",
        number:"",
    });

    let formRef = useRef();

    const [errors,setErrors] = useState({});

    // useEffect(()=>{
    //     if(Object.keys(errors).length === 0){
    //         console.log(errors);
    //     }
    // },[errors])

    const handleSubmit = async (e)=>{
        e.preventDefault();

        setErrors(validate(form));
        //console.log(form);
        // axios.post("http://localhost:5000/student",)

       

        
            console.log(Object.keys(errors).length);
        let result = await fetch(
            'http://localhost:5000/student', {
                method: "post",
                body: JSON.stringify(form),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            result = await result.json();
        console.warn(result);

        if (result) {
            alert("Data saved succesfully");
            formRef.current.reset();
           
        }
    



    }

    const handleChange = (e)=>{
        const {name} =e.target;
        setForm({...form,[name]:e.target.value});
    }

    const validate = (values)=>{
        const error = {};

        if(!values.name){
            error.name = "Name Is Required";
            // console.log(error);
        }

        if(!values.email){
            error.email = "Email Is Required";
            
        }
        if(!values.age){
            error.age = "Age is Required";
        }
        if(!values.number){
            error.number = "Number is Required";
        }
        // }else if(values.number.length <10){
        //     error.number = "Number should be equal to 10 digits"
        // }

        // console.log(error);


        return error;


    }
    return(<div className="form-div">
        <h1>Student Details</h1>
        <form onSubmit={handleSubmit}  ref={formRef}  class="row gy-2 gx-3 align-items-center">
            <input type="text" name="name" placeholder="Enter name" class="form-control" onChange={handleChange}/>
            <p>{errors.name}</p>
            
            <input type="email" name="email" placeholder="Enter Email" onChange={handleChange} class="form-control"></input>
            <p>{errors.email}</p>
            <input type="number" name="age" placeholder="Enter age" onChange={handleChange} class="form-control"></input>
            <p>{errors.age}</p>
            <input type="number" name="number" placeholder="Enter mobile" onChange={handleChange} class="form-control"></input>
            <p>{errors.number}</p>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>

        

        

    </div>)
}