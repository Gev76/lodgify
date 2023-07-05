const apiToken = Cypress.env('apiToken');


class ProjectAPI {
  createProject = (name) => {
    return cy.request({
      method: 'POST',
      url: 'https://api.todoist.com/rest/v2/projects',
      headers: {
        'Content-Type': 'application/json',
        'X-Request-Id': Cypress._.random(100000000, 999999999),
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
}

export default ProjectAPI;