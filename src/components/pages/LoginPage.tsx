import React, { useState} from 'react'

export default function LoginPage() {

  //state
  const [prenom, setPrenom] = useState<string>("");

  
  // logic
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Bonjour ${prenom} !`);
    setPrenom("");
  };
  
  const handleChange = (e: { target: { value: React.SetStateAction<string>}}) => { 
    setPrenom(e.target.value);
  }


  // render
  return (
    <div>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez vous </h2>
      <form action='submit' onSubmit={handleSubmit}>
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
    </div>
  );
}
