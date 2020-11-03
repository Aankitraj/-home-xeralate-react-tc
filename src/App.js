import React  from 'react';
import stylee from './css/stylee';
import {Link} from 'react-scroll';
import Home from './home';
import About from './About';
import Shopping from './Shopping';


function App() {
  return(
    <div style={stylee.page}>
      {/* logo*/}
      <section style={{zIndex: '5', top: 0 , height: '10 0px'}}>
        <img src="https://pbs.twimg.com/profile_images/1012477112928780289/U1z2JjFX_400x400.jpg" style={{height: '90px', width: '100px'}} />
      </section>
      {/* navigation */}
      <div style={stylee.head}>
        <div style={{width: '40%'}}></div>

          <nav style={{
            color: 'white ',
            height: '40px',
            width: '60%',
            display: 'flex',
            justifyContent: 'space-around',
            padding: '5px'
          }}>
          <Link to="About" style={stylee.bttn} >About</Link>
          <Link to="Services" style={stylee.bttn} >Services</Link>
          <Link to="/" style={stylee.bttn} >Contact</Link>
          <Link to="/" style={stylee.bttn} >Updates</Link>
          </nav>

      </div>
      <Home />

      {/* About */}
      <div id="About" >
        <br />
        <br />
        <About />
      </div>

      {/* Shopping */}
      <div id="Services" >
        <br />
        <br />
        <Shopping />
      </div>


    <div>
      {/*  */}
    </div>
    {/* footer */}
    <div style={stylee.footer}>
        <div>
          posts
          <ul>
            <li>programms</li>
            <li>programms</li>
            <li>programms</li>
          </ul>
        </div>

        <div>
          categories
          <ul>
            <li>programms</li>
            <li>programms</li>
            <li>programms</li>
          </ul>
        </div>

        <div>
          ids
          <ul>
            <li>programms</li>
            <li>programms</li>
            <li>programms</li>
          </ul>
        </div>
    </div>
  </div>
  );
}


export default App;
