import ProjectAPI from "../api/projectAPI";

const projectAPI = new ProjectAPI();

class ProjectActions {
    constructor() {
        this.loginTitle = 'h1';
    }

    createNewProjectViaAPI = (name) => {
        projectAPI.getAllProjects()
        .then(allProjects => {
            expect(allProjects.status).to.equal(200);
            const currentProjectCount = allProjects.body.length;
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

    verifyTaskIsCreatedViaAPI = (taskName, taskDescription) => {
        projectAPI.getAllProjects()
            .then(allProjects => {
                expect(allProjects.status).to.equal(200);
                const createdProjectId = allProjects.body[allProjects.body.length - 1].id;
                cy.log('done')
                projectAPI.getAllTasks()
                    .then(allTasks => {
                        expect(allTasks.status).to.equal(200);
                        const createdTask = allTasks.body.find(obj => obj.project_id == createdProjectId);
                        expect(createdTask.content).to.equal(taskName);
                        expect(createdTask.description).to.equal(taskDescription);
                        expect(createdTask.due.date).to.equal(todayDate());
                    })
            });
    }
  }
  
export default ProjectActions;

function todayDate () {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
}