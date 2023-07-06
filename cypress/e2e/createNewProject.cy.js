import ProjectActions from "../support/projectActions";
import assertions from "../fixtures/assertions.json"
import LoginPage from "../pages/login.page";
import DashboardPage from "../pages/dashboad.page";
import ProjectAPI from "../api/projectAPI";
import ProjectPage from "../pages/project.page";

const projectActions = new ProjectActions();
const loginPage = new LoginPage();
const dashboadPage = new DashboardPage();
const projectAPI = new ProjectAPI();
const projectPage = new ProjectPage();

describe('Should be able to create new project and task', () => {

    beforeEach(() => {
        projectAPI.deleteAllProjects();
    });
    afterEach(() => {
        projectAPI.deleteAllProjects();
    });

    it('should be able to create a new project', () => {
        projectActions.createNewProjectViaAPI(assertions.projectNameForUITest);
        cy.navigateToLoginPage();
        loginPage.verifyPageIsLoaded();
        cy.login();
        dashboadPage.verifyUserIsLoggedIn();
        dashboadPage.verifyProjectsCount(1);
        dashboadPage.verifyCreatedProjectIsInList(assertions.projectNameForUITest);
    })

    it('should not be able to create more then 5 projects in UI without Pro plan', () => {
        projectActions.createManyProjectsViaAPI(4);
        cy.navigateToLoginPage();
        loginPage.verifyPageIsLoaded();
        cy.login();
        dashboadPage.verifyUserIsLoggedIn();
        dashboadPage.verifyProjectsCount(4);
        dashboadPage.navigateToProjectsSection();
        projectPage.verifyProjectsPageIsLoaded();
        projectPage.createNewProjectfromUI(assertions.lastProject);
        dashboadPage.navigateToProjectsSection();
        projectPage.verifyUserCannotAddNewProject();
    })

})