import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Videocard from './VideoCard'
import { getAllVideoAPI } from '../Services/AllAPI'
import { all } from 'axios'


function View({ uploadVideoResponse }) {
  const [allVideos, setAllVideos] = useState([])
  const [DeleteVideoResponse, setDeleteVideoResponse] = useState("")
  const getAllVideos = async () => {
    const result = await getAllVideoAPI()
    console.log(result);
    if (result?.status == 200) {
      setAllVideos(result?.data);
    }

  }
  useEffect(() => {
    getAllVideos()
  }, [uploadVideoResponse, DeleteVideoResponse])
  // console.log(allVideos);
  const dragOverView = (e) => {
    e.preventDefault()
  }
  const handleCategoryVideo = (e) => {
    const { videoid, categoryid } = JSON.parse(e.dataTransfer.getData("removeVideoDetails"))
    console.log(`remove video id:${videoid} from category id:${categoryid}`);
  }
  return (
    <>
      <Row droppable={true} onDragOver={e => dragOverView(e)} onDrop={e => handleCategoryVideo(e)}>
        {allVideos?.length > 0 ? allVideos?.map((video, index) => (
          <Col key={index} className='mb-4' sm={12} md={6} lg={4}>
            <Videocard displayData={video} setDeleteVideoResponse={setDeleteVideoResponse} />

          </Col>
        ))
          :
          <div className="text-danger fw-bolder">
            no videos are uploaded yet
          </div>
        }
      </Row>
    </>
  )
}

export default View

