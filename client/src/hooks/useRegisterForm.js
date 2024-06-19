import { useState } from "react";
import axios from "axios";

export default function useRegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(ev) {
    ev.preventDefault();
    try {
      await axios.post("/register", {
        name,
        email,
        password,
      });
      alert("Registration successful. Now you can log in.");
    } catch (e) {
      alert("Registration failed. Please try again later");
    }
  }

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    registerUser,
  };
}
