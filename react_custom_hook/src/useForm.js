import { useState, useEffect } from 'react';

export default function useForm({ initialValues, validation, onSubmit }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const valuesClone = { ...values };
    if (e.target.name === 'account') {
      valuesClone.account = e.target.value;
    } else if (e.target.name === 'password') {
      valuesClone.password = e.target.value;
    } else {
      valuesClone.rememberMe = e.target.checked;
    }
    setValues(valuesClone);
  };

  const handleSubmit = () => {
    if (Object.keys(errors).length === 0) {
      onSubmit(values);
    }
  };

  useEffect(() => {
    const currentErrors = validation(values);
    setErrors(currentErrors);
  }, [values]);

  return { handleChange, handleSubmit, values, errors };
}
