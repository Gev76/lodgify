import assertions from "../fixtures/assertions.json"

class DashboardPage {
    constructor() {
        this.header = '[id="top_bar_inner"]';
        this.topSidebar = '[data-testid="top-sidebar-nav-items"]';
        this.date = '[data-testid="view_header"]';
        this.projectsList = '[id="projects_list"]';
        this.createdProject = '[data-type="project_list_item"]';
        this.projectHeader = '[data-testid="view_header__h1"]';
        this.addProjectButton = '[aria-label="Add project"]';
        this.projectsHeader = 'a[href="/app/projects"]';
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

    verifyProjectsCount = (num) => {
        cy.get(this.createdProject).should('have.length', num);
    }

    navigateToProjectsSection = () => {
        cy.get(this.projectsHeader).should('be.visible');
        cy.get(this.projectsHeader).click();
    }
  }
  
  export default DashboardPage;