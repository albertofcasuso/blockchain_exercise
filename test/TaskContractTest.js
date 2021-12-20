const TaskContract = artifacts.require("TaskContract");

contract("TaskContract", () => {
    let taskContract

    before(async () => {
        taskContract = await TaskContract.deployed();
    })

    it("Deploy was succesful", async() => {
        const address = await taskContract.address
        expect(address).to.not.be.undefined
        expect(address).to.not.be.null
        expect(address).to.be.a('string')
    })

    it("Task list exists", async () => {
        const taskCounter = await taskContract.taskCounter()
        const task = await taskContract.tasks(taskCounter - 1)
        expect(taskCounter.toNumber()).to.be.above(0)
        expect(taskCounter.toNumber()).to.be.a('number')
        expect(task.description).to.be.a('string')
        expect(task.completed).to.be.a('boolean')
        expect(task.completed).to.be.false
    })
})