import { useState } from "react";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
  });

  const handleChange = (e) => {
    const changedField = e.target.name;
    const newValue = e.target.value;

    setFormData((currentData) => {
      return {
        ...currentData,
        [changedField]: newValue,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstname"> First Name: </label>
      <input
        type="text"
        placeholder="firstname"
        value={formData.firstName}
        onChange={handleChange}
        name="firstName"
        id="firstname"
      />

      <label htmlFor="lastname"> Last Name: </label>
      <input
        type="text"
        placeholder="lastname"
        value={formData.lastName}
        onChange={handleChange}
        name="lastName"
        id="lastname"
      />

      <label htmlFor="password"> Password: </label>
      <input
        type="password"
        placeholder="password"
        value={formData.password}
        onChange={handleChange}
        name="password"
        id="password"
      />

      <button type="submit">Submit</button>
    </form>
  );
}
