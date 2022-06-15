import { useEffect, useState } from "react";
import "./studentDetails.css";
import axios from "axios";
import { Link } from "react-router-dom";

export const StudentDetails = ()=>{
    const [data,setData] = useState([]);

    useEffect(()=>{
        getData();
    },[])

    // const getData = async()=>{
    //     let data =  await axios.get("http://localhost:5000/student");

    //     let datam = await data

    //     console.log(datam);
           
    const getData = async()=>{
        let result = await fetch(
            'http://localhost:5000/student', {
                method: "get",
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

    // getData();

       
        
        




    // }
    // getData();

    
    return (<div className="container-md">


        <h1 className="container">Student Details</h1>
        <div class="table-responsive" id="table_div">
        <table className="table table-striped table-hover table-responsive" id="table_mm">
            <thead>
                <tr >
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Number</th>
                <th>Created At</th>
                <th>Updated At</th>
                <th>Update</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody >
                
                   {data.map((e)=>{

                       return (<tr key={e._id} >
                       <td>{e.name}</td>
                       <td>{e.email}</td>
                       <td>{e.age}</td>
                       <td>{e.number}</td>
                       <td>{Date(e.createdAt)}</td>
                       <td>{Date(e.updatedAt)}</td>
                      <td><Link to={`/student/${e._id}`}><button value={e._id} className="btn btn-outline-info" onClick={(e)=>{
                           console.log(e.target.value);
                           let id = e.target.value;
                           

                       }} >Edit</button ></Link></td> 
                       <td><button value={e._id} className="btn btn-outline-danger" onClick={async (e)=>{

                             let id = (e.target.value);
                             let newData = [...data];
                              newData = data.filter((item)=>item._id!==id);

                             setData(newData);

                             
                             let result = await fetch(
                                `http://localhost:5000/student/${id}`, {
                                    method: "get",
                                   headers: {
                                        'Content-Type': 'application/json'
                                    }
                                });


                                

                                


                                
                                // result = await result.json();

                                
                            //     setData(result);
                            // console.log(result);


                       }} >Delete</button></td>
                       </tr>)

                   })}
                
            </tbody>
        </table>
        </div>
      


    </div>)
}