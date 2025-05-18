"use client";
import React, { useState } from "react";
import FormInput from "./FormInput";

interface AuthFormProps {
  isRegister: boolean;
  onSubmit: (
    e: React.FormEvent,
    userName: string,
    password: string,
    name: string
  ) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ isRegister, onSubmit }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  return (
    <form onSubmit={(e) => onSubmit(e, userName, password, name)}>
      {isRegister && (
        <FormInput
          label="Name"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
      )}
      <FormInput
        label="UserName"
        name="userName"
        onChange={(e) => setUserName(e.target.value)}
      />
      <FormInput
        label="Password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="border-[0.15vw] mt-[1vh] bg-blue-400 p-1"
        type="submit"
      >
        {isRegister ? "Register" : "Login"}
      </button>
    </form>
  );
};

export default AuthForm;
