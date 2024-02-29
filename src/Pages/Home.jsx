import React, { useState } from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import View from '../Components/View'
import Category from '../Components/Category'


function Home() {
  const [uploadvideoResponse,setuploadvideoResponse]=useState("")
  return (
    <>
    <div className="container mt-5 d-flex justify-content-between">
      <Add setuploadvideoResponse={setuploadvideoResponse}/>
      <Link to={'/watch'}>view History</Link>
    </div>
    <div className="container-fluild mt-5 mb-5 row">
      <div className="col-lg-6">

      <h3>All videos</h3>
      <View uploadvideoResponse={uploadvideoResponse}/>

      </div>
      <div className="col-lg-6">
       <div className='d-flex  justify-content-evenly'>
         
          <Category/>
        </div>
       </div>

    </div>
    </>
  )
}

export default Home