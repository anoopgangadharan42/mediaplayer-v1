import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
   
        <div style={{height:'300px'}} className='container mt-5 w-100'>
            <div className="footer-content d-flex justify-content-between">
                <div style={{width:'400px'}} className="media">
                    <h5 className='d-flex'><i style={{height:'30px'}} className="fa-solid fa-music me-2"></i>Media player</h5>
                    <p style={{textAlign:'justify'}}> Designed and built with all the love in the world by the bootstrap team
                    with the help our contributors. </p>
                    <span>Code licensed mit, docs cc by 3.0</span>
                    <span>currently v532.</span>
                </div>
                <div className="links d-flex flex-column">
                <h5 className='d-flex'>Links</h5>
                    <Link to={'/landing'} style={{textDecoration:'none' ,color:'white'}}>Landing Page</Link>
                    <Link to={'/home'} style={{textDecoration:'none' ,color:'white'}}>Home Page</Link>
                    <Link to={'/Watch'} style={{textDecoration:'none' ,color:'white'}}>Watch History</Link>
                </div>
                <div className="guildes d-flex flex-column">
                    <h5>Guildes</h5>
                    <a href='https://react.dev/' target='_blank' style={{textDecoration:'none' ,color:'white'}}>Reactjs </a>
                    <a href='https://reactrouter.com/en/main'  target='_blank'style={{textDecoration:'none' ,color:'white'}}>ReactRouting </a>
                    <a href='https://react-bootstrap.netlify.app/' target='_blank' style={{textDecoration:'none' ,color:'white'}}>ReactBootstrap </a>
                </div>
                <div className="contact">
                    <h5>contact us</h5>
                    <div className="d-flex">
                        <input type="text" className="form-control"  placeholder='email id'/>
                        <button className='btn btn-info'><i className="fa-solid fa-arrow-right"></i> </button>
    
                    </div>
                    <div className="icons d-flex justify-content-between mt-3">
                    <a href='https://react.dev/' target='_blank' style={{textDecoration:'none' ,color:'white'}}><i class="fa-brands fa-twitter"></i> </a>
                    <a href='https://react.dev/' target='_blank' style={{textDecoration:'none' ,color:'white'}}><i class="fa-brands fa-instagram"></i> </a>
                    <a href='https://react.dev/' target='_blank' style={{textDecoration:'none' ,color:'white'}}><i class="fa-brands fa-facebook"></i> </a>
                    <a href='https://react.dev/' target='_blank' style={{textDecoration:'none' ,color:'white'}}><i class="fa-brands fa-linkedin"></i> </a>
                    <a href='https://react.dev/' target='_blank' style={{textDecoration:'none' ,color:'white'}}> <i class="fa-brands fa-github"></i></a>
                    <a href='https://react.dev/' target='_blank' style={{textDecoration:'none' ,color:'white'}}><i class="fa-solid fa-envelope"></i></a>
    
                    
                    </div>
                </div>
    
            </div>
            <p className='text-center mt-5'> Copyright &copy: 2024 Media player Buit with React</p>
            </div>

  )
}

export default Footer