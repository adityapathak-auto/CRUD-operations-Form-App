import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

export const Edit = ()=>{

    const navigate = useNavigate();

    const {id}= useParams();
    console.log(id);
    const [data,setData] = useState({});

    useEffect(()=>{
        getData();
    },[])

    const getData = async()=>{
        let result = await fetch(
            `http://localhost:5000/student/getstudent/${id}`, {
                method: "GET",
               headers: {
                    'Content-Type': 'application/json'
                }
            });
            result = await result.json();
            setData(result);
        console.log(result);
        // if (result) {
        //     alert("Data saved succesfully");
           
        // }
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();

        let data2 = await fetch(`http://localhost:5000/student/update/${id}`,{
            method:"PATCH",
            body:JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
            


        })

        const datam = await data2.json();
        console.log(datam);

        if(datam){
            navigate("/details")
        }





    }

    const handleChange = (e)=>{
        const {name,value} = e.target;

        setData((preval)=>{
           return {...preval,[name]:value}
        })

        //console.log(data);

        

    }

    return(<div className="form-div" style={{}}>
    <h1>Update Details</h1>
    <form onSubmit={handleSubmit} class="row gy-2 gx-3 align-items-center">
        <input type="text" name="name" placeholder="Enter name" value={data.name} onChange={handleChange} class="form-control"/>
        
        
        <input type="email" name="email" placeholder="Enter Email" value={data.email} onChange={handleChange}  class="form-control"></input>
        
        <input type="number" name="age" placeholder="Enter age" value={data.age} onChange={handleChange} class="form-control"></input>
        
        <input type="number" name="number" placeholder="Enter mobile" value={data.number} onChange={handleChange}  class="form-control"></input>
        

        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</div>)
}