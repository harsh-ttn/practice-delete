import React, { useState , useCallback} from "react";
import Input from "./Input";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
  });
  cosnt[(name, age)] = formData;

  const onChange = useCallback((e) => {
    setFormData(prev => {...prev, [e.target.id] : e.target.value})})

  return (
    <>
      <form>
        <Input type={text} value={name} onChange={onChange}/>
        <Input type={number} value={age} />
        <button onClick={submitForm}></button>
      </form>
    </>
  );
};

export default Form;
