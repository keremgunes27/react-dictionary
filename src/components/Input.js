import { useState } from "react";

function Input({ handleInput }) {
  const [value, setValue] = useState("");

  return (
    <>
      <h1 className="text-center mb-4 text-3xl font-bold text-blue-600">
        Dictionary
      </h1>
      <input
        className="mb-4 focus:outline-none border-none appearance-none w-full text-m p-3 px-5 rounded-lg bg-gray-100"
        type="text"
        value={value}
        placeholder="Let's Search anything words"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            handleInput(value);
          }
        }}
      />
    </>
  );
}

export default Input;
