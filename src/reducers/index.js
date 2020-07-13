import userReducer from './user';
import projectsReducer from './projects';
import projectReducer from './project';

const reducers = ({ user, projects, project }, action={ type: '' }) => ({
    user: userReducer(user, action),
    projects: projectsReducer(projects, action),
    project: projectReducer(project, action)
});

export default reducers;