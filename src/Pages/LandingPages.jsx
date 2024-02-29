import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function LandingPages() {
  const Navigate = useNavigate()

  const handleNavigate = () => {
    Navigate('/home')

  }
  return (
    <>
      <div className='container mt-5'>
        <div className="header row align-items-center">
          <div className="col-lg-5">
            <h3>Welcome to <span className='text-warning'> Media Player</span></h3>
            <p className='mt-3' style={{ textAlign: 'justify' }}> media player app will allow you to add and remove their uploaded videos also
              helps to arrange then in different categories by providing drag and drop functionalities</p>
            <button onClick={handleNavigate} className='btn btn-info mt-3'>Get started</button>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6">
            <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="Landing Images" />
          </div>
        </div>
        <div className="features">
          <h3 className="text-center mt-5">Features</h3>
          <div className="row mt-5">
          <div className="col-lg-4">
            <Card style={{height:'450',width:'22rem'}} >
              <Card.Img variant="top" src="https://i.gifer.com/7d20.gif" />
              <Card.Body>
                <Card.Title>Manging video</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>

              </Card.Body>
            </Card>

          </div>
          <div className="col-lg-4">
            <Card style={{height:'450',width:'22rem'}} >
              <Card.Img height={'265px'} variant="top" src="https://i.pinimg.com/originals/0c/e9/d2/0ce9d222a4ac14ac1ea08ba70defb376.gif" />
              <Card.Body>
                <Card.Title>Categorize videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>

              </Card.Body>
            </Card>

          </div>
          <div className="col-lg-4">
            <Card  >
              <Card.Img  height={'290px'} variant="top" src="https://media.tenor.com/11u8gg1tMs4AAAAC/music-rock.gif" />
              <Card.Body>
                <Card.Title>Watch History</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  
                </Card.Text>

              </Card.Body>
            </Card>

          </div>


          </div>
        </div>
        <div className=" row video border p-5 mt-4 rounded align-items-center">
          <div className="col-lg-6">
            <h3 className='text-warning'>Simple fast and powerful</h3>
            <p style={{textAlign:'justify'}}> <span className='fs-4'>PLay Everything</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel autem alias nulla officia sint, et adipisci ea doloremque voluptatum quis? Quaerat, consectetur! Aut necessitatibus beatae harum minus possimus
               nulla doloremque!.
               </p>
               <p style={{textAlign:'justify'}}> <span className='fs-4'>Categorize videos</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel autem alias nulla officia sint, et adipisci ea doloremque voluptatum quis? Quaerat, consectetur! Aut necessitatibus beatae harum minus possimus
               nulla doloremque!.
               </p>
               <p style={{textAlign:'justify'}}> <span className='fs-4'>Watch History</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel autem alias nulla officia sint, et adipisci ea doloremque voluptatum quis? Quaerat, consectetur! Aut necessitatibus beatae harum minus possimus
               nulla doloremque!.
               </p>
          </div>
          <div className="col-lg-6">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/rR_2ti4l3nM?si=NHDBnm5TVCoo7rM6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>

        </div>

      </div>
      <hr />
    </>
  )
}

export default LandingPages