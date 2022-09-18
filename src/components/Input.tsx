import React, { useRef } from "react";
import { useSetRecoilState } from "recoil";
import { inputBandName } from "../App";

const Input = (props: { isNotOnFetchHandler: () => void }) => {
  const setBandName = useSetRecoilState(inputBandName);

  const inputValue = useRef<HTMLInputElement>(null);

  const formSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setBandName(inputValue.current!.value);
    
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
