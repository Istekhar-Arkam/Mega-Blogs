// This code creates a draggable button using React.
// It uses state to track the button's position and whether it is being dragged.
import React, { useState, useRef } from "react";
const Button = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [dragging, setDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setDragging(true);
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      setPosition({
        x: e.clientX - offset.current.x,
        y: e.clientY - offset.current.y,
      });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };
  return (
    <>
      <div
        className="relative w-screen h-screen overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <button
          onMouseDown={handleMouseDown}
          className="absolute px-4 py-2 text-white bg-blue-600 rounded shadow-lg cursor-move"
          style={{ left: position.x, top: position.y }}
        >
          Drag Me
        </button>
      </div>
    </>
  );
};

export default Button;

// 🧠 Explanation:
// absolute is used to position the button freely.

// cursor-move gives a visual hint that the element is draggable.

// Mouse events control the movement.

// style={{ left, top }} updates position dynamically.

// Let me know if you want to make it touch-friendly for mobile or restrict it inside a specific container!
