import { Link } from 'react-router-dom'
import './Comp1.css'

function Comp1()
{
    
    return(
        <> 
        <div>
            <nav>
                <img src='https://tse2.mm.bing.net/th?id=OIP.Je5uRL6eGCT7ZJRUSX9wXQHaFj&pid=Api&P=0&h=180'/> 
                <p className='img-name'> Pinch <br/>of<br/> Yum </p>
               
            <ul>
        <li className='navbar-text'><Link to="/">Home</Link></li>
        <li className='navbar-text'> <Link to="/About">About</Link></li>
        <li className='navbar-text'><Link to="/Contact">Contact</Link> </li>
        <li className='navbar-text'><Link to="/Explore">Explore</Link> </li>
        </ul>
        </nav>
        </div>
        </>
    )
    
}
export default Comp1