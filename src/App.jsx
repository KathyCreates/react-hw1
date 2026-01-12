import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import "./App.css";

export default function App() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    alert(`Ви ввели: ${value}`);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Vite + React: Components Demo</h1>

      <Input
        placeholder="Введіть текст..."
        type="text"
        onChange={handleChange}
      />

      <div style={{ marginTop: 12 }}>
        <Button
          text="Показати введене"
          type="button"
          onClick={handleClick}
        />
      </div>

      <p style={{ marginTop: 12 }}>
        Поточне значення: <b>{value}</b>
      </p>
    </div>
  );
}
