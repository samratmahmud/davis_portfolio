import React from "react";

interface inputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

function TextField(props: inputProps) {
  const {type, ...rest} = props;
  return (
    <div>
      <input
        className={`bg-slate-500 py-3 px-5 focus:outline-none border border-gray-400 w-full rounded-lg focus:border-primary duration-100 placeholder:text-slate-700 font-medium text-gray-700`}
        {...rest}
      />
    </div>
  );
}

export default TextField;
