import assertions from "../fixtures/assertions.json"

class TaskPage {
    constructor() {
        this.addTask = '[data-add-task-navigation-element="true"]';
        this.taskForm = '[data-testid="task_list_editor_wrapper"]';
        this.taskNameInput = '[data-placeholder="Task name"]';
        this.taskDescriptionInput = '[data-placeholder="Description"]';
        this.dueDateButton = '[aria-label="Set due date"]';
        this.todayScheduler = '[data-track="scheduler|date_shortcut_today"]';
        this.priorityButton = '[aria-label="Set priority"]';
        this.priorityList = '[aria-label="Select a priority"]';
        this.priorityNumber2 = '[aria-label="Priority 2"]';
        this.saveTaskButton = '[data-testid="task-editor-submit-button"]';
        this.createdTask = '[data-action-hint="task-root"]';
    }

    createNewTask = (taskName, taskDescription) => {
        cy.get(this.addTask).click();
        cy.get(this.taskForm).should('be.visible');
        cy.get(this.taskNameInput).type(taskName);
        cy.get(this.taskDescriptionInput).type(taskDescription);
        cy.get(this.dueDateButton).click();
        cy.get(this.todayScheduler).should('be.visible');
        cy.get(this.todayScheduler).click();
        cy.get(this.priorityButton).click();
        cy.get(this.priorityList).should('be.visible');
        cy.get(this.priorityNumber2).click();
        cy.get(this.saveTaskButton).should('be.enabled');
        cy.get(this.saveTaskButton).click();
    }

    verifyTaskIsSavedInUI = () => {
        cy.get(this.createdTask).should('contain', assertions.taskName);
        cy.get(this.createdTask).should('contain', assertions.taskDescription);
        cy.get(this.createdTask).should('contain', assertions.today);
    }

    verifyCreatedTaskIsThere = (name, description, time) => {
        cy.get(this.createdTask).should('contain', name);
        cy.get(this.createdTask).should('contain', description);
        cy.get(this.createdTask).should('contain', time);
    }
  }
  
  export default TaskPage;