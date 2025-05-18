"use client";
import AuthForm from "@/components/AuthForm";
import React from "react";

const login = () => {
  const handleLogin = async (
    e: React.FormEvent,
    userName: string,
    password: string
  ) => {
    e.preventDefault();
    console.log("login");
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        type: "Login",
        payload: { userName, password },
      }),
    });
    const data = await res.json();
    console.log(data);
  };

  const handleRegister = async (
    e: React.FormEvent,
    userName: string,
    password: string,
    name: string
  ) => {
    e.preventDefault();
    console.log("register");
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        type: "Register",
        payload: { name, userName, password },
      }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center h-[100vh] gap-[2vw]">
      <AuthForm isRegister={false} onSubmit={handleLogin} />
      <AuthForm isRegister={true} onSubmit={handleRegister} />
    </div>
  );
};

export default login;
