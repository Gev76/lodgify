const apiToken = Cypress.env('apiToken');


class ProjectAPI {
  createProject = (name) => {
    return cy.request({
      method: 'POST',
      url: 'https://api.todoist.com/rest/v2/projects',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ apiToken
      },
      body: {
        name: name
      }
    });
  }

  getAllProjects = () => {
    return cy.request({
      method: 'GET',
      url: 'https://api.todoist.com/rest/v2/projects',
      headers: {
        'Authorization': 'Bearer '+ apiToken
      }
    })
  }

  deleteAllProjects = () => {
    this.getAllProjects()
      .then(allProjects => {
        allProjects.body.forEach(project => {
          this.deleteProjectById(project.id)
        })
      })
  }

  deleteProjectById = (projectId) => {
    cy.request({
      method: 'DELETE',
      url: `https://api.todoist.com/rest/v2/projects/${projectId}`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ apiToken
      },
    }).then((response) => {
      expect(response.status).to.equal(204);
    });
  }

  getAllTasks = () => {
    return cy.request({
      method: 'GET',
      url: 'https://api.todoist.com/rest/v2/tasks',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ apiToken
      }
    })
  }

  createTask = (projectId, taskName, taskDescription, dueTime) => {
    const requestPayload = {
      project_id: projectId,
      content: taskName,
      description: taskDescription,
      due_string: dueTime,
      due_lang: 'en',
    };

    cy.request({
      method: 'POST',
      url: 'https://api.todoist.com/rest/v2/tasks',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ apiToken
      },
      body: requestPayload
    })
  }
}

export default ProjectAPI;