import React from "react";

interface titleProps {
  title: string;
  section: string;
}

function Title(props: titleProps) {
  const {title, section} = props;
  return (
    <div className="mb-10">
      <h2 className="text-lg font-medium text-primary text-center relative z-10 mb-2.5">
        {title}
      </h2>
      <div className="bg-slate-700 w-44 h-0.5 m-auto relative z-10">
        <span className="bg-primary w-[75px] h-0.5 absolute translate-x-2/3" />
      </div>
      <p className="text-8xl font-bold text-slate-800 text-center -mt-4">
        {section}
      </p>
    </div>
  );
}

export default Title;
