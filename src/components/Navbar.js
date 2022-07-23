import React, {useState} from 'react'
import { Container } from 'react-bootstrap'
import '../styles/Navbar.css'
import {Link} from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import BuildIcon from '@mui/icons-material/Build';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

function Navbar() {
    const[toggle, settoggle]=useState(false);
    const togglestate=()=>{
        settoggle(!toggle);
    }
  return (
    <>
        <div className='hor-nav d-none d-md-block py-4'>
            <Container>
               <div className='row hor-nav-row'>
                    <div className='col-3 text-center'>
                        <SentimentVerySatisfiedIcon style={{ fontSize: '40px' }}/>
                    </div>
                    <div className=' hor-menu-list col-6'>
                        <Link to='/' className='hor-menu-link text-decoration-none'>
                            <div className='hor-menu-item py-1 px-2'>About</div>
                        </Link>
                        <Link to='/' className='hor-menu-link text-decoration-none'>
                            <div className='hor-menu-item py-1 px-2'>Experience</div>
                        </Link>
                        <Link to='/' className='hor-menu-link text-decoration-none'>
                            <div className='hor-menu-item py-1 px-2'>Projects</div>
                        </Link>
                        <Link to='/' className='hor-menu-link text-decoration-none'>
                            <div className='hor-menu-item py-1 px-2'>Contact</div>
                        </Link>

                    </div>
                    <div className='connect-btn col-3 text-center'>
                        <span className=''>Lets connect</span>
                    </div>
               </div>
            </Container>
        </div>
        <div className='ver-nav d-block d-md-none text-start my-2' id={toggle?'open':'close'}>
            <ul className='list-unstyled'>
                <li>
                    <Link to='/'>
                        <span className='icon'><SentimentVerySatisfiedIcon/></span>
                        <span className='title'>Portfolio</span>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <span className='icon'><PersonIcon className='icon-symbol'/></span>
                        <span className='title'>About</span>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <span className='icon'><ManageHistoryIcon className='icon-symbol'/></span>
                        <span className='title'>Experience</span>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <span className='icon'><BuildIcon className='icon-symbol'/></span>
                        <span className='title'>Projects</span>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <span className='icon'><ConnectWithoutContactIcon className='icon-symbol'/></span>
                        <span className='title'>Contact</span>
                    </Link>
                </li>
            </ul>
            <div className='toggle' onClick={togglestate}></div>
            
            
            
        
        </div>
    </>
    
  )
}

export default Navbar