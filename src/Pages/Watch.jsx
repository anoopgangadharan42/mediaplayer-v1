import React from 'react'
import { Link } from 'react-router-dom'


function Watch() {
  return (
    <div  className='container mt-5 mb-5'>
    <div className="d-flex justify-content-between">
      <h3>Watch History</h3>
      <Link style={{textDecoration:'none'}} to={'./home'}><i className="fa-solid fa-arrow-left"></i>  Back to <i className="fa-solid fa-house"></i></Link>
    </div>
    <table className="table mt-5 mb-5">
      <thead>
        <tr>
        <th>#</th>
        <th>caption</th>
        <th>video link</th>
        <th>Time stamp</th>
        <th><i className="fa-solid fa-ellipsis-vertical"></i></th>
         </tr>
        
      </thead>
      <tbody>
        <tr>
        <td>1</td>
        <td>Reactjs</td>
        <td><a href='https://www.youtube.com/watch?v=Tn6-PIqc4UM' target='_blank'>https://www.youtube.com/watch?v=Tn6-PIqc4UM</a></td>
        <td>02/19/2024, 12:06:36 PM</td>
        <td><button className='btn'><i className="fa-solid fa-trash text-danger"></i></button></td>

        </tr>
      </tbody>
    </table>
    </div>
  )
}

export default Watch