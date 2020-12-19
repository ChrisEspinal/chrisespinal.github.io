import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import "../Projects.css";



const ProjectAPI = {
    projects: [
      { project: 1, name: 'Connect4', imageUrl: "https://media.giphy.com/media/pSGbcMvcnav5jIEDMg/giphy.gif", description: 'This is a GUI based game of Connect 4 written in Java using OOP. The game can be played by two players who will take turns dropping their markers into columns. The names of each player will be requested by the GUI before the first game. Each game will continue until someone wins or the board becomes full. The user has the option of starting a new game at the end of every match. A Score Board is included in the GUI and all results are written/updated on an output file named Connect4-Results.txt. The player with the most wins will be displayed as “Champion”.', url:'https://github.com/ChrisEspinal/Connect4' },
      { project: 2, name: 'Monster Game', imageUrl: "https://media.giphy.com/media/nJdsVIieh1I04sMwXz/giphy.gif", description: 'This is a text-based adventure game written in Java. The game creates a player object using information from a file (given by the user and can be updated at any time); such player will go through a dungeon consisting of three rooms, each containing a monster, and will be able to challenge the monsters one-by-one. Once the player reaches the final room, they will discover a hidden treasure if they are successful in defeating this last monster. Throughout the game, messages will be displayed on the screen to tell the user what happens and options will be provided on how to interact with each encounter.', url:'https://github.com/ChrisEspinal/MonsterGame' },
      { project: 3, name: 'Farm', imageUrl: "https://media.giphy.com/media/WocSRTaOT0djAFvCCl/giphy.gif", description: 'This collection of classes written in Java illustrate the use of Object-oriented programming through simple implementations of interfaces, inheritance, etc.', url:'https://github.com/ChrisEspinal/Farm' },
    ],
    all: function() {
      return this.projects;
    },
    get: function(id) {
      const isProject = p => p.project === id;
      return this.projects.find(isProject);
    },
  };

const AllProjects = () =>
<div className= "Projects">
  <div className= "Pj-header">
  <h1>View A Project</h1>
  </div>
  <div className = "Project-Nav">
    {/* <ul> */}
      {ProjectAPI.all().map(p =>
        <div key={p.project} className = {p.project}>
          <div className="pjLinks">
           {/* <img src = "https://media.giphy.com/media/TvADQSY3sSVK78CvcB/giphy.gif" />  */}
          <Link className="plink" to={`/projects/${p.project}`}>{p.name}</Link>
          </div>
        </div>,
      )}
    {/* </ul> */}
  </div>
    <div className="images">
      <div className="img1"><img src = "https://media.giphy.com/media/TvADQSY3sSVK78CvcB/giphy.gif" /></div>
      <div className="img2"><img src = "https://media.giphy.com/media/wzAZbJgd6D3Ev5LD62/giphy.gif" /></div>
      <div className="img3"><img src = "https://media.giphy.com/media/TKwogTJzvNBNsJhkd9/giphy.gif" /></div>
    </div>
</div>

const Project = props => {
    const pj = ProjectAPI.get(parseInt(props.match.params.project));
    // const pj = ProjectAPI.get(parseInt(props.match.params.project, 10));
    if (!pj) {
      return <div>Project not found :(</div>;
    }
    return (
      <div className="ProjectPage">
        <div className="PSubPHeader">{pj.name}</div>
        <div className="PContainer">
        <br/>
        <br/>
        <img src={pj.imageUrl} alt=""/>
        <div className="Description">{pj.description}</div>
        <div className="RepoLinkContainer">
        <a href={pj.url} className = "RepoLink">Go To Repo</a>
        </div>
        <br/>
        <br/>
        {/* <img src={pj.imageUrl} alt=""/> */}
        <br/>
        <br/>
        <div className="BackLinkContainer">
        <Link className="BackLink" to="/projects">Back</Link>
        </div>
        </div>
      </div>
    );
  };

const Projects = () =>
  <Switch>
    <Route exact path="/projects" component={AllProjects} />
    <Route path="/projects/:project" component={Project} />
  </Switch>;

export default Projects;

// import React from "react";
// import { Link, Route, useParams, useRouteMatch } from "react-router-dom";


// const Project = () => {
//   const { name } = useParams();

//   return (
//     <div>
//       <h3>{name}</h3>
//     </div>
//   );
// }

// const Projects = () => {
//   const { url, path } = useRouteMatch();

//   return (
//     <div>
//       <ul>
//         <li>
//           <Link to={`${url}/projectOne`}>projectOne</Link>
//         </li>
//         <li>
//           <Link to={`${url}/boots`}>Boots</Link>
//         </li>
//         <li>
//           <Link to={`${url}/footwear`}>Footwear</Link>
//         </li>
//       </ul>
//       <Route path={`${path}/:name`}>
//         <Project />
//       </Route>
//     </div>
//   );
// };

// export default Projects;







// class Projects extends React.Component{

//     render(){
//         return(
//             <div className = "Projects">
//                 <h1>This is my 'Projects' component test</h1>
//                 {/* <a href="https://github.com/ChrisEspinal"><img src="chris.png" className="githubIcon" /></a> */}
                
//             </div>
//         );
//     }

// }

// export default Projects;