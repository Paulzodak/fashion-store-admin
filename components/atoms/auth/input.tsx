import * as React from "react";

export interface IInputProps {
  placeholder: string;
  setInput: any;
}

export default function Input(props: any) {
  return (
    <input
      onChange={(e) => {
        props.setInput(e.target.value);
      }}
      placeholder={props.placeholder}
      className="bg-inherit h-full w-full outline-0
      "
    />
  );
}
