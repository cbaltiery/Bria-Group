import Footers from "./Footers";
import Headers from "./Header";
import './missionPage.css'

const MissionPage = (props) => {
    return ( <>
        <div className="mission-top">
            <h3 style={{'color' : 'grey'}}>We are in the midst of the sixth largest mass extinction on earth.</h3>
            {/* Image of NYC city scape */}
        </div>
    
    <div className="mission-middle">
    <h4 style={{'color': 'olive'}}>Earth is on track to lose <b style={{'color' : 'orange'}}>half its species</b> in the next 80 years...and the vast majority of these species are <b style={{'color' : 'orange'}}>still unknown to science</b></h4>
    {/* black background */}
    </div>
    {/* begin with translucent box with THE PROBLEM, VISION, MISSION, VALUES */}
        <div className="mission">
    <h3>We know what we have to do.</h3>
        {/* image of child standing in mountains */}
        </div>
    <div className="mission-vision">
          <div className="mission-box1">
    <h1 style={{'color' : 'grey'}}>1</h1><h4 style={{'color' : 'white'}}>Discover & document life on earth... before it disappears.</h4>
    <h1 style={{'color' : 'grey'}}>3</h1><h4 style={{'color' : 'white'}}>Halt climate change and pollution. Now.</h4>
          </div>    
          <div className="mission-box2">
    <h1 style={{'color' : 'grey'}}>2</h1><h4 style={{'color' : 'white'}}>Preserve up to half the planet for wildlife.</h4>
    <h1 style={{'color' : 'grey'}}>4</h1><h4 style={{'color' : 'white'}}>Protect and reintroduce endangered species.</h4>
           </div> 
    {/* black background */}
    </div>
    <div className="revoluton">
    <h3>This work requires a revolution.</h3><h4 style={{'color' : 'white'}}>We're starting with 10,000 new botanical research gardens.</h4>
    {/* forest green background */}
    </div>
    {/* nature lady photo scrolls left while you scroll down */}
    <div className="vision" style={{'color' : 'olive'}}>
        <div id="text-side">
    {/* small logo */} <h5 style={{'marginLeft' : '20px'}}>VISION</h5> 
    {/* text takes 2/3 page with white background / 1/3 page light grey with faint photo */}
    <h3 >Help humanity transition to a 'new earth' that is a safe and welcoming home for all species.</h3>
    <p>By the year 2050, the story of the Anthropocene Epoch will have evolved from earth’s greatest tragedy into humanity’s greatest triumph. As we successfully reimagine what it means to live on a thriving planet, Americans will be at the forefront of the groundbreaking cultural and physical change necessary to bring an end to global mass extinction.</p>

    <p style={{'marginTop' : '20px'}}>The Botanical Research Institutes of America will serve in this effort by bringing our emerging community the tools, knowledge, and inspiration they need to help save life on earth.</p>
    </div>
    <div id="logo-side" style={{'color' : 'white', 'textAlign' : 'center'}}>pic</div>
    </div>
    <div className="missions" style={{'color' : 'white'}}>
{/* small logo */} <h5 style={{'marginLeft' : '20px'}}>MISSION</h5>
{/* text takes 2/3 page with dark forest green background / 1/3 page light green with faint photo */}
        <h3>Bring world class conservation botany to every city and town in America.</h3>
        <p>Join us in creating a new global model for conservation, starting right in your own community. Together, we will create thriving hyperlocal ‘ecosystems of conservation’ dedicated to saving and celebrating life on our planet.</p>

        <p style={{'marginTop' : '20px'}}>We’re calling on students…and students of life. Gardeners with green thumbs, and anyone who’s ever felt guilty for forgetting to water the plant on their windowsill. Influencers and introverts. Do you know the seven types of trees in minecraft? You. We’re calling on you</p>
        <h6><b>Let's rescue the biosphere</b></h6>
        </div>
        <div id="logo-side" style={{'color' : 'green', 'textAlign' : 'center', 'backgroundColor' : 'white', 'height' : '250px'}}>pic</div>
        <div className="values" style={{'color' : 'olive'}}>
        {/* small logo */} <h5 style={{'marginLeft' : '20px'}}>VALUES</h5>
{/* text takes 2/3 page with white background / 1/3 page light grey with faint photo */}
        <h3>We believe that there is no greater legacy to leave our children than earth's biodiversity, intact.</h3>
        <p>We believe that, given the right tools, <b>the young, the elderly, the disenfranchised, the underprivileged</b> are not only capable of saving life on earth—they are among the most capable. This is a job for all humanity.</p>

        <p style={{'marginTop' : '20px'}}>We believe that <b>we must always first seek to uplift each other</b>, because a human who can best help is a human who is whole in spirit.</p>

        <p style={{'marginTop' : '20px'}}>We believe that the audacious goal of saving life on earth must be matched by audacious innovation. <b>Experimentation and creativity are our lifeblood.</b></p>
        </div>
        <div id="logo-side" style={{'height' : '307px', 'textAlign' : 'center', 'color' : 'white'}}>pic</div>
        {/* background photo of scientist looking at plants */}
        {/* the following in small black box on right side of screen */}
        <div className="join">
        {/* <h5>Join the BRIA community</h5>
        <p>Subscribe to start your journey with BRIA. It’s free, and you can unsubscribe at any time.</p>
        <input type="text" placeholder="Email*" /><button>Join BRIA</button> */}      
        </div>
    </> );
}
 
export default MissionPage;