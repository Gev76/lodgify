import ProjectActions from "../support/projectActions";
import assertions from "../fixtures/assertions.json"
import LoginPage from "../pages/login.page";
import DashboardPage from "../pages/dashboad.page";
import ProjectAPI from "../api/projectAPI";
import TaskPage from "../pages/task.page";

const projectActions = new ProjectActions();
const loginPage = new LoginPage();
const dashboadPage = new DashboardPage();
const projectAPI = new ProjectAPI();
const taskPage = new TaskPage();

describe('Should be able to create new task', () => {

    beforeEach(() => {
        projectAPI.deleteAllProjects();
    });
    afterEach(() => {
        projectAPI.deleteAllProjects();
    });

    it ('should be able to create a new task', () => {
        projectActions.createNewProjectViaAPI(assertions.projectName);
        cy.navigateToLoginPage();
        loginPage.verifyPageIsLoaded();
        cy.login();
        dashboadPage.verifyUserIsLoggedIn();
        dashboadPage.verifyCreatedProjectIsInList(assertions.projectName);
        taskPage.createNewTask(assertions.taskName, assertions.taskDescription);
        taskPage.verifyTaskIsSavedInUI();
        projectActions.verifyTaskIsCreatedViaAPI(assertions.taskName, assertions.taskDescription);
    })
})