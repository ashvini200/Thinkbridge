document.addEventListener("DOMContentLoaded", function () {
  // DOM Elements
  const taskInput = document.getElementById("taskInput");
  const taskDescription = document.getElementById("taskDescription");
  const taskDueDate = document.getElementById("taskDueDate");
  const taskPriority = document.getElementById("taskPriority");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");
  const emptyState = document.getElementById("emptyState");
  const totalTasksSpan = document.getElementById("totalTasks");
  const completedTasksSpan = document.getElementById("completedTasks");
  const upcomingTasksSpan = document.getElementById("upcomingTasks");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("searchInput");
  const taskModal = document.getElementById("taskModal");
  const closeModal = document.getElementById("closeModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");
  const editModal = document.getElementById("editModal");
  const closeEditModal = document.getElementById("closeEditModal");
  const cancelEdit = document.getElementById("cancelEdit");
  const editTaskForm = document.getElementById("editTaskForm");
  const editTaskTitle = document.getElementById("editTaskTitle");
  const editTaskDescription = document.getElementById("editTaskDescription");
  const editTaskDueDate = document.getElementById("editTaskDueDate");
  const editTaskPriority = document.getElementById("editTaskPriority");
  const editTaskId = document.getElementById("editTaskId");

  // State
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  let currentFilter = "all";
  let searchQuery = "";
  let currentEditId = null;

  // Set minimum date as today for due date input
  const today = new Date().toISOString().split("T")[0];
  taskDueDate.min = today;
  editTaskDueDate.min = today;

  // Initialize
  renderTasks();
  updateStats();

  // Event Listeners
  addTaskBtn.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") addTask();
  });

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Update active button
      filterBtns.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");

      // Set current filter and re-render
      currentFilter = this.dataset.filter;
      renderTasks();
    });
  });

  searchInput.addEventListener("input", function () {
    searchQuery = this.value.toLowerCase();
    renderTasks();
  });

  closeModal.addEventListener("click", function () {
    taskModal.style.display = "none";
  });

  closeEditModal.addEventListener("click", function () {
    editModal.style.display = "none";
  });

  cancelEdit.addEventListener("click", function () {
    editModal.style.display = "none";
  });

  editTaskForm.addEventListener("submit", function (e) {
    e.preventDefault();
    saveEditedTask();
  });

  window.addEventListener("click", function (e) {
    if (e.target === taskModal) {
      taskModal.style.display = "none";
    }
    if (e.target === editModal) {
      editModal.style.display = "none";
    }
  });

  // Functions
  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      description: taskDescription.value.trim(),
      dueDate: taskDueDate.value,
      priority: taskPriority.value,
      completed: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    tasks.push(newTask);
    saveTasks();
    renderTasks();
    updateStats();

    // Clear inputs
    taskInput.value = "";
    taskDescription.value = "";
    taskDueDate.value = "";
    taskPriority.value = "medium";

    taskInput.focus();

    // Show confirmation animation
    addTaskBtn.innerHTML = '<i class="fas fa-check"></i> Added!';
    setTimeout(() => {
      addTaskBtn.innerHTML = '<i class="fas fa-plus"></i> Add Task';
    }, 1500);
  }

  function deleteTask(id) {
    // Find task to animate removal
    const taskElement = document.querySelector(`[data-id="${id}"]`);
    if (taskElement) {
      taskElement.style.opacity = "0";
      taskElement.style.transform = "translateX(30px)";

      setTimeout(() => {
        tasks = tasks.filter((task) => task.id !== id);
        saveTasks();
        renderTasks();
        updateStats();
      }, 300);
    }
  }

  function toggleTask(id) {
    tasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
          updatedAt: new Date().toISOString(),
        };
      }
      return task;
    });

    saveTasks();
    renderTasks();
    updateStats();
  }

  function showTaskDetails(id) {
    const task = tasks.find((task) => task.id === id);
    if (!task) return;

    modalTitle.textContent = task.text;

    // Format due date
    let dueDateText = "No due date";
    if (task.dueDate) {
      const dueDate = new Date(task.dueDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      dueDateText = dueDate.toLocaleDateString();

      // Check if task is overdue
      if (dueDate < today && !task.completed) {
        dueDateText += " (Overdue)";
      }
    }

    // Format priority text
    const priorityText =
      task.priority.charAt(0).toUpperCase() + task.priority.slice(1);

    // Format created/updated dates
    const createdAt = new Date(task.createdAt).toLocaleString();
    const updatedAt = new Date(task.updatedAt).toLocaleString();

    modalBody.innerHTML = `
      <div class="modal-section">
        <h3><i class="fas fa-align-left"></i> Description</h3>
        <p>${task.description || "No description provided."}</p>
      </div>
      
      <div class="modal-due-date">
        <i class="fas fa-calendar"></i>
        <span>Due Date: ${dueDateText}</span>
      </div>
      
      <div class="modal-priority">
        <i class="fas fa-flag"></i>
        <span>Priority: <span class="priority-badge priority-${
          task.priority
        }">${priorityText}</span></span>
      </div>
      
      <div class="modal-section">
        <h3><i class="fas fa-clock"></i> Created</h3>
        <p>${createdAt}</p>
      </div>
      
      <div class="modal-section">
        <h3><i class="fas fa-sync-alt"></i> Last Updated</h3>
        <p>${updatedAt}</p>
      </div>
    `;

    taskModal.style.display = "block";
  }

  function editTask(id) {
    const task = tasks.find((task) => task.id === id);
    if (!task) return;

    currentEditId = id;
    editTaskTitle.value = task.text;
    editTaskDescription.value = task.description || "";
    editTaskDueDate.value = task.dueDate || "";
    editTaskPriority.value = task.priority;
    editTaskId.value = id;

    editModal.style.display = "block";
  }

  function saveEditedTask() {
    if (!editTaskId.value) return;

    const id = parseInt(editTaskId.value);

    tasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          text: editTaskTitle.value.trim(),
          description: editTaskDescription.value.trim(),
          dueDate: editTaskDueDate.value,
          priority: editTaskPriority.value,
          updatedAt: new Date().toISOString(),
        };
      }
      return task;
    });

    saveTasks();
    renderTasks();
    updateStats();

    editModal.style.display = "none";
    editTaskId.value = "";
  }

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function renderTasks() {
    // Filter tasks based on current filter and search query
    let filteredTasks = tasks.filter((task) => {
      const matchesSearch =
        task.text.toLowerCase().includes(searchQuery) ||
        (task.description &&
          task.description.toLowerCase().includes(searchQuery));

      if (currentFilter === "active") {
        return !task.completed && matchesSearch;
      } else if (currentFilter === "completed") {
        return task.completed && matchesSearch;
      }
      return matchesSearch;
    });

    // Clear task list
    taskList.innerHTML = "";

    // Show empty state if no tasks
    if (filteredTasks.length === 0) {
      emptyState.classList.remove("hidden");
      taskList.appendChild(emptyState);
      return;
    }

    // Hide empty state
    emptyState.classList.add("hidden");

    // Sort tasks: incomplete first, then by due date (soonest first), then by priority
    filteredTasks.sort((a, b) => {
      // Completed tasks go to the bottom
      if (a.completed && !b.completed) return 1;
      if (!a.completed && b.completed) return -1;

      // Sort by due date (tasks without due date go to the bottom)
      if (a.dueDate && b.dueDate) {
        const dateCompare = new Date(a.dueDate) - new Date(b.dueDate);
        if (dateCompare !== 0) return dateCompare;
      } else if (a.dueDate && !b.dueDate) {
        return -1;
      } else if (!a.dueDate && b.dueDate) {
        return 1;
      }

      // Sort by priority (high to low)
      const priorityOrder = { high: 0, medium: 1, low: 2 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });

    // Render tasks
    filteredTasks.forEach((task) => {
      const taskElement = document.createElement("div");
      taskElement.className = `task-item ${task.completed ? "completed" : ""}`;
      taskElement.setAttribute("data-id", task.id);

      // Check if task is overdue
      let isOverdue = false;
      if (task.dueDate && !task.completed) {
        const dueDate = new Date(task.dueDate);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (dueDate < today) {
          isOverdue = true;
          taskElement.classList.add("overdue");
        }
      }

      // Format due date for display
      let dueDateText = "";
      if (task.dueDate) {
        const dueDate = new Date(task.dueDate);
        dueDateText = dueDate.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        });

        if (isOverdue) {
          dueDateText += " (Overdue)";
        }
      }

      // Format created date for display
      const createdDate = new Date(task.createdAt);
      const createdDateText = createdDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });

      // Determine priority badge
      const priorityText =
        task.priority.charAt(0).toUpperCase() + task.priority.slice(1);
      const priorityBadge = `<span class="priority-badge priority-${task.priority}">${priorityText}</span>`;

      taskElement.innerHTML = `
        <input type="checkbox" class="task-checkbox" ${
          task.completed ? "checked" : ""
        }>
        <div class="task-content">
          <div class="task-text">${task.text}</div>
          <div class="task-meta">
            ${
              task.dueDate
                ? `<span class="date-badge ${
                    isOverdue ? "overdue" : ""
                  }"><i class="fas fa-calendar"></i> ${dueDateText}</span>`
                : ""
            }
            <span>${priorityBadge}</span>
            <span><i class="fas fa-plus-circle"></i> ${createdDateText}</span>
          </div>
        </div>
        <div class="task-actions">
          <button class="task-btn task-edit"><i class="fas fa-edit"></i></button>
          <button class="task-btn task-delete"><i class="fas fa-times"></i></button>
        </div>
      `;

      // Add event listeners to the new elements
      const checkbox = taskElement.querySelector(".task-checkbox");
      const deleteBtn = taskElement.querySelector(".task-delete");
      const editBtn = taskElement.querySelector(".task-edit");

      checkbox.addEventListener("change", () => toggleTask(task.id));
      deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        deleteTask(task.id);
      });
      editBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        editTask(task.id);
      });

      taskElement.addEventListener("click", (e) => {
        if (
          e.target !== checkbox &&
          e.target !== deleteBtn &&
          e.target !== editBtn
        ) {
          showTaskDetails(task.id);
        }
      });

      taskList.appendChild(taskElement);
    });
  }

  function updateStats() {
    const total = tasks.length;
    const completed = tasks.filter((task) => task.completed).length;

    // Count upcoming tasks (not completed with due date in the future)
    const upcoming = tasks.filter((task) => {
      if (task.completed || !task.dueDate) return false;

      const dueDate = new Date(task.dueDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      return dueDate >= today;
    }).length;

    totalTasksSpan.textContent = `Total: ${total} task${
      total !== 1 ? "s" : ""
    }`;
    completedTasksSpan.textContent = `Completed: ${completed} task${
      completed !== 1 ? "s" : ""
    }`;
    upcomingTasksSpan.textContent = `Upcoming: ${upcoming} task${
      upcoming !== 1 ? "s" : ""
    }`;
  }
});
