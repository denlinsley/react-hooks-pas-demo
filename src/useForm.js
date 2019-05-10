import { useState } from "react";

function useForm(callback) {
  const [inputs, setInputs] = useState({});

  const handleSubmit = event => {
    event.preventDefault();
    callback();
  };

  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  return {
    inputs,
    handleSubmit,
    handleInputChange
  };
}

export default useForm;
