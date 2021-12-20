// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

contract TaskContract {

    uint public taskCounter = 0;

    event TaskCreated (
        uint id,
        string description,
        bool completed,
        uint createdAt
    );

    event toggleTask(
        uint id,
        bool completed
    );

    struct Task {
        uint id;
        string description;
        bool completed;
        uint createdAt;
    }

    mapping (uint256 => Task) public tasks;

    //este codigo se ejecuta al inicio del contrato
    constructor () {
        createTask("poner patatas a cocer");
    }

    //funciones para crear y modificar tareas
    function createTask(string memory _description) public {
        tasks[taskCounter] = Task(taskCounter,_description, false, block.timestamp);
        taskCounter ++;
        emit TaskCreated(taskCounter, _description, false, block.timestamp);
    }

    function toggleCompleted(uint _id) public {
        Task memory _task = tasks[_id];
        _task.completed = !_task.completed;
        tasks[_id] = _task;
        emit toggleTask(_id, _task.completed);
    }
}