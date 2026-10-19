import {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";

import taskReducer from "../reducer/taskReducer";
import initialTasks from "../data/db";

const TaskContext = createContext();

const STORAGE_KEY = "smart-daily-task-manager-tasks";

const getInitialTasks = () => {
  try {
    const savedTasks = localStorage.getItem(STORAGE_KEY);

    if (savedTasks !== null) {
      const parsedTasks = JSON.parse(savedTasks);

      if (Array.isArray(parsedTasks)) {
        return parsedTasks;
      }
    }
  } catch (error) {
    console.error("Could not load saved tasks:", error);
  }

  return initialTasks;
};

export const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(
    taskReducer,
    undefined,
    getInitialTasks
  );

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
      console.error("Could not save tasks:", error);
    }
  }, [tasks]);

  const addTask = (task) => {
    dispatch({
      type: "ADD_TASK",
      payload: task,
    });
  };

  const deleteTask = (id) => {
    dispatch({
      type: "DELETE_TASK",
      payload: id,
    });
  };

  const toggleTask = (id) => {
    dispatch({
      type: "TOGGLE_TASK",
      payload: id,
    });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        toggleTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);