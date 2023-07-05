import assertions from "../fixtures/assertions.json"

class DashboardPage {
    constructor() {
        this.header = '[id="top_bar_inner"]';
        this.topSidebar = '[data-testid="top-sidebar-nav-items"]';
        this.date = '[data-testid="view_header"]';
        this.projectsList = '[id="left-menu-projects-panel"]';
        this.createdProject = '[data-type="project_list_item"]';
        this.projectHeader = '[data-testid="view_header__h1"]';
        this.addTask = '[data-add-task-navigation-element="true"]';
        this.taskForm = '[data-testid="task_list_editor_wrapper"]';
        this.taskNameInput = '[data-placeholder="Task name"]';
        this.taskDescriptionInput = '[data-placeholder="Description"]';
    }

    verifyUserIsLoggedIn = () => {
        cy.get(this.date).should('be.visible');
        cy.get(this.date).should('contain', assertions.today);
        cy.get(this.header).should('be.visible');
        cy.get(this.projectsList).should('be.visible');
    }

    verifyCreatedProjectIsInList = (name) => {
        cy.get(this.createdProject).should('be.visible');
        cy.get(this.createdProject).should('contain', name);
        cy.get(this.createdProject).click();
        cy.get(this.projectHeader).should('be.visible');
        cy.get(this.projectHeader).should('contain', name);
    }

  }
  
  export default DashboardPage;