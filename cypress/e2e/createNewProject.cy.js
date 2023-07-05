import ProjectActions from "../support/projectActions";
import assertions from "../fixtures/assertions.json"
import LoginPage from "../pages/login.page";
import DashboardPage from "../pages/dashboad.page";
import ProjectAPI from "../api/projectAPI";

const projectActions = new ProjectActions();
const loginPage = new LoginPage();
const dashboadPage = new DashboardPage();
const projectAPI = new ProjectAPI();

describe('Should be able to create new project and task', () => {

    before(() => {
        projectAPI.deleteAllProjects();
    });
    after(() => {
        projectAPI.deleteAllProjects();
    });

    it('should be able to create a new project', () => {
        projectActions.createNewProjectViaAPI(assertions.projectNameForUITest);
        cy.navigateToLoginPage();
        loginPage.verifyPageIsLoaded();
        cy.login();
        dashboadPage.verifyUserIsLoggedIn();
        dashboadPage.verifyCreatedProjectIsInList(assertions.projectNameForUITest);
    })


})