import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

const ProjectAPI = {
    projects: [
      { project: 1, name: 'Project One', imageUrl: "https://media.giphy.com/media/b9aScKLxdv0Y0/giphy.gif", description: 'Here', url:'https://medium.com/@pojotorshemi/react-nested-routes-e6584dd08387' },
      { project: 2, name: 'Project Two', imageUrl: "https://media.giphy.com/media/aLdiZJmmx4OVW/giphy.gif", description: 'Here', url:'https://medium.com/@pojotorshemi/react-nested-routes-e6584dd08387' },
      { project: 3, name: 'Project Three', imageUrl: "https://media.giphy.com/media/HBMCmtsPEUShG/giphy.gif", description: 'Here', url:'https://medium.com/@pojotorshemi/react-nested-routes-e6584dd08387' },
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
<div>
  <ul>
    {ProjectAPI.all().map(p =>
      <li key={p.project}>
        <Link to={`/projects/${p.project}`}>{p.name}</Link>
      </li>,
    )}
  </ul>
</div>;

const Project = props => {
    const pj = ProjectAPI.get(parseInt(props.match.params.project));
    // const pj = ProjectAPI.get(parseInt(props.match.params.project, 10));
    if (!pj) {
      return <div>Project not found :(</div>;
    }
    return (
      <div>
        <h1>{pj.name}</h1>
        <h2>Description: {pj.description}</h2>
        <a href={pj.url}>Link to repo</a>
        <br/>
        <br/>
        <img src={pj.imageUrl} alt=""/>
        <br/>
        <br/>
        <Link to="/projects">Back</Link>
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