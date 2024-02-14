// DashboardPage.js
import React, { useState, useEffect } from "react";
import TodoList from "../components/TodoList";
import DoingList from "../components/DoingList";
import DoneList from "../components/DoneList";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "../css/DashboardPage.css";

// import Kanban from "../components/Kanban";

const DashboardPage = () => {
  const [taskCards, setTaskCards] = useState([]);

  const addTaskCard = () => {
    const newTaskCard = { id: Date.now(), content: "" };
    setTaskCards([...taskCards, newTaskCard]);
  };

  const removeTaskCardFromTodoList = (idToRemove) => {
    setTaskCards(taskCards.filter((task) => task.id !== idToRemove));
  };

  return (
    // <DndProvider backend={HTML5Backend}>
    <div>
      <Header onAddItem={addTaskCard} />
      <SubHeader />
      <div className="dashboard-container">
        <div className="column">
          <TodoList
            taskCards={taskCards}
            removeTaskCardFromTodoList={removeTaskCardFromTodoList}
          />
          {/* <Kanban /> */}
        </div>
        <div className="column">
          <DoingList />
        </div>
        <div className="column">
          <DoneList />
        </div>
      </div>
    </div>
    // </DndProvider>
  );
};

export default DashboardPage;

// import React, { useState } from "react";
// import TodoList from "../components/TodoList";
// import DoingList from "../components/DoingList";
// import DoneList from "../components/DoneList";
// import Header from "../components/Header"; // Import the Header component
// import SubHeader from "../components/SubHeader";
// import { DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
// import "../css/DashboardPage.css"; // Import your CSS file for styling if needed
// import TaskCard from "../components/TaskCard";

// const DashboardPage = () => {
//   const [taskCards, setTaskCards] = useState([
//     <TaskCard key={0} />,
//     <TaskCard key={1} />,
//     <TaskCard key={2} />,
//     <TaskCard key={3} />,
//   ]);

//   const addTaskCard = () => {
//     const newTaskCard = <TaskCard key={Date.now()} />;
//     setTaskCards([newTaskCard, ...taskCards]);
//   };

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div>
//         <Header onAddItem={addTaskCard} /> {/* Pass the addTaskCard function */}
//         <SubHeader />
//         <div className="dashboard-container">
//           <div className="column">
//             {/* <FontAwesomeIcon icon={faClipboardList} className="icon" /> */}
//             {/* <h2>TodoList</h2> */}
//             <TodoList taskCards={taskCards} /> {/* Pass taskCards as prop */}
//           </div>
//           <div className="column">
//             {/* <FontAwesomeIcon icon={faCog} className="icon" /> */}
//             {/* <h2>DoingList</h2> */}
//             <DoingList />
//           </div>
//           <div className="column">
//             {/* <FontAwesomeIcon icon={faCheckCircle} className="icon" /> */}
//             {/* <h2>DoneList</h2> */}
//             <DoneList />
//           </div>
//         </div>
//       </div>
//     </DndProvider>
//   );
// };

// export default DashboardPage;

// import React, { useState } from "react";
// import TodoList from "../components/TodoList";
// import DoingList from "../components/DoingList";
// import DoneList from "../components/DoneList";
// import Header from "../components/Header"; // Import the Header component
// import SubHeader from "../components/SubHeader";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faClipboardList,
//   faCog,
//   faCheckCircle,
// } from "@fortawesome/free-solid-svg-icons";
// import "../css/DashboardPage.css"; // Import your CSS file for styling if needed
// import TaskCard from "../components/TaskCard";

// const DashboardPage = () => {
//   const [taskCards, setTaskCards] = useState([
//     <TaskCard key={0} />,
//     <TaskCard key={1} />,
//     <TaskCard key={2} />,
//     <TaskCard key={3} />,
//   ]);

//   const addTaskCard = () => {
//     const newTaskCard = <TaskCard key={Date.now()} />;
//     setTaskCards([newTaskCard, ...taskCards]);
//   };

//   return (
//     <div>
//       <Header onAddItem={addTaskCard} /> {/* Pass the addTaskCard function */}
//       <SubHeader />
//       <div className="dashboard-container">
//         <div className="column">
//           {/* <FontAwesomeIcon icon={faClipboardList} className="icon" /> */}
//           {/* <h2>TodoList</h2> */}
//           <TodoList taskCards={taskCards} /> {/* Pass taskCards as prop */}
//         </div>
//         <div className="column">
//           {/* <FontAwesomeIcon icon={faCog} className="icon" /> */}
//           {/* <h2>DoingList</h2> */}
//           <DoingList />
//         </div>
//         <div className="column">
//           {/* <FontAwesomeIcon icon={faCheckCircle} className="icon" /> */}
//           {/* <h2>DoneList</h2> */}
//           <DoneList />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;

// import React from "react";
// import TodoList from "../components/TodoList";
// import DoingList from "../components/DoingList";
// import DoneList from "../components/DoneList";
// import Header from "../components/Header"; // Import the Header component
// import SubHeader from "../components/SubHeader";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faClipboardList,
//   faCog,
//   faCheckCircle,
// } from "@fortawesome/free-solid-svg-icons";
// import "../css/DashboardPage.css"; // Import your CSS file for styling if needed

// const DashboardPage = () => {
//   return (
//     <div>
//       <Header /> {/* Include the Header component at the top */}
//       <SubHeader />
//       <div className="dashboard-container">
//         <div className="column">
//           {/* <FontAwesomeIcon icon={faClipboardList} className="icon" /> */}
//           {/* <h2>TodoList</h2> */}
//           <TodoList />
//         </div>
//         <div className="column">
//           {/* <FontAwesomeIcon icon={faCog} className="icon" /> */}
//           {/* <h2>DoingList</h2> */}
//           <DoingList />
//         </div>
//         <div className="column">
//           {/* <FontAwesomeIcon icon={faCheckCircle} className="icon" /> */}
//           {/* <h2>DoneList</h2> */}
//           <DoneList />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;

// import React from "react";
// import TodoList from "../components/TodoList";
// import DoingList from "../components/DoingList";
// import DoneList from "../components/DoneList";

// const DashboardPage = () => {
//   return (
//     <div>
//       <h2>Dashboard</h2>
//       <TodoList />
//       <DoingList />
//       <DoneList />
//     </div>
//   );
// };

// export default DashboardPage;
