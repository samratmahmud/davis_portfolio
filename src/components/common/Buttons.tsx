import React from "react";

interface buttonProps {
  name: string;
}

function Buttons(props: buttonProps) {
  const {name} = props;
  return (
    <div className="bg-primary text-gray-900 rounded-full py-[11px] px-5 min-w-[170px] text-center hover:shadow-sm duration-300">
      {name}
    </div>
  );
}

export default Buttons;
