import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function LoginForm() {
  
  //state
  const [prenom, setPrenom] = useState <string>("");
  const navigate = useNavigate();
 

  // logic
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // alert(`Bonjour ${prenom} !`);
    setPrenom("");
    navigate("/orderPage", { state: { prenom } });
    
  };

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPrenom(e.target.value);
  };

  // render
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez vous </h2>
      <div>
        <input
          type="text"
          value={prenom}
          onChange={handleChange}
          placeholder="Entrez votre prénom"
          required
        />
        <button type="submit">Accedez à votre espace </button>
      </div>
    </form>
  );
}
