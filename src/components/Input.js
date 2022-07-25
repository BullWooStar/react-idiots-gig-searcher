import { useRef } from "react";

const Input = ({ onSearchGig }) => {
  const inputValue = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    onSearchGig(inputValue.current.value);
    inputValue.current.value = "";
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <input type="text" ref={inputValue} />
      <button type="submit">검색</button>
    </form>
  );
};

export default Input;
