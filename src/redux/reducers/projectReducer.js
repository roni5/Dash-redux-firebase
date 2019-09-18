const initState = {
    projects: [
        {id: '1', title: 'cloud Project', content: 'jwt vs fireStore'},
        {id: '1', title: 'Aws Project', content: 's3 vs lambda'},
        {id: '1', title: 'Azure Project', content: '.net vs fireStore'},
    ]
};
// Recieve project action from CreteProject
const projectReducer = (state = initState, action) => {
    switch ( action.type ) {
        case 'CREATE_PROJECT':
            console.log( 'created project', action.project );
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log( 'create project error', action.err );
            return state;
        default:
            return state;
    }

};

export default projectReducer;
