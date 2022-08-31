import React, { useRef } from "react";

const Input: React.FC<{ onSearchGig: (text: string) => void }> = ({
  onSearchGig,
}) => {
  const inputValue = useRef<HTMLInputElement>(null);

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = inputValue.current!.value;
    onSearchGig(enteredText);
    inputValue.current!.value = "";
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <input type="text" ref={inputValue} />
      <button type="submit">검색</button>
    </form>
  );
};

export default Input;
