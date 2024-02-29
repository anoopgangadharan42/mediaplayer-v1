import React from 'react'
import { Navbar ,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <Navbar className="bg-info">
    <Container>
        
      <Link to={'/'} style={{textDecoration:'none'}}>
          <Navbar.Brand className='fw-bolder d-flex align-items-center'  href="/" style={{color:'white'}}>
          <i className="fa-solid fa-music me-3"></i>{' '}
            Media player
          </Navbar.Brand>
      </Link>
    </Container>
  </Navbar>

  )
}

export default Header