import React  from 'react';
import stylee from './css/stylee';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Home() {
  return(
    <div>
      <div style={{backgroundColor: '#dedee2', padding: '10px'}}>
        {/* animation play */}
        <div>
          <div>
          <AutoplaySlider
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={5000}
            style={{height: '400px' , backgroundColor:'white', padding: '10px', width: '98.5%'}}
          >
            <div data-src="https://bandzoogle.com/files/1958/bzblog-wdi-best-rapper-websites-img01.jpg" />
            <div data-src="https://cdn.mos.cms.futurecdn.net/oMC4fFoYVYZqrtg2MN26Wd-1200-80.jpg"  />
            <div data-src="https://extendthemes.com/wp-content/uploads/2018/07/break-the-mold-layout-min.png" />
         </AutoplaySlider>
          </div>
        </div>

        {/* content */}
        <div style={{display: 'flex'}}>
          <div style={{width: '80%', height: '1000px'}}>
            <div>Post</div>
            <div>content</div>
          </div>

          {/* side menu */}
          <div style={{width: '20%'}}>
            <div>Search</div>
            <div>ad</div>
            <div>email</div>
          </div>
        </div>

      </div>


    </div>
  );
}


export default Home;
