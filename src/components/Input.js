import { useRef } from "react";

const Input = (props) => {
  const inputValue = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onAddValue(inputValue.current.value);
    inputValue.current.value = "";
  };
  return (
    <div>
      <h1>이디어츠 공연 검색기</h1>
      <form onSubmit={formSubmitHandler}>
        <input type="text" ref={inputValue} />
        <button type="submit">검색</button>
      </form>
    </div>
  );
};

export default Input;
