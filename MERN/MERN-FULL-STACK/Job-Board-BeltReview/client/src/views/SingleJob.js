import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import {Link, useParams, useHistory} from 'react-router-dom';

const SingleJob = (props) => {
    const [job, setJob] = useState({});
    const {_id} = useParams();
    const history = useHistory()

    useEffect(() => {
        axios.get("http://localhost:8000/api/jobs/" + _id)
        .then(res => {
            console.log(res.data);
            setJob(res.data)
        })
    },[])

    const onDeleteHandler = () => {
        if(window.confirm("Are you sure you want to delete this job?")) {
            axios.delete(`http://localhost:8000/api/jobs/${_id}`)
                .then(res => {
                    console.log(res);
                    history.pushState("/")
                })
                .catch(err => console.log(err.response))
        }
    }
    return(
        <div className="w-75 mx-auto p-5">
            <h1>{job.title} at {job.company}</h1>
            <h2>Salary: {job.salary}</h2>
            <h2>Remote? {job.remote ? "yes" : "no"}</h2>
            <h2>Remote? {job.active ? "yes" : "no"}</h2>

            <Link className="btn btn-info btn-lg m-3" to={`/jobs/${_id}/edit`}>Edit</Link>
            <button className="btn btn-danger btn-lg m-3">Delete</button>
            <Link className="btn btn-primary btn-lg m-3" to={"/"}>Back</Link>
        </div>
    )
}

export default SingleJob;