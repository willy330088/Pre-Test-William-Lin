# React Custom Hook - useForm

- A custom hook that accepts an object as its only parameter with input values, a validation function and a onSubmit function.
- This hook returns following variables and functions in an object:
  - handleChange: update values based on input change
  - handleSubmit: console.table current values if no errors are detected
  - values: current values of every input field
  - errors: current detected errors
