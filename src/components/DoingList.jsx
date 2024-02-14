import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import "../css/DashboardPage.css";
import TaskCard from "./TaskCard";
import { useDrop } from "react-dnd";

const DoingList = () => {
  const [tasks, setTasks] = useState([]);

  const handleDrop = (droppedItem) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: droppedItem.id,
        title: droppedItem.title,
        category: droppedItem.category,
        dueDate: droppedItem.dueDate,
        estimate: droppedItem.estimate,
        importance: droppedItem.importance,
      },
    ]);
  };

  const [{ isOver }, drop] = useDrop({
    accept: "TASK_CARD",
    drop: (item, monitor) => {
      handleDrop(item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div className="dashboard-container">
      <div className={`dashboard-section ${isOver ? "drop-target" : ""}`}>
        <div className="icon-container">
          {/* <FontAwesomeIcon icon={faCog} className="icon" /> */}
          <h3>In_Progress</h3>
        </div>
        <div className="task-cards" ref={drop}>
          <div className="drop-area">
            <h4>Drop Here</h4>
          </div>
          {tasks.map((task, index) => (
            <TaskCard
              key={index}
              id={task.id}
              title={task.title}
              category={task.category}
              dueDate={task.dueDate}
              estimate={task.estimate}
              importance={task.importance}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoingList;

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCog } from "@fortawesome/free-solid-svg-icons";
// import "../css/DashboardPage.css";
// import TaskCard from "./TaskCard";
// import { useDrop } from "react-dnd";

// const DoingList = () => {
//   const [tasks, setTasks] = useState([]);

//   const [{ isOver }, drop] = useDrop({
//     accept: "TASK_CARD",
//     drop: (item, monitor) => {
//       const { id, title, category, dueDate, estimate, importance } = item;
//       setTasks((prevTasks) => [
//         ...prevTasks,
//         { id: Date.now(), title, category, dueDate, estimate, importance }, // Ensure each task has a unique id
//       ]);
//     },
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver(),
//     }),
//   });

//   return (
//     <div className="dashboard-container">
//       <div className={`dashboard-section ${isOver ? "drop-target" : ""}`}>
//         <div className="icon-container">
//           <FontAwesomeIcon icon={faCog} className="icon" />
//           <h3>In_Progress</h3>
//         </div>
//         <div className="task-cards" ref={drop}>
//           <div className="drop-area">
//             <h4>Drop Here</h4>
//           </div>
//           {tasks.map((task, index) => (
//             <TaskCard key={index} {...task} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DoingList;

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCog } from "@fortawesome/free-solid-svg-icons";
// import "../css/DashboardPage.css"; // Import your CSS file for styling if needed
// import TaskCard from "./TaskCard";
// import { useDrop } from "react-dnd";

// const DoingList = () => {
//   const [tasks, setTasks] = useState([]);

//   const [{ isOver }, drop] = useDrop({
//     accept: "TASK_CARD",
//     drop: (item, monitor) => {
//       // Retrieve the data of the dropped task card
//       const { id, title, category, dueDate, estimate, importance } = item;
//       // Add the task to the DoingList
//       setTasks((prevTasks) => [
//         ...prevTasks,
//         { id, title, category, dueDate, estimate, importance },
//       ]);
//     },
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver(),
//     }),
//   });

//   return (
//     <div className="dashboard-container">
//       <div className={`dashboard-section ${isOver ? "drop-target" : ""}`}>
//         <div className="icon-container">
//           <FontAwesomeIcon icon={faCog} className="icon" />
//           <h3>In_Progress</h3>
//         </div>
//         <div className="task-cards" ref={drop}>
//           <div className="drop-area">
//             {" "}
//             {/* Apply drop target to a larger area */}
//             <h4>Drop Here</h4>
//           </div>
//           {/* Render your TaskCards here */}
//           {tasks.map((task) => (
//             <TaskCard key={task.id} {...task} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DoingList;

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCog } from "@fortawesome/free-solid-svg-icons";
// import "../css/DashboardPage.css"; // Import your CSS file for styling if needed
// import TaskCard from "./TaskCard";
// import { useDrop } from "react-dnd";

// const DoingList = () => {
//   const [tasks, setTasks] = useState([]);

//   const [{ isOver }, drop] = useDrop({
//     accept: "TASK_CARD",
//     drop: (item, monitor) => {
//       // Retrieve the id of the dropped task card
//       const id = item.id;
//       // Add the task to the DoingList
//       setTasks((prevTasks) => [...prevTasks, id]);
//     },
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver(),
//     }),
//   });

//   return (
//     <div className="dashboard-container">
//       <div className={`dashboard-section ${isOver ? "drop-target" : ""}`}>
//         <div className="icon-container">
//           <FontAwesomeIcon icon={faCog} className="icon" />
//           <h3>In_Progress</h3>
//         </div>
//         <div className="task-cards" ref={drop}>
//           <div className="drop-area">
//             {" "}
//             {/* Apply drop target to a larger area */}
//             <h4>Drop Here</h4>
//           </div>
//           {/* Render your TaskCards here */}
//           {tasks.map((taskId) => (
//             <TaskCard key={taskId} taskId={taskId} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DoingList;

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCog } from "@fortawesome/free-solid-svg-icons";
// import "../css/DashboardPage.css"; // Import your CSS file for styling if needed
// import TaskCard from "./TaskCard";
// import { useDrop } from "react-dnd";

// const DoingList = () => {
//   const [tasks, setTasks] = useState([]);

//   const [{ isOver }, drop] = useDrop({
//     accept: "TASK_CARD",
//     drop: (item, monitor) => {
//       // Retrieve the id of the dropped task card
//       const id = item.id;
//       console.log("ID OF DROPPED ITEM ", id);
//       // Add the task to the DoingList
//       setTasks((prevTasks) => [...prevTasks, id]);
//       console.log("ID OF DROPPED ITEM ", id);
//     },
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver(),
//     }),
//   });

//   return (
//     <div className="dashboard-container" ref={drop}>
//       <div className={`dashboard-section ${isOver ? "drop-target" : ""}`}>
//         <div className="icon-container">
//           <FontAwesomeIcon icon={faCog} className="icon" />
//           <h3>In Progress</h3>
//         </div>
//         <div className="task-cards">
//           {/* <TaskCard /> */}
//           {/* Render TaskCard components */}
//           {tasks.map((taskId) => (
//             <TaskCard key={taskId} taskId={taskId} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DoingList;

// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCog } from "@fortawesome/free-solid-svg-icons";
// import "../css/DashboardPage.css"; // Import your CSS file for styling if needed
// import TaskCard from "./TaskCard";
// import { useDrop } from "react-dnd";

// const DoingList = () => {
//   const [{ isOver }, drop] = useDrop({
//     accept: "TASK_CARD",
//     drop: (item, monitor) => {
//       // Logic to handle dropping the task card into the DoingList
//       // You need to update your state here to reflect the change
//     },
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver(),
//     }),
//   });

//   return (
//     <div className="dashboard-container" ref={drop}>
//       <div className={`dashboard-section ${isOver ? "drop-target" : ""}`}>
//         <div className="icon-container">
//           <FontAwesomeIcon icon={faCog} className="icon" />
//           <h3>In Progress</h3>
//         </div>
//         <div className="task-cards">
//           {/* Render your TaskCards here */}
//           {/* You can loop over your task cards and render them dynamically */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DoingList;

// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCog, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
// import "../css/DashboardPage.css"; // Import your CSS file for styling if needed
// import TaskCard from "./TaskCard";
// import { DndProvider, useDrag, useDrop } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";

// const DoingList = () => {
//   return (
//     <div className="dashboard-container">
//       <div className="dashboard-section">
//         <div className="icon-container">
//           <FontAwesomeIcon icon={faCog} className="icon" />
//           <h3>In Progress</h3>
//         </div>
//         <div className="task-cards">
//           <TaskCard />
//           <TaskCard />
//           <TaskCard />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DoingList;

// // TodoList.js
// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faClipboardList,
//   faCog,
//   faCheckCircle,
// } from "@fortawesome/free-solid-svg-icons";
// import "../DashboardPage.css"; // Import your CSS file for styling if needed

// const DoingList = () => {
//   return (
//     <div className="dashboard-container">
//       <div className="dashboard-section">
//         <FontAwesomeIcon icon={faCog} className="icon" />
//         <h3>In Progress</h3>
//         <ul>
//           <li>Task 1</li>
//           <li>Task 2</li>
//           <li>Task 3</li>
//           {/* Add more tasks as needed */}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default DoingList;
