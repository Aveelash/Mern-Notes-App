import React, { useEffect } from "react";
import { LuCheck } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";

const Toast = ({ isShown, message, type, onClose }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onClose();
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [onClose]);

  return (
    <div
      className={`fixed top-20 right-6 transition-all duration-500 ${
        isShown ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`min-w-52 relative bg-white border shadow-2xl rounded-md overflow-hidden`}
      >
        {/* Left color bar */}
        <div
          className={`absolute left-0 top-0 h-full w-[5px] ${
            type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        ></div>

        {/* Toast content */}
        <div className="flex items-center gap-3 py-2 px-4">
          {/* Icon based on type */}
          <div
            className={`w-10 h-10 flex items-center justify-center rounded-full ${
              type === "success" ? "bg-green-100" : "bg-red-100"
            }`}
          >
            {type === "success" ? (
              <LuCheck className="text-xl text-green-500" />
            ) : (
              <MdDeleteOutline className="text-xl text-red-500" />
            )}
          </div>

          {/* Message */}
          <p className="text-sm text-slate-800">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Toast;
