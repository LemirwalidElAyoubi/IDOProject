import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "../css/DashboardPage.css"; // Import your CSS file for styling if needed
import TaskCard from "./TaskCard";
import { useDrop } from "react-dnd";
import { faCog } from "@fortawesome/free-solid-svg-icons";

const DoneList = () => {
  const [tasks, setTasks] = useState([]);

  const [{ isOver }, drop] = useDrop({
    accept: "TASK_CARD",
    drop: (item, monitor) => {
      // Retrieve the id of the dropped task card
      const id = item.id;

      // Add the task to the DoneList
      setTasks((prevTasks) => [...prevTasks, id]);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div className="dashboard-container" ref={drop}>
      <div className={`dashboard-section ${isOver ? "drop-target" : ""}`}>
        <div className="icon-container">
          <FontAwesomeIcon icon={faCog} className="icon" />
          <h3>Done_List</h3>
        </div>
        <div className="task-cards" ref={drop}>
          <div className="drop-area">
            {" "}
            {/* Apply drop target to a larger area */}
            <h4>Drop Here</h4>
          </div>
          {/* Render your TaskCards here */}
          {tasks.map((taskId) => (
            <TaskCard key={taskId} taskId={taskId} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoneList;

// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
// import "../css/DashboardPage.css"; // Import your CSS file for styling if needed
// import TaskCard from "./TaskCard";
// import { useDrop } from "react-dnd";

// const DoneList = () => {
//   const [{ isOver }, drop] = useDrop({
//     accept: "TASK_CARD",
//     drop: (item, monitor) => {
//       // Logic to handle dropping the task card into the DoneList
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
//           <FontAwesomeIcon icon={faCheckCircle} className="icon" />
//           <h3>Done List</h3>
//         </div>
//         <div className="task-cards">
//           <TaskCard />
//           {/* Render your TaskCards here */}
//           {/* You can loop over your task cards and render them dynamically */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DoneList;

// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faClipboardList,
//   faCog,
//   faCheckCircle,
// } from "@fortawesome/free-solid-svg-icons";
// import "../css/DashboardPage.css"; // Import your CSS file for styling if needed
// import TaskCard from "./TaskCard";
// import { DndProvider, useDrag, useDrop } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";

// const DoneList = () => {
//   return (
//     <div className="dashboard-container">
//       <div className="dashboard-section">
//         <div className="icon-container">
//           <FontAwesomeIcon icon={faCheckCircle} className="icon" />
//           <h3>Done List</h3>
//         </div>
//         <div className="task-cards">
//           <TaskCard />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DoneList;
