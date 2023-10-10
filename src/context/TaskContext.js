import { createContext, useContext, useReducer } from 'react';

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
 const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

 return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
 );
};

const useTasks = () => {
 const context = useContext(TaskContext);
 if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
 }
 return context;
};

export { TaskProvider, useTasks };

const taskReducer = (tasks, action) => {
    switch (action.type) {
       case 'ADD_TASK':
         return [...tasks, action.payload];
       case 'DELETE_TASK':
         return tasks.filter(task => task.id !== action.payload);
       case 'EDIT_TASK':
         return tasks.map(task =>
           task.id === action.payload.id ? action.payload : task
         );
       default:
         throw new Error('Invalid action type');
    }
   };
