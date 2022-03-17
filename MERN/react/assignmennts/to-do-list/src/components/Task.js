// import React from 'react';

// const Task = (props) => {
//     return (
//         <div>
//         <ul className="list-group list-group-flush">
//         {
//             task.map((item, i) => {
//                 return <div className="d-flex my-3 justify-content-evenly">
//                 <li className="list-group-item w-50 d-flex my-3 justify-content-evenly" key={i}>{item}
//                 <div className="form-check">
//                     <input onClick={handleClick} checked={checked} className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
//                     <label className="form-check-label" for="flexCheckDefault">
//                     Complete
//                     </label>
//                 </div>
//                 <input type="submit" className="btn btn-dark btn-lg" value="Delete" onClick={()=> {onDeleteHandler(i)}}/>
//                 </li>
//                 </div>
//             })
//         } 
//         </ul>
//         </div>
//     )
// }