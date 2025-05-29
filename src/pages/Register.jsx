import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";

export default function Register({ setUser }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    const auth = getAuth();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await updateProfile(user, { displayName: name });
      await sendEmailVerification(user);

      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      navigate("/confirmation-email");
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setError("Cette adresse est déjà utilisée. Essayez de vous connecter.");
      } else {
        setError("Erreur : " + err.message);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto px-6 py-10 text-gray-800">
      <h1 className="text-2xl font-bold mb-6 text-center">Créer un compte</h1>
      <form onSubmit={handleRegister} className="space-y-4">
        <input
          type="text"
          placeholder="Nom et prénom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="tel"
          placeholder="Téléphone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="email"
          placeholder="Adresse courriel"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
        >
          Créer mon compte
        </button>
      </form>
      {error && <p className="mt-4 text-red-600 text-center">{error}</p>}
    </div>
  );
}
