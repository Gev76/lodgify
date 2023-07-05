import ProjectAPI from "../api/projectAPI";

const projectAPI = new ProjectAPI();

class ProjectActions {
    createNewProject = (name) => {
        projectAPI.getAllProjects()
        .then(allProjects => {
            expect(allProjects.status).to.equal(200);
            let currentProjectCount = allProjects.body.length;
            projectAPI.createProject(name)
                .then(newProject => {
                    expect(newProject.status).to.equal(200);
                })
            projectAPI.getAllProjects()
                .then(allProjects => {
                    expect(allProjects.status).to.equal(200);
                    expect(allProjects.body.length).to.equal(currentProjectCount + 1);
                })
        });
    }
  }
  
  export default ProjectActions;