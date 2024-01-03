import React from "react";

interface buttonProps {
  name: string;
}

function Buttons(props: buttonProps) {
  const {name} = props;
  return (
    <div className="bg-primary text-gray-900 rounded-full md:py-[11px] py-2.5 px-5 min-w-[170px] text-center hover:shadow-sm duration-300 hover:-translate-y-0.5">
      {name}
    </div>
  );
}

export default Buttons;
