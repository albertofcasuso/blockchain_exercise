// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

contract TaskContract {

    uint public taskCounter = 0;

    struct Task {
        uint id;
        string description;
        bool completed;
        uint createdAt;
    }

    mapping (uint256 => Task) public tasks;

    constructor () {
        createTask("poner patatas a cocer");
    }

    function createTask(string memory _description) public {
        tasks[taskCounter] = Task(taskCounter,_description, false, block.timestamp);
        taskCounter ++;
    }

    function toggleCompleted(uint _id) public {
        Task memory _task = tasks[_id];
        _task.completed = !_task.completed;
        tasks[_id] = _task;
    }
}