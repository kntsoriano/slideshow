import React from "react";

const Chat = () => {
  const classNames = [
    "w-full",
    "lg:pb-5",
    "lg:pt-5",
    "lg:pr-5",
    "h-screen/2 md:h-screen",
  ]

  return (
    <div className="w-full md:w-1/5" style={{ backgroundColor: "#20201d" }}>
      <iframe
        className={classNames.join(" ")}
        title="Chat room"
        src="https://hack.chat/?bangersonly"
      />
    </div>
  );
};

export default Chat;
