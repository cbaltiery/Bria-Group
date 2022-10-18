import React from 'react';
import Headers from "./Header";
import Footers from "./Footers";
import '../App.css'
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const ModelPage = (props) => {
    return ( <>
    <Headers/>

    <div className="top">
        <div id="upper-top">
    <h1 style={{'marginBottom' : '3em'}}>Explore the BRIA model.</h1>
        </div>

      <div class="row">
  <div class="col-sm-6">
    <div class="card" style={{'backgroundColor' : 'grey', 'opacity' : '0.5'}}>
      <div class="card-body">
        <h5 class="card-title" style={{'color' : 'white', 'backgroundColor' : 'green', 'width' : '35%'}}>FRAMEWORK</h5>
        <p class="card-text" style={{'color' : 'white'}}> 

        <ul style={{'listStyleType' : 'square', 'marginTop' : '2em', 'marginBottom' : '2em'}}><b>
    <li>BRIA Naturalists</li>
    <li>BRIA Gardens</li>
    <li>BRIA Roundtables</li>
    <li>BRIA Institutes</li></b>
        </ul>

   <h5 style={{'color' : 'white', 'backgroundColor' : 'green', 'width' : '55%'}}>OPERATING SYSTEMS</h5>
        <ul style={{'listStyleType' : 'circle', 'marginTop' : '2em', 'marginBottom' : '2em'}}><b>
    <li>Accreditation</li>
    <li>Governance</li>
    <li>Funding</li></b>
        </ul>

<h5 style={{'color' : 'white', 'backgroundColor' : 'green', 'width' : '60%'}}>OPERATING PRINCIPLES</h5>
        <ul style={{'marginTop' : '2em'}}><b>
    <li>Value Centered</li>
    <li>Hyperlocal</li>
    <li>Systems Driven</li></b>
        </ul></p>
      </div>
    </div>
  </div>
  <div class="col-sm-6 " >
    <div class="card" style={{'backgroundColor' : 'grey', 'opacity' : '0.5'}}>
      <div class="card-body">
        <h5 class="card-title" style={{'color' : 'white', 'backgroundColor' : 'green', 'width' : '83%'}}>SYSTEMS & PRINCIPLES AT WORK</h5>
        <p class="card-text"> 
        <ul style={{'listStyleType' : 'none', 'color' : 'white', 'marginTop' : '2em'}}><b>
    <li>Distributed Curriculum Develpment</li>
    <li>Hyperlocal Conservation Projects</li>
    <li>Creating Youth Leaders</li>
    <li>Research Project Prototyping</li>
    <li>Funding Prototyping</li></b>
        </ul></p>
      </div>
    </div>
  </div>
</div>

      </div>

      <div className="bottom">
        <div id="upper-bottom">
    <h1 style={{'color' : 'white', 'fontSize' : '10em', 'textAlign': 'left'}}><b>bria</b></h1>
        </div>
        <div id="middle-top">
            <h3 style={{'marginBottom' : '2em'}}>The Botanical Research Institutes of America is an accrediting body and parent organization designed to foster the creation of botanical conservation programs across the United States.</h3>
        </div>
        <div class="row">
  <div class="col-sm-6">
    <div class="card" style={{'backgroundColor' : 'rgba(248, 245, 227, 0.973)', 'border' : '0'}}>
      <div class="card-body">
        <p class="card-text">The BRIA model emphasized the creation of thriving local 'ecosystems of conservation' that connect and support: scientists, amateur naturalists, property owners, volunteers, workers, students and philanthropists. The model employs accreditation as an engine for growth and a rudder pointing the BRIA community toward a common goal: to save the biosphere.</p>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card" style={{'backgroundColor' : 'rgba(248, 245, 227, 0.973)', 'border' : '0'}}>
      <div class="card-body">
        <p class="card-text">BRIA's chapter structure supports rapid rollout in new communities, ordering a replicable, streamlined operating model.</p>
        <p>Finally, BRIA supports the ongoing refinement of this operating model through a framework of rapid and creative prototyping, aggressive data capture and analysis, and a culture of supportive knowledge sharing. </p>
      </div>
    </div>
  </div>
</div>

  <div class="row">
  <div class="col-sm-6">
    <div class="card" style={{'backgroundColor' : 'white'}}>
      <div class="card-body">
        <h5 class="card-title" style={{'color' : 'olive'}}>BRIA Naturlaists</h5>
        <hr />
        <p class="card-text" style={{'color' : 'olive'}}> 

        <p>Earth's biosphere, still largely unexplored, is in peril. To complete the awesome work of documenting and preserving earth's incredible biodiversity, we need an army of naturlists in the field. BRIA is dedicated to bringing the emerging tools and resources of best-in-class botany and conservation to anyone willing to join the fight.</p>
<p>Level I and II accreditation requirements for novice naturlists are meaningful (requiring mastery of new conservation technology), yet easy to meet and welcoming to all. Advanced accreditation levels will require that Naturalist progress in:</p>

        <ul style={{'listStyleType' : 'square', 'marginTop' : '2em', 'marginBottom' : '2em'}}>
    <li>BRIA coursework</li>
    <li>Activity in conservation projects and research</li>
    <li>Service to their community</li>
        </ul>
        <h4>Ultimately, the equivalent of a master's degree in botany or ecology will be offered through BRIA Naturalist accreditation.</h4>
        <hr />
<h6>10-Yr Goal: <b>13,000 BRIA Naturalists</b> accredited</h6>
</p>
      </div>
    </div>
  </div>
  <div class="col-sm-6 " >
    <div class="card" style={{'backgroundColor' : 'white'}}>
      <div class="card-body">
      <h5 class="card-title" style={{'color' : 'olive'}}>BRIA Gardens</h5>
        <hr />
        <p class="card-text" style={{'color' : 'olive'}}> 

        <h4 style={{'marginBottom' : '1.8em'}}>BRIA offers the first accreditation in the United States for non-professional botanical gardens.</h4>

        <p>A BRIA Botancial Research Garden is any public or private landscape dedicated to the mission and ideals of the Botanical Research Institutes of America. At every step of the way, BRIA Botanical Gardens practice good science with the best tools we can bring to you and your community</p>
<p>The accreditation ladder for BRIA Gardens will offer increasing levels of participation in conservation science and will integrate with accreditation requirements for BRIA Naturalists and BRIA Rountables. To reach the highest levels of accreditation, gardens will be required to participate in existing professional accreditation programs such as those found at Botanic Gardens Conservation International (BGCI) and arbnet, effectively serving as an accelerated feeder program for these mature conservation organizations.</p>

        <hr />
<h6>10-Yr Goal: <b>10,000 BRIA Gardens</b> accredited</h6>
</p>
      </div>
    </div>
  </div>
</div>

<div class="row" style={{'marginTop': '5em'}}>
  <div class="col-sm-6">
    <div class="card" style={{'backgroundColor' : 'white'}}>
      <div class="card-body">
        <h5 class="card-title" style={{'color' : 'olive'}}>BRIA Rountables</h5>
        <hr />
        <p class="card-text" style={{'color' : 'olive'}}> 

        <h5 style={{'marginBottom' : '1.8em'}}>What if we told you you could turn your entire city into a botanical research garden? </h5>

       <p>A BRIA Roundtable is a group of BRIA gardens working together to make conservation botany an important part of the everyday life of their community.</p>
<p>Rountables offer the foundational structure for BRIA's local operating model. Coupled with accreditation, they are BRIA's engine for growth. A level I Roundtable requires a membership of 9 gardens. Moving up their own accreditation ladder, Roundtable members acquire new skills in fundraising, community engagement, and organization.</p>
<p>The ultimate achievement for a roundtable? A full-fledged BRIA Botanical Research Institute right in their own community.</p>

        <hr />
<h6>10-Yr Goal: BRIA Roundtables established in <b>170 cities and towns</b></h6>
<h6>10-Yr Goal: <b>$850M</b> raised for plant conservation</h6>

</p>
      </div>
    </div>
  </div>
  <div class="col-sm-6 " >
    <div class="card" style={{'backgroundColor' : 'white'}}>
      <div class="card-body">
      <h5 class="card-title" style={{'color' : 'olive'}}>BRIA Institutes</h5>
        <hr />
        <p class="card-text" style={{'color' : 'olive'}}> 

        <p>A BRIA Botanical Research Institute is the ultimate goal for any community in  the United States. Because on a planet in crisis, world class botany should be happening everywhere.</p>
<p>BRIA Institutes are devoted to the goals and strategies for plant conservation set by national and global science organizations. They share the following attributes:</p>
<ul>
    <li>A distributed campus with research happening in multiple locations, making botany truly accessible to all.</li>
    <li style={{'marginTop': '1em'}}>Inclusion of the arts as an avenue for deep connection to the community.</li>
    <li style={{'marginTop': '1em'}}>A culture of collaboration and a shared interest in the success of their sister Institutes nationwide.</li>
</ul>
    <p>BRIA Botanical Research Institutes are where conservation and community come together.</p>
    <h5>Accreditation starts in 2024.</h5>

        <hr />
    <h6>10-Yr Goal: <b>30 BRIA Institutes</b> established</h6>
    <h6>10-Yr Goal: <b>650 scientists</b> employed</h6>
</p>
      </div>
    </div>
  </div>
</div>
    </div>
    <div className="top">

  <div class="col-sm-6">
    <div class="card" style={{'backgroundColor' : 'rgba(248, 245, 227, 0.973)', 'opacity' : '0.5', 'width': '700px'}}>
      <div class="card-body">
        <h9 class="card-title" style={{'color' : 'black'}}>OPERATING SYSTEMS</h9>
        <p class="card-text" style={{'color' : 'black'}}> 

        <h2 style={{'marginTop' : '1em', 'textAlign' : 'center', 'marginBottom' : '1em'}}>Accreditation</h2>

        <p>The Botanical Research Institutes of America is, first and foremost, an accrediting body. Accreditation requirements for Naturalists, Gardens and Roundtables provide the levers necessary to:</p>
<ul>
    <li>create a healthy 'ecosystem of conservation' in any community, by addressing community building and fiscal health in a addition to good science;</li>
    <li style={{'marginTop': '1em'}}>build a fondation fo hard science skillsand competencies at the individual and group level; and</li>
    <li style={{'marginTop': '1em'}}>create meaningful connections between scientists, property owners, philanthropists and volunteers.</li>
</ul>
<h4 style={{'marginTop' : '2em', 'marginBottom' : '2em', 'textAlign' : 'center'}}>Accreditation knits the BRIA framework together.</h4>
<p>For example, to climb their accreditation ladders,</p>
<ul>
    <li>a Naturalist must be assigned to an accredited Garden, or become a subject matter specialist for a Roundtable</li>
    <li style={{'marginTop': '1em'}}>a Garden must join a Rountable, engage an accredited Naturalist, or join a new research project;</li>
    <li style={{'marginTop': '1em'}}>a Rountable will need member Gardens and member Naturalists that have reached higher levels of accreditation.</li>
</ul>
<p>Our goal is to help all BRIA members acquire the tools and skills they need to organize and implement botanical conservation work in their communities. Working closely with BRIA, a Rountable should be able to establish an accredited BRIA Botanical Research Institute in their community within 9 years.</p>
</p>
      </div>
    </div>
  </div>
  <div class="col-sm-6 " >
  <div class="card" style={{'backgroundColor' : 'rgba(248, 245, 227, 0.973)', 'opacity' : '0.5', 'width': '700px', 'marginTop' : '5em'}}>
      <div class="card-body">
        <h9 class="card-title" style={{'color' : 'black'}}>OPERATING SYSTEMS</h9>
        <p class="card-text" style={{'color' : 'black'}}> 

        <h2 style={{'marginTop' : '1em', 'textAlign' : 'center', 'marginBottom' : '1em'}}>Governance</h2>

        <p>Today, participatory governance is made increasingly viable and effective via technologies that allow for:</p>
<ul>
    <li>efficient and equitable community decision-making,</li>
    <li style={{'marginTop': '1em'}}>transparent finances and resource managment,</li>
    <li style={{'marginTop': '1em'}}>wealth building and investment managed by local stakeholder communities, and</li>
    <li style={{'marginTop': '1em'}}>an open, well-documented history of the develpment of governence structures and policies.</li>
</ul>
<p>The Botanical Research Institutes of America is dedicated to the principles of evolutionary distributed governance. While this will pose complex challenges in the development of legal certanty and risk managment, we look forward to co-creating a better shared future for all BRIA stakeholders...and for our planet.</p>
</p>
      </div>
    </div>
  </div>

  <div class="col-sm-6 " >
  <div class="card" style={{'backgroundColor' : 'rgba(248, 245, 227, 0.973)', 'opacity' : '0.5', 'width': '700px', 'marginTop' : '5em'}}>
      <div class="card-body">
        <h9 class="card-title" style={{'color' : 'black'}}>OPERATING SYSTEMS</h9>
        <p class="card-text" style={{'color' : 'black'}}> 

        <h2 style={{'marginTop' : '1em', 'textAlign' : 'center', 'marginBottom' : '1em'}}>Funding</h2>

        <p>A "patreon" system for amateur naturalists. Enabling anyone to invest in a team of plant DNA collectors. Helping donors fund work that happens in their own back yards...</p>
<h4  style={{'marginTop' : '2em', 'marginBottom' : '2em', 'textAlign' : 'center'}}>At BRIA, we're creating a robust funding ecosystem.</h4>
<p>Diverse, creative and ethical funding mechanisms are key to building conservation-minded communities that last. At BRIA, we believe that human and ecological communities must mutually benefit from the bioeconomy.</p>
<p>For Example, our unexplored soil and plant microbiomes hold treasures for humanity. As large corporations seek the next medical breakthrough or bio-product, the focus is primarily on shareholder benefit. At BRIA, we believe a powerful new investment infrasctructure can instead be built around regenerative economics that are forward thinking and respect life on earth above all else. </p>
<p>At a local level, BRIA can help members find meaningful work right in their own community. A 15-year-old amateur naturalist may use the BRIA app to arrange weekly visits to three different BRIA gardens in his neighborhood to tend their pollinator beds. He schedules his visits with the garden owners, documents parental approval, uploads photos of his finished work and receives payment - all through the BRIA app. </p>
<p>Donors will be able to fund conservation work in their own communities, and will have access to real-time data on the projects that they choose to support. </p>
<h4  style={{'marginTop' : '2em', 'marginBottom' : '2em', 'textAlign' : 'center'}}>Future-focused funding strategies.</h4>
<p>At BRIA, we are preparing for game-changing technology that is currently just over the horizon.</p>
<p>For example, the urgent need for the careful, ethical collection of plant DNA cannot be understated...and it is woefully under-resourced. At the same time, trained field scientists can't find well paid work.</p>
<p>A blockchain-enabled plant DNA database can allow professional or amateur plant hunters to make their specimens available to university or nonprofit research scientists-for free-or to private researchers for a fee or commission on future income. Blockchain-driven smart contracts will make this process almost invisible to the plant collector. Private funders will be able to invest in individual field scientists, or in tranches of DNA from multiple collectors. Scientists will own and control their data, and be able to make a good living, while doing the vital work of documenting life on earth. </p>
<p>This scenario will become a reality in the not-too-distant future, as blockchain database storage and data mining becomes increasingly efficient and affordable. BRIA is preparing for a future where we teach an army of naturalists how to sustainably collect DNA, make it available to those who need it most, and fiercely protect fragile ecosystems and rare and endangered plants. </p>
</p>
      </div>
    </div>
  </div>
</div>
<div className="operating-principles">
    <p><b>OPERATING PRINCIPLES</b></p>
</div>

<div className="bottom">
      <div class="row">
        <div class="col-4">
          <div class="card" style={{'backgroundColor' : 'rgb(3, 73, 3)', 'color' : 'white', 'width' : '19em'}}>
            <h4 style={{'textAlign' : 'center', 'marginTop' : '2em', 'marginBottom' : '2em'}}>Hyperlocal</h4>
<h6 style={{'marginRight' : '1em' , 'marginLeft' : '1em'}}><b>Botany.<i>Everywhere</i></b></h6>
<p style={{'marginRight' : '1em' , 'marginLeft' : '1em'}}>Backyards, campusesm hotel grounds, corporate parks... this is where the future of plant conservation lies.</p>
<p style={{'marginRight' : '1em' , 'marginLeft' : '1em'}}>What is hyperlocal conservation? Real science happening where you live and work. Real relationships between property owners, scientists and students. Donors large and small seeing their dollars at work in their own communities. Young aspiring scientists finding meaningful employment right in their own neighborhoods.</p>
<h4 style={{'marginBottom' : '2em', 'marginRight' : '1em' , 'marginLeft' : '1em'}}>Because when communities are steeped in science...we can change the world.</h4>
</div>
        </div>
        <div class="col-4">
          <div class="card"  style={{'backgroundColor' : 'rgb(4, 4, 107)', 'color' : 'white', 'width' : '19em'}}>
          <h4 style={{'textAlign' : 'center', 'marginTop' : '2em', 'marginBottom' : '2em'}}>Value Centered</h4>
<p style={{'marginRight' : '1em' , 'marginLeft' : '1em'}}>As we operate to save the biosphere, we look to our values first.</p>
<h4 style={{'marginRight' : '1em' , 'marginLeft' : '1em'}}>We are heart-centered. Radically creative. Inclusive & equitable. </h4>
<h6 style={{'color' : 'green', 'marginBottom' : '2em', 'marginRight' : '1em' , 'marginLeft' : '1em', 'marginTop' : '1em'}}>Learn more about our mission, vision and values.</h6></div>
        </div>
        <div class="col-4">
          <div class="card" style={{'backgroundColor' : ' rgb(67, 67, 67', 'color' : 'white', 'width' : '19em'}}>
          <h4 style={{'textAlign' : 'center', 'marginTop' : '2em', 'marginBottom' : '2em'}}>Systems Driven</h4>
<p style={{'marginRight' : '1em' , 'marginLeft' : '1em'}}>Scaling at speed requires systems thinking.</p>
<p style={{'marginBottom' : '14em', 'marginRight' : '1em' , 'marginLeft' : '1em'}}>Innovation that can be replicated. Automation that breaks down barriers to particpation. Data collection focused on outcomes--for the biosphere, and for the people who are saving it. We're developing a future-proof ecosystem where the work of conservation can thrive.</p></div>
        </div>
      </div>


</div>


<div className="bottom" style={{'backgroundColor' : 'rgb(196, 194, 194)'}}>

  <div class="row">
  <div class="col-sm-6">
    <div class="card" style={{'backgroundColor' : 'rgba(248, 245, 227, 0.973)'}}>
      <div class="card-body">
        <h7 class="card-title" style={{'color' : 'olive', 'marginTop': '2em'}}>OPERATING PRINCIPLES</h7>
        <p class="card-text" style={{'color' : 'olive'}}> 
        <h3 style={{'marginBottom': '2em'}}>Streamlined & Automated</h3>
<p>Simple. Seamless. Friction-free. We're offering the power of hyper-streamlined nonprofit managment systems to any community that is ready to go.</p>
<ul>
    <li>Shovel-ready botanical conservation projects that will actually make a difference</li>
    <li style={{'marginTop': '1em'}}>Turnkey fundraising and donor management</li>
    <li style={{'marginTop': '1em'}}>Streamlined governance powered by technology...including recorded meetings, pre-generated administrative documents, automated reporting, centralized records, and online signature capture</li>
    <li style={{'marginTop': '1em'}}>Hassle-free bookkeeping that strategically manages risk using transparent, real-time exceptions auditing</li>
</ul>
</p>
      </div>
    </div>
  </div>
  <div class="col-sm-6 " >
    <div class="card" style={{'backgroundColor' : 'rgb(4, 4, 107)', 'marginTop' : '15em'}}>
      <div class="card-body">
      <h7 class="card-title" style={{'color' : 'white', 'marginTop': '2em'}}>OPERATING PRINCIPLES</h7>
        <p class="card-text" style={{'color' : 'white'}}> 
        <h3 style={{'marginBottom': '2em'}}>Distributed & Inclusive</h3>
<p>Disributed systems that welcome participation by all are a key to growth, equity and inclusivity. Continuously improving those systems through transparent, participatory design makes them even stronger.</p>
<ul>
    <li>A crowd-developed science curriculum that constantly evolves due to real-time users.</li>
    <li style={{'marginTop': '1em'}}>Governance and investment decisions sourced by BRIA members nationwide using decentralized web3 technologies.</li>
    <li style={{'marginTop': '1em'}}>National botanical research projects that can be joined -- and improved -- by any property owner or amateur naturalist.</li>
</ul>
</p>
      </div>
    </div>
  </div>
</div>

<div class="row" style={{'marginTop': '5em'}}>
  <div class="col-sm-6">
    <div class="card" style={{'backgroundColor' : 'rgba(248, 245, 227, 0.973)'}}>
      <div class="card-body">
        <h7 class="card-title" style={{'color' : 'olive', 'marginTop': '2em'}}>OPERATING PRINCIPLES</h7>
        <p class="card-text" style={{'color' : 'olive'}}> 

        <h3 style={{'marginBottom': '2em'}}>Data Driven</h3>
<p>Aggressive data capture with real-time analysis to match is the fuel that will drive the success of BRIA's ever-evolving systems. Success in commnity building. Success in fundraising. Success in conservation research. It all depends on timely access to good data. What can good data offer?
    <ul>
        <li style={{'marginTop': '1em'}}>Engagement insights that let you know if your local BRIA members are feeling plugged-in to your organization.</li>
        <li style={{'marginTop': '1em'}}>A smart learning gateway that automatically offers a student that terms they are most likely to have forgotten since they lost logged into their Plant Physiology course. </li>
        <li style={{'marginTop': '1em'}}>The particular fundraising postcard proven most likely to succeed in your community.</li>
    </ul>
</p>

</p>
      </div>
    </div>
  </div>
  <div class="col-sm-6 " >
    <div class="card" style={{'backgroundColor' : 'rgb(4, 4, 107)', 'marginTop' : '25em'}}>
      <div class="card-body">
      <h7 class="card-title" style={{'color' : 'white', 'marginTop': '2em'}}>OPERATING PRINCIPLES</h7>
        <p class="card-text" style={{'color' : 'white'}}> 
        <h3 style={{'marginBottom': '2em'}}>Rapidly Evolving</h3>
<p>Innovate. Test. Iterate. A/B testing isn't just for emails.</p>
<p>Scalable solutions are found when parellel prototyping and knowledge sharing is the norm in every facet of operations.</p>
</p>
      </div>
    </div>
  </div>
</div>
    </div>
        
    <Footers/>
    </> );
}
 
export default ModelPage;