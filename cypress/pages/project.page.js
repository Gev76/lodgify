import assertions from "../fixtures/assertions.json"

class ProjectPage {
    constructor() {
        this.title = 'h1';
        this.projectList = '[aria-label="Projects"]';
        this.toggleButton = '[aria-label="Tabs"]';
        this.settingsButton = '[aria-label="Settings"]';
        this.button = 'button';
        this.addProjectModal = '[aria-labelledby="project-modal-title"]';
        this.projectNameInput = '[id="edit_project_modal_field_name"]';
        this.continueToCheckoutButton = '[data-gtm-id="projects-contextual-upgrade-button"]'
    }

    verifyProjectsPageIsLoaded = () => {
        cy.contains(this.loginTitle, assertions.projectsTitleText).should('be.visible');
        cy.get(this.settingsButton).should('be.visible');
        cy.contains(this.button, assertions.addProjectButton).should('be.visible');
        cy.get(this.projectList).should('be.visible');

    }

    createNewProjectfromUI = (name) => {
        cy.contains(this.button, assertions.addProjectButton).click();
        cy.get(this.addProjectModal).should('be.visible');
        cy.get(this.projectNameInput).should('be.visible');
        cy.get(this.projectNameInput).type(name);
        cy.get(this.addProjectModal).contains(this.button, assertions.addButton).should('not.be.disabled');
        cy.get(this.addProjectModal).contains(this.button, assertions.addButton).click();
    }

    verifyUserCannotAddNewProject = () => {
        cy.contains(this.button, assertions.addProjectButton).should('be.visible');
        cy.contains(this.button, assertions.addProjectButton).click();
        cy.get(this.continueToCheckoutButton).should('be.visible');
    }
  }
  
  export default ProjectPage;