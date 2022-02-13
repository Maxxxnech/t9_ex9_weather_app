import React from "react";

export default function Form({ weatherMethod = Function.prototype }) {
  const submitHandler = (e) => {
    e.preventDefault();
    weatherMethod(e.target.elements.city.value)
  };
  return (
    <form onSubmit={submitHandler}>
      <input type="text" name="city" placeholder="Город" />
      <button>Получить погоду</button>
    </form>
  );
}
