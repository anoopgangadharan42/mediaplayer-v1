import React ,{useState}from 'react'
import { Modal,Button,Form,FloatingLabel} from 'react-bootstrap';
import { uploadVideoAPI } from '../Services/AllAPI';



function Add(setuploadvideoResponse) {
  const[UploadVideo,setUploadVideo]=useState({
    caption:"",ImageURL:"",youtubeLink:""
})
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setUploadVideo({...UploadVideo,caption:"",ImageURL:"",youtubeLink:""})
  }
  const handleShow = () => setShow(true);
console.log(UploadVideo);

const getYoutubeEmbedLink = (link)=>{
  if(link.includes("v=")){
    let videoId =link.split("v=")[1].slice(0,11)
     setUploadVideo({...UploadVideo,youtubeLink:`http://www.youtube.com/embed/${videoId}`})
    
  }else{
    setUploadVideo({...UploadVideo,youtubeLink:""})
    alert("Input proper youtube link!!!")
   
  }
 }
 const handleUpload = async()=>{
  const {caption,ImageURL,youtubeLink}=UploadVideo
  if(caption && ImageURL&& youtubeLink){
    const result = await uploadVideosAPI(UploadVideo)
    console.log(result);
    if(result.status>=200 && result.status<300){
      alert(` video '${result.data.caption}'uploaded successfully`)
      setuploadvideoResponse(result.data)
      handleClose()
    }else{
      alert("API call failed...please try after some time!!!")
    }
   
  }else{
    alert("please fill the form completely!!!")
  }
 }
 
  return (
    <>
    <div className="d-flex align-items-center">
      <h5>Upload a video</h5>
      <button onClick={handleShow} className='btn bg-secondary  ms-2'><i className="fa-solid fa-plus"></i> </button>
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> video details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p> please fill the following details!!!</p>
       <div className='border rounded border-light p-3'>
          <FloatingLabel
          controlId="floatingInputCaption"
          label="video caption"
          className="mb-3"
        >
          <Form.Control value={UploadVideo.caption} onChange={e=>setUploadVideo({...UploadVideo,caption:e.target.value})} type="text" placeholder="video caption" />
          </FloatingLabel> 
          <FloatingLabel
          controlId="floatingInputImg"
          label="image url"
          className="mb-3"
        >
          <Form.Control value={UploadVideo.ImageURL} onChange={e=>setUploadVideo({...UploadVideo,ImageURL:e.target.value})}type="text" placeholder="image url" />
          </FloatingLabel>
          <FloatingLabel
          controlId="floatingInputLink"
          label=" youtube video caption"
          className="mb-3"
        >
          <Form.Control value={UploadVideo.youtubeLink}  onChange={e=>getYoutubeEmbedLink(e.target.value)} type="text" placeholder=" youtube video caption" />
          </FloatingLabel>
       </div>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleUpload}  className="btn btn-info">Upload</Button>
        </Modal.Footer>
      </Modal>

    
    
   
    </>
  )
}

export default Add