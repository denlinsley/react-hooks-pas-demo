import { useState } from "react";

export default function useForm(callback) {
  const [inputs, setInputs] = useState({});

  const handleSubmit = event => {
    event.preventDefault();
    callback();
  };

  const handleInputChange = event => {
    // TODO: explain this
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
