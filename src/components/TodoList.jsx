import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import "../css/DashboardPage.css"; // Import your CSS file for styling if needed
import TaskCard from "./TaskCard";
import { useDrag, useDrop } from "react-dnd";

const TodoList = ({ taskCards, removeTaskCardFromTodoList }) => {
  const [todoTaskCards, setTodoTaskCards] = useState(taskCards || []);

  const addTaskCard = () => {
    const newTaskCard = { id: Date.now(), content: "" };
    setTodoTaskCards([newTaskCard, ...todoTaskCards]);
  };

  const handleTaskContentChange = (id, content) => {
    setTodoTaskCards((prevTaskCards) =>
      prevTaskCards.map((card) =>
        card.id === id ? { ...card, content } : card
      )
    );
  };

  const [, drag] = useDrag({
    type: "TASK_CARD",
    item: { id: "unique" },
  });

  const [, dropToTitle] = useDrop({
    accept: "*", // Accept any type of dropped item
    drop: (item, monitor) => {
      // Get the dropped item's type and content
      const droppedItemType = item.type;
      const droppedItemContent = item.content;

      // Check the type of the dropped item
      if (droppedItemType === "SOME_SPECIFIC_TYPE") {
        // Perform specific actions based on the dropped item type
        // For example, update the state or perform other operations
        console.log("Dropped item content:", droppedItemContent);
      } else {
        // Handle other types of dropped items or perform default actions
        console.log("Unsupported dropped item type:", droppedItemType);
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div>
      <div className="dashboard-section">
        <div className="icon-container" ref={dropToTitle}>
          <FontAwesomeIcon icon={faClipboardList} className="icon" />
          <h3>To Do</h3>
        </div>
        <div className="task-cards" ref={drag}>
          <button className="add-item-button violet" onClick={addTaskCard}>
            {" "}
            + Add Item
          </button>
          {todoTaskCards.map((card) => (
            <div key={card.id}>
              <TaskCard
                key={card.id}
                id={card.id}
                content={card.content}
                onRemove={removeTaskCardFromTodoList}
                onContentChange={handleTaskContentChange}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
// import "../css/DashboardPage.css"; // Import your CSS file for styling if needed
// import TaskCard from "./TaskCard";
// import { useDrag, useDrop } from "react-dnd";

// const TodoList = () => {
//   const [taskCards, setTaskCards] = useState([{ id: Date.now(), content: "" }]);

//   const addTaskCard = () => {
//     const newTaskCard = { id: Date.now(), content: "" };
//     setTaskCards([newTaskCard, ...taskCards]);
//   };

//   const handleTaskContentChange = (id, content) => {
//     setTaskCards((prevTaskCards) =>
//       prevTaskCards.map((card) =>
//         card.id === id ? { ...card, content } : card
//       )
//     );
//   };

//   const [, drag] = useDrag({
//     type: "TASK_CARD",
//     item: { id: "unique" },
//   });

//   const [, dropToTitle] = useDrop({
//     accept: "*", // Accept any type of dropped item
//     drop: (item, monitor) => {
//       // Logic to handle dropping any type of item into the TodoList
//       // You can update state or perform any other actions here
//     },
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver(),
//     }),
//   });

//   return (
//     <div>
//       <div className="dashboard-section">
//         <div className="icon-container" ref={dropToTitle}>
//           <FontAwesomeIcon icon={faClipboardList} className="icon" />
//           <h3>To Do</h3>
//         </div>
//         <div className="task-cards" ref={drag}>
//           <button className="add-item-button violet" onClick={addTaskCard}>
//             {" "}
//             + Add New Item
//           </button>
//           {taskCards.map((card) => (
//             <div key={card.id}>
//               <TaskCard
//                 content={card.content}
//                 onContentChange={(content) =>
//                   handleTaskContentChange(card.id, content)
//                 }
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TodoList;

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
// import "../css/DashboardPage.css"; // Import your CSS file for styling if needed
// import TaskCard from "./TaskCard";
// import { useDrag, useDrop } from "react-dnd";

// const TodoList = () => {
//   const [taskCards, setTaskCards] = useState([{ id: Date.now(), content: "" }]);

//   const addTaskCard = () => {
//     const newTaskCard = { id: Date.now(), content: "" };
//     setTaskCards([newTaskCard, ...taskCards]);
//   };

//   const handleTaskContentChange = (id, content) => {
//     setTaskCards((prevTaskCards) =>
//       prevTaskCards.map((card) =>
//         card.id === id ? { ...card, content } : card
//       )
//     );
//   };

//   const [, drag] = useDrag({
//     type: "TASK_CARD",
//     item: { id: "unique" },
//   });

//   const [, drop] = useDrop({
//     accept: "*", // Accept any type of dropped item
//     drop: (item, monitor) => {
//       // Logic to handle dropping any type of item into the TodoList
//       // You can update state or perform any other actions here
//     },
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver(),
//     }),
//   });

//   return (
//     <div>
//       <div className="dashboard-section" ref={drop}>
//         <div className="icon-container">
//           <FontAwesomeIcon icon={faClipboardList} className="icon" />
//           <h3>To Do</h3>
//         </div>
//         <div className="task-cards" ref={drag}>
//           <button onClick={addTaskCard}>Add New Task</button>
//           {taskCards.map((card) => (
//             <div key={card.id}>
//               <TaskCard
//                 content={card.content}
//                 onContentChange={(content) =>
//                   handleTaskContentChange(card.id, content)
//                 }
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TodoList;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
// import "../css/DashboardPage.css"; // Import your CSS file for styling if needed
// import TaskCard from "./TaskCard";
// import { useDrag, useDrop } from "react-dnd";

// const TodoList = () => {
//   const [taskCards, setTaskCards] = useState([{ id: Date.now(), content: "" }]);

//   const addTaskCard = () => {
//     const newTaskCard = { id: Date.now(), content: "" };
//     setTaskCards([newTaskCard, ...taskCards]);
//   };

//   const handleTaskContentChange = (id, content) => {
//     setTaskCards((prevTaskCards) =>
//       prevTaskCards.map((card) =>
//         card.id === id ? { ...card, content } : card
//       )
//     );
//   };

//   const [, drag] = useDrag({
//     type: "TASK_CARD",
//     item: { id: "unique" },
//   });

//   const [, drop] = useDrop({
//     accept: "*", // Accept any type of dropped item
//     drop: (item, monitor) => {
//       // Logic to handle dropping any type of item into the TodoList
//       // You can update state or perform any other actions here
//     },
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver(),
//     }),
//   });

//   return (
//     <div>
//       <div className="dashboard-section" ref={drop}>
//         <div className="icon-container">
//           <FontAwesomeIcon icon={faClipboardList} className="icon" />
//           <h3>To Do</h3>
//         </div>
//         <div className="task-cards" ref={drag}>
//           <button onClick={addTaskCard}>Add New Task</button>
//           {taskCards.map((card, index) => (
//             <div key={card.id}>
//               <TaskCard
//                 content={card.content}
//                 onContentChange={(content) =>
//                   handleTaskContentChange(card.id, content)
//                 }
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TodoList;

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
// import "../css/DashboardPage.css"; // Import your CSS file for styling if needed
// import TaskCard from "./TaskCard";
// import { useDrag, useDrop } from "react-dnd";

// const TodoList = () => {
//   const [taskCards, setTaskCards] = useState([{ id: Date.now(), content: "" }]);

//   const addTaskCard = () => {
//     const newTaskCard = { id: Date.now(), content: "" };
//     setTaskCards([newTaskCard, ...taskCards]);
//   };

//   const handleTaskContentChange = (id, content) => {
//     setTaskCards((prevTaskCards) =>
//       prevTaskCards.map((card) =>
//         card.id === id ? { ...card, content } : card
//       )
//     );
//   };

//   const [, drag] = useDrag({
//     type: "TASK_CARD",
//     item: { id: "unique" },
//   });

//   const [, drop] = useDrop({
//     accept: "TASK_CARD",
//     drop: (item, monitor) => {
//       // Logic to handle dropping the task card into the TodoList
//       // You can update state or perform any other actions here
//     },
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver(),
//     }),
//   });

//   return (
//     <div>
//       <div className="dashboard-section" ref={drop}>
//         <div className="icon-container">
//           <FontAwesomeIcon icon={faClipboardList} className="icon" />
//           <h3>To Do</h3>
//         </div>
//         <div className="task-cards" ref={drag}>
//           <button onClick={addTaskCard}>Add New Task</button>
//           {taskCards.map((card, index) => (
//             <div key={card.id}>
//               <TaskCard
//                 content={card.content}
//                 onContentChange={(content) =>
//                   handleTaskContentChange(card.id, content)
//                 }
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TodoList;

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
// import "../css/DashboardPage.css"; // Import your CSS file for styling if needed
// import TaskCard from "./TaskCard";
// import { useDrag } from "react-dnd";

// const TodoList = () => {
//   const [taskCards, setTaskCards] = useState([{ id: Date.now(), content: "" }]);

//   const addTaskCard = () => {
//     const newTaskCard = { id: Date.now(), content: "" };
//     setTaskCards([newTaskCard, ...taskCards]);
//   };

//   const handleTaskContentChange = (id, content) => {
//     setTaskCards((prevTaskCards) =>
//       prevTaskCards.map((card) =>
//         card.id === id ? { ...card, content } : card
//       )
//     );
//   };

//   const [, drag] = useDrag({
//     type: "TASK_CARD",
//     item: { id: "unique" },
//   });

//   return (
//     <div>
//       <div className="dashboard-section">
//         <div className="icon-container">
//           <FontAwesomeIcon icon={faClipboardList} className="icon" />
//           <h3>To Do</h3>
//         </div>
//         <div className="task-cards" ref={drag}>
//           <button onClick={addTaskCard}>Add New Task</button>
//           {taskCards.map((card, index) => (
//             <div key={card.id}>
//               <TaskCard
//                 content={card.content}
//                 onContentChange={(content) =>
//                   handleTaskContentChange(card.id, content)
//                 }
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TodoList;

// import React, { useState } from "react";
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

// const TodoList = () => {
//   const [taskCards, setTaskCards] = useState([{ id: Date.now(), content: "" }]);

//   const addTaskCard = () => {
//     const newTaskCard = { id: Date.now(), content: "" };
//     setTaskCards([newTaskCard, ...taskCards]);
//   };

//   const handleTaskContentChange = (id, content) => {
//     setTaskCards((prevTaskCards) =>
//       prevTaskCards.map((card) =>
//         card.id === id ? { ...card, content } : card
//       )
//     );
//   };

//   return (
//     <div>
//       <div className="dashboard-section">
//         <div className="icon-container">
//           <FontAwesomeIcon icon={faClipboardList} className="icon" />
//           <h3>To Do</h3>
//         </div>
//         <div className="task-cards">
//           <button onClick={addTaskCard}>Add New Task</button>
//           {taskCards.map((card, index) => (
//             <div key={card.id}>
//               <TaskCard
//                 content={card.content}
//                 onContentChange={(content) =>
//                   handleTaskContentChange(card.id, content)
//                 }
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TodoList;

// // TodoList.js
// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faClipboardList,
//   faCog,
//   faCheckCircle,
// } from "@fortawesome/free-solid-svg-icons";
// import "../css/DashboardPage.css"; // Import your CSS file for styling if needed
// import TaskCard from "./TaskCard";

// const TodoList = () => {
//   return (
//     <div>
//       <div className="dashboard-section">
//         <div className="icon-container">
//           <FontAwesomeIcon icon={faClipboardList} className="icon" />
//           <h3>To Do</h3>
//         </div>
//         <div className="task-cards">
//           <TaskCard />
//           <TaskCard />
//           <TaskCard />
//           <TaskCard />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TodoList;
