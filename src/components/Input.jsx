import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label className="inline=block mb-1 pl-1" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={text}
        className={`w-full px-3 py-2 border border-gray-200 rounded-lg outline-none focus:bg-gray-50 bg-white text-black duration-200 ${className}`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});

export default Input;
