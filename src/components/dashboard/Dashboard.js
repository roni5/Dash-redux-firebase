import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
class Dashboard extends Component {
    render() {
               // ProjectList  ={projects}
               const { projects } = this.props;
               return (
                 <div className="dashboard container">
                   <div className="row">
                     <div className="col s12 m6">
                       <ProjectList projects={projects} />
                     </div>
                     <div className="col s12 m5 offset-m1">
                       <Notifications name={'Roni'} />
                     </div>
                   </div>
                 </div>
               );
             }
}
// state. then projectReducer key project.props
const mapStateToProps = ( state ) => {
        return {
        projects: state.project.projects
        //projects: state.firestore.ordered.projects
    }
}
 export default connect(mapStateToProps) (Dashboard)
// export default compose(
//   connect(mapStateToProps),
//   firestoreConnect([{ collection: 'projects' }]),
// )(Dashboard);