import React, { useState, useEffect } from "react";
import { useDrag } from "react-dnd";
import { useDrop } from "react-dnd";
import "../css/TaskCard.css";

const TaskCard = ({ id, taskCards, setTaskCards, onDrop }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [estimate, setEstimate] = useState("");
  const [importance, setImportance] = useState("");

  useEffect(() => {
    if (taskCards) {
      const droppedItem = taskCards.find((task) => task.id === id);
      if (droppedItem) {
        setTitle(droppedItem.title);
        setCategory(droppedItem.category);
        setDueDate(droppedItem.dueDate);
        setEstimate(droppedItem.estimate);
        setImportance(droppedItem.importance);
      }
    }
  }, [taskCards, id]);

  const [{ isDragging }, drag] = useDrag({
    type: "TASK_CARD",
    item: { id, title, category, dueDate, estimate, importance },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: "TASK_CARD",
    drop: (droppedItem) => {
      onDrop(droppedItem);
    },
  });

  return (
    <div
      className="task-card"
      ref={(node) => drag(drop(node))}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <div className="task-content">
        <div className="task-column">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="task-column">
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="task-column">
          <label htmlFor="dueDate">Due Date:</label>
          <input
            type="date"
            id="dueDate"
            placeholder="Due Date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <div className="task-column">
          <label htmlFor="estimate">Estimate:</label>
          <input
            type="number"
            id="estimate"
            placeholder="Estimate (hours)"
            value={estimate}
            onChange={(e) => setEstimate(e.target.value)}
          />
        </div>
        <div className="task-column">
          <label htmlFor="importance">Importance:</label>
          <select
            id="importance"
            value={importance}
            onChange={(e) => setImportance(e.target.value)}
          >
            <option value="" className="default-option">
              Select Importance
            </option>
            <option value="low" className="green-option">
              Low
            </option>
            <option value="medium" className="orange-option">
              Medium
            </option>
            <option value="high" className="red-option">
              High
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;

// import React, { useState, useEffect } from "react";
// import { useDrag } from "react-dnd";
// import { useDrop } from "react-dnd";
// import "../css/TaskCard.css";

// const TaskCard = ({ id, taskCards, setTaskCards }) => {
//   const [title, setTitle] = useState("");
//   const [category, setCategory] = useState("");
//   const [dueDate, setDueDate] = useState("");
//   const [estimate, setEstimate] = useState("");
//   const [importance, setImportance] = useState("");

//   // Update state with dropped item's data when it changes
//   useEffect(() => {
//     if (taskCards) {
//       const droppedItem = taskCards.find((task) => task.id === id);
//       if (droppedItem) {
//         setTitle(droppedItem.title);
//         setCategory(droppedItem.category);
//         setDueDate(droppedItem.dueDate);
//         setEstimate(droppedItem.estimate);
//         setImportance(droppedItem.importance);
//       }
//     }
//   }, [taskCards, id]);

//   const [{ isDragging }, drag] = useDrag({
//     type: "TASK_CARD",
//     item: { id, title, category, dueDate, estimate, importance },
//     collect: (monitor) => ({
//       isDragging: !!monitor.isDragging(),
//     }),
//   });

//   const [, drop] = useDrop({
//     accept: "TASK_CARD",
//     drop: (droppedItem) => {
//       // Remove the dropped item from its original position
//       setTaskCards((prevTaskCards) =>
//         prevTaskCards.filter((taskCard) => taskCard.id !== droppedItem.id)
//       );
//       // Add the dropped item to the new position
//       setTaskCards((prevTaskCards) => [...prevTaskCards, droppedItem]);
//     },
//   });

//   return (
//     <div
//       className="task-card"
//       ref={(node) => drag(drop(node))}
//       style={{ opacity: isDragging ? 0.5 : 1 }}
//     >
//       <div className="task-content">
//         <div className="task-column">
//           <label htmlFor="title">Title:</label>
//           <input
//             type="text"
//             id="title"
//             placeholder="Task Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         </div>
//         <div className="task-column">
//           <label htmlFor="category">Category:</label>
//           <input
//             type="text"
//             id="category"
//             placeholder="Category"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//           />
//         </div>
//         <div className="task-column">
//           <label htmlFor="dueDate">Due Date:</label>
//           <input
//             type="date"
//             id="dueDate"
//             placeholder="Due Date"
//             value={dueDate}
//             onChange={(e) => setDueDate(e.target.value)}
//           />
//         </div>
//         <div className="task-column">
//           <label htmlFor="estimate">Estimate:</label>
//           <input
//             type="number"
//             id="estimate"
//             placeholder="Estimate (hours)"
//             value={estimate}
//             onChange={(e) => setEstimate(e.target.value)}
//           />
//         </div>
//         <div className="task-column">
//           <label htmlFor="importance">Importance:</label>
//           <select
//             id="importance"
//             value={importance}
//             onChange={(e) => setImportance(e.target.value)}
//           >
//             <option value="" className="default-option">
//               Select Importance
//             </option>
//             <option value="low" className="green-option">
//               Low
//             </option>
//             <option value="medium" className="orange-option">
//               Medium
//             </option>
//             <option value="high" className="red-option">
//               High
//             </option>
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TaskCard;

// import React, { useState } from "react";
// import { useDrag } from "react-dnd";
// import { useDrop } from "react-dnd";
// import "../css/TaskCard.css";

// const TaskCard = ({ id, taskCards, setTaskCards }) => {
//   const [title, setTitle] = useState("");
//   const [category, setCategory] = useState("");
//   const [dueDate, setDueDate] = useState("");
//   const [estimate, setEstimate] = useState("");
//   const [importance, setImportance] = useState("");

//   const [{ isDragging }, drag] = useDrag({
//     type: "TASK_CARD",
//     item: { id, title, category, dueDate, estimate, importance }, // Include all data in the item
//     collect: (monitor) => ({
//       isDragging: !!monitor.isDragging(),
//     }),
//   });

//   const [, drop] = useDrop({
//     accept: "TASK_CARD",
//     drop: (droppedItem) => {
//       // Handle the drop event
//       console.log("Item dropped:", droppedItem);
//       // Remove the dropped item from its original position
//       setTaskCards((prevTaskCards) =>
//         prevTaskCards.filter((taskCard) => taskCard.id !== droppedItem.id)
//       );
//       // Add the dropped item to the new position
//       setTaskCards((prevTaskCards) => [...prevTaskCards, droppedItem]);
//     },
//   });

//   return (
//     <div
//       className="task-card"
//       ref={(node) => drag(drop(node))} // Combine drag and drop refs
//       style={{ opacity: isDragging ? 0.5 : 1 }}
//     >
//       <div className="task-content">
//         <div className="task-column">
//           <label htmlFor="title">Title:</label>
//           <input
//             type="text"
//             id="title"
//             placeholder="Task Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         </div>
//         <div className="task-column">
//           <label htmlFor="category">Category:</label>
//           <input
//             type="text"
//             id="category"
//             placeholder="Category"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//           />
//         </div>
//         <div className="task-column">
//           <label htmlFor="dueDate">Due Date:</label>
//           <input
//             type="date"
//             id="dueDate"
//             placeholder="Due Date"
//             value={dueDate}
//             onChange={(e) => setDueDate(e.target.value)}
//           />
//         </div>
//         <div className="task-column">
//           <label htmlFor="estimate">Estimate:</label>
//           <input
//             type="number"
//             id="estimate"
//             placeholder="Estimate (hours)"
//             value={estimate}
//             onChange={(e) => setEstimate(e.target.value)}
//           />
//         </div>
//         <div className="task-column">
//           <label htmlFor="importance">Importance:</label>
//           <select
//             id="importance"
//             value={importance}
//             onChange={(e) => setImportance(e.target.value)}
//           >
//             <option value="" className="default-option">
//               Select Importance
//             </option>
//             <option value="low" className="green-option">
//               Low
//             </option>
//             <option value="medium" className="orange-option">
//               Medium
//             </option>
//             <option value="high" className="red-option">
//               High
//             </option>
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TaskCard;

// import React, { useState } from "react";
// import { useDrag } from "react-dnd";
// import { useDrop } from "react-dnd";
// import "../css/TaskCard.css";

// const TaskCard = ({ id, taskCards, setTaskCards }) => {
//   const [title, setTitle] = useState("");
//   const [category, setCategory] = useState("");
//   const [dueDate, setDueDate] = useState("");
//   const [estimate, setEstimate] = useState("");
//   const [importance, setImportance] = useState("");

//   const [{ isDragging }, drag] = useDrag({
//     type: "TASK_CARD",
//     item: { id, title, category, dueDate, estimate, importance }, // Include all data in the item
//     collect: (monitor) => ({
//       isDragging: !!monitor.isDragging(),
//     }),
//   });

//   const [, drop] = useDrop({
//     accept: "TASK_CARD",
//     drop: (droppedItem) => {
//       // Handle the drop event
//       console.log("Item dropped:", droppedItem);
//       // Update the task cards list with the dropped item's data
//       setTaskCards((prevTaskCards) =>
//         prevTaskCards.map((taskCard) =>
//           taskCard.id === droppedItem.id ? droppedItem : taskCard
//         )
//       );
//     },
//   });

//   return (
//     <div
//       className="task-card"
//       ref={(node) => drag(drop(node))} // Combine drag and drop refs
//       style={{ opacity: isDragging ? 0.5 : 1 }}
//     >
//       <div className="task-content">
//         <div className="task-column">
//           <label htmlFor="title">Title:</label>
//           <input
//             type="text"
//             id="title"
//             placeholder="Task Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         </div>
//         <div className="task-column">
//           <label htmlFor="category">Category:</label>
//           <input
//             type="text"
//             id="category"
//             placeholder="Category"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//           />
//         </div>
//         <div className="task-column">
//           <label htmlFor="dueDate">Due Date:</label>
//           <input
//             type="date"
//             id="dueDate"
//             placeholder="Due Date"
//             value={dueDate}
//             onChange={(e) => setDueDate(e.target.value)}
//           />
//         </div>
//         <div className="task-column">
//           <label htmlFor="estimate">Estimate:</label>
//           <input
//             type="number"
//             id="estimate"
//             placeholder="Estimate (hours)"
//             value={estimate}
//             onChange={(e) => setEstimate(e.target.value)}
//           />
//         </div>
//         <div className="task-column">
//           <label htmlFor="importance">Importance:</label>
//           <select
//             id="importance"
//             value={importance}
//             onChange={(e) => setImportance(e.target.value)}
//           >
//             <option value="" className="default-option">
//               Select Importance
//             </option>
//             <option value="low" className="green-option">
//               Low
//             </option>
//             <option value="medium" className="orange-option">
//               Medium
//             </option>
//             <option value="high" className="red-option">
//               High
//             </option>
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TaskCard;

// import React, { useState } from "react";
// import { useDrag } from "react-dnd";
// import { useDrop } from "react-dnd"; // Import useDrop hook for dropping behavior
// import "../css/TaskCard.css";

// const TaskCard = ({ id }) => {
//   const [title, setTitle] = useState("");
//   const [category, setCategory] = useState("");
//   const [dueDate, setDueDate] = useState("");
//   const [estimate, setEstimate] = useState("");
//   const [importance, setImportance] = useState("");

//   const [{ isDragging }, drag] = useDrag({
//     type: "TASK_CARD",
//     item: { id, title, category, dueDate, estimate, importance }, // Include all data in the item
//     collect: (monitor) => ({
//       isDragging: !!monitor.isDragging(),
//     }),
//   });

//   const [, drop] = useDrop({
//     accept: "TASK_CARD",
//     drop: (droppedItem) => {
//       // Handle the drop event
//       console.log("Item dropped:", droppedItem);
//       // Update the state with the dropped item's data
//       setTitle(droppedItem.title);
//       setCategory(droppedItem.category);
//       setDueDate(droppedItem.dueDate);
//       setEstimate(droppedItem.estimate);
//       setImportance(droppedItem.importance);
//     },
//   });

//   return (
//     <div
//       className="task-card"
//       ref={(node) => drag(drop(node))} // Combine drag and drop refs
//       style={{ opacity: isDragging ? 0.5 : 1 }}
//     >
//       <div className="task-content">
//         <div className="task-column">
//           <label htmlFor="title">Title:</label>
//           <input
//             type="text"
//             id="title"
//             placeholder="Task Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         </div>
//         <div className="task-column">
//           <label htmlFor="category">Category:</label>
//           <input
//             type="text"
//             id="category"
//             placeholder="Category"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//           />
//         </div>
//         <div className="task-column">
//           <label htmlFor="dueDate">Due Date:</label>
//           <input
//             type="date"
//             id="dueDate"
//             placeholder="Due Date"
//             value={dueDate}
//             onChange={(e) => setDueDate(e.target.value)}
//           />
//         </div>
//         <div className="task-column">
//           <label htmlFor="estimate">Estimate:</label>
//           <input
//             type="number"
//             id="estimate"
//             placeholder="Estimate (hours)"
//             value={estimate}
//             onChange={(e) => setEstimate(e.target.value)}
//           />
//         </div>
//         <div className="task-column">
//           <label htmlFor="importance">Importance:</label>
//           <select
//             id="importance"
//             value={importance}
//             onChange={(e) => setImportance(e.target.value)}
//           >
//             <option value="" className="default-option">
//               Select Importance
//             </option>
//             <option value="low" className="green-option">
//               Low
//             </option>
//             <option value="medium" className="orange-option">
//               Medium
//             </option>
//             <option value="high" className="red-option">
//               High
//             </option>
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TaskCard;

// import React, { useState } from "react";
// import { useDrag } from "react-dnd";
// import "../css/TaskCard.css";

// const TaskCard = ({ id }) => {
//   const [title, setTitle] = useState(""); // State for title
//   const [category, setCategory] = useState(""); // State for category
//   const [dueDate, setDueDate] = useState(""); // State for due date
//   const [estimate, setEstimate] = useState(""); // State for estimate
//   const [importance, setImportance] = useState(""); // State for importance

//   const [{ isDragging }, drag] = useDrag({
//     type: "TASK_CARD",
//     item: { id },
//     collect: (monitor) => ({
//       isDragging: !!monitor.isDragging(),
//     }),
//   });

//   return (
//     <div
//       className="task-card"
//       ref={drag}
//       style={{ opacity: isDragging ? 0.5 : 1 }}
//     >
//       <div className="task-content">
//         <div className="task-column">
//           <label htmlFor="title">Title:</label>
//           <input
//             type="text"
//             id="title"
//             placeholder="Task Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         </div>
//         <div className="task-column">
//           <label htmlFor="category">Category:</label>
//           <input
//             type="text"
//             id="category"
//             placeholder="Category"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//           />
//         </div>
//         <div className="task-column">
//           <label htmlFor="dueDate">Due Date:</label>
//           <input
//             type="date"
//             id="dueDate"
//             placeholder="Due Date"
//             value={dueDate}
//             onChange={(e) => setDueDate(e.target.value)}
//           />
//         </div>
//         <div className="task-column">
//           <label htmlFor="estimate">Estimate:</label>
//           <input
//             type="number"
//             id="estimate"
//             placeholder="Estimate (hours)"
//             value={estimate}
//             onChange={(e) => setEstimate(e.target.value)}
//           />
//         </div>
//         <div className="task-column">
//           <label htmlFor="importance">Importance:</label>
//           <select
//             id="importance"
//             value={importance}
//             onChange={(e) => setImportance(e.target.value)}
//           >
//             <option value="" className="default-option">
//               Select Importance
//             </option>
//             <option value="low" className="green-option">
//               Low
//             </option>
//             <option value="medium" className="orange-option">
//               Medium
//             </option>
//             <option value="high" className="red-option">
//               High
//             </option>
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TaskCard;

// import React from "react";
// import { useDrag } from "react-dnd"; // Import useDrag hook
// import "../css/TaskCard.css"; // Import CSS file for styling

// const TaskCard = ({ id }) => {
//   const [{ isDragging }, drag] = useDrag({
//     type: "TASK_CARD", // Specify the type of item being dragged
//     item: { id }, // Pass the id of the task card as the item being dragged
//     collect: (monitor) => ({
//       isDragging: !!monitor.isDragging(),
//     }),
//   });

//   return (
//     <div
//       className="task-card"
//       ref={drag}
//       style={{ opacity: isDragging ? 0.5 : 1 }}
//     >
//       {/* Your task card content */}
//       <div className="task-content">
//         <div className="task-column">
//           <label htmlFor="title">Title:</label>
//           <input type="text" id="title" placeholder="Task Title" />
//         </div>
//         <div className="task-column">
//           <label htmlFor="category">Category:</label>
//           <input type="text" id="category" placeholder="Category" />
//         </div>
//         <div className="task-column">
//           <label htmlFor="dueDate">Due Date:</label>
//           <input type="date" id="dueDate" placeholder="Due Date" />
//         </div>
//         <div className="task-column">
//           <label htmlFor="estimate">Estimate:</label>
//           <input type="number" id="estimate" placeholder="Estimate (hours)" />
//         </div>
//         <div className="task-column">
//           <label htmlFor="importance">Importance:</label>
//           <select id="importance">
//             <option value="" className="default-option">
//               Select Importance
//             </option>
//             <option value="low" className="green-option">
//               Low
//             </option>
//             <option value="medium" className="orange-option">
//               Medium
//             </option>
//             <option value="high" className="red-option">
//               High
//             </option>
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TaskCard;

// import React from "react";
// import "../css/TaskCard.css"; // Import CSS file for styling

// const TaskCard = () => {
//   return (
//     <div className="task-card">
//       {/* <div className="task-header">Task Details</div> */}
//       <div className="task-content">
//         <div className="task-column">
//           <label htmlFor="title">Title:</label>
//           <input type="text" id="title" placeholder="Task Title" />
//         </div>
//         <div className="task-column">
//           <label htmlFor="category">Category:</label>
//           <input type="text" id="category" placeholder="Category" />
//         </div>
//         <div className="task-column">
//           <label htmlFor="dueDate">Due Date:</label>
//           <input type="date" id="dueDate" placeholder="Due Date" />
//         </div>
//         <div className="task-column">
//           <label htmlFor="estimate">Estimate:</label>
//           <input type="number" id="estimate" placeholder="Estimate (hours)" />
//         </div>
//         <div className="task-column">
//           <label htmlFor="importance">Importance:</label>
//           <select id="importance">
//             <option value="" className="default-option">
//               Select Importance
//             </option>
//             <option value="low" className="green-option">
//               Low
//             </option>
//             <option value="medium" className="orange-option">
//               Medium
//             </option>
//             <option value="high" className="red-option">
//               High
//             </option>
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TaskCard;
