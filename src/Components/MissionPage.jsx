import Footer from "./Footer";
import Header from "./Header";
import './missionPage.css'

const MissionPage = (props) => {
    return ( <>
    <Header/>
    <div className="row">
        <div className="top">
            <h3>We are in the midst of the sixth largest mass extinction on earth.</h3>
            {/* Image of NYC city scape */}
        </div>
    </div>
    
    
    <h4>Earth is on track to lose half its species in the next 80 years...and the vast majority of these species are still unknown to science</h4>
    {/* black background */}
    {/* begin with translucent box with THE PROBLEM, VISION, MISSION, VALUES */}
    <h3>We know what we have to do.</h3>
        {/* image of child standing in mountains */}
    <h1>1</h1><h4>Discover & document life on earth... before it disappears.</h4>
    <h1>2</h1><h4>Preserve up to half the planet for wildlife.</h4>
    <h1>3</h1><h4>Halt climate change and pollution. Now.</h4>
    <h1>4</h1><h4>Protect and reintroduce endangered species.</h4>
    {/* black background */}
    <h3>This work requires a revolution.</h3><h4>We're starting with 10,000 new botanical research gardens.</h4>
    {/* forest green background */}
    {/* nature lady photo scrolls left while you scroll down */}
    
    {/* small logo */} <h5>VISION</h5> 
    {/* text takes 2/3 page with white background / 1/3 page light grey with faint photo */}
    <h3>Help humanity transition to a 'new earth' that is a safe and welcoming home for all species.</h3>
    <p>By the year 2050, the story of the Anthropocene Epoch will have evolved from earth’s greatest tragedy into humanity’s greatest triumph. As we successfully reimagine what it means to live on a thriving planet, Americans will be at the forefront of the groundbreaking cultural and physical change necessary to bring an end to global mass extinction.

    The Botanical Research Institutes of America will serve in this effort by bringing our emerging community the tools, knowledge, and inspiration they need to help save life on earth.</p>

{/* small logo */} <h5>MISSION</h5>
{/* text takes 2/3 page with dark forest green background / 1/3 page light green with faint photo */}
        <h3>Bring world class conservation botany to every city and town in America.</h3>
        <p>Join us in creating a new global model for conservation, starting right in your own community. Together, we will create thriving hyperlocal ‘ecosystems of conservation’ dedicated to saving and celebrating life on our planet.

        We’re calling on students…and students of life. Gardeners with green thumbs, and anyone who’s ever felt guilty for forgetting to water the plant on their windowsill. Influencers and introverts. Do you know the seven types of trees in minecraft? You. We’re calling on you</p>
        <h6>Let's rescue the biosphere</h6>

        {/* small logo */} <h5>VALUES</h5>
{/* text takes 2/3 page with white background / 1/3 page light grey with faint photo */}
        <h3>We believe that there is no greater legacy to leave our children than earth's biodiversity, intact.</h3>
        <p>We believe that, given the right tools, the young, the elderly, the disenfranchised, the underprivileged are not only capable of saving life on earth—they are among the most capable. This is a job for all humanity.

        We believe that we must always first seek to uplift each other, because a human who can best help is a human who is whole in spirit.

        We believe that the audacious goal of saving life on earth must be matched by audacious innovation. Experimentation and creativity are our lifeblood.</p>

        {/* background photo of scientist looking at plants */}
        {/* the following in small black box on right side of screen */}
        <h5>Join the BRIA community</h5>
        <p>Subscribe to start your journey with BRIA. It’s free, and you can unsubscribe at any time.</p>
        <input type="text" placeholder="Email*" /><button>Join BRIA</button>
    <Footer/>
    </> );
}
 
export default MissionPage;