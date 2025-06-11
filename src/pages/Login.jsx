import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    const auth = getAuth();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      if (!user.emailVerified) {
        setError("Veuillez vérifier votre adresse e-mail avant de vous connecter.");
        return;
      }
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } catch (err) {
      setError("Identifiants incorrects ou compte inexistant.");
    }
  };

  return (
    <div className="max-w-md mx-auto px-6 py-10 text-gray-800">
      <h1 className="text-2xl font-bold mb-6 text-center text-ocre-dore">Connexion</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border border-ocre-dore rounded"
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-2 border border-ocre-dore rounded"
        />
        <button
          type="submit"
          className="w-full bg-ocre-dore text-white py-2 rounded hover:bg-ocre-dore/90 transition"
        >
          Se connecter
        </button>
      </form>
      {error && <p className="mt-4 text-red-600 text-center">{error}</p>}
      <p className="mt-6 text-center text-sm">
        <Link to="/mot-de-passe-oublie" className="text-ocre-dore hover:underline">
          Mot de passe oublié ?
        </Link>
      </p>
      <p className="mt-2 text-center text-sm">
        Pas encore de compte ?{" "}
        <Link to="/register" className="text-ocre-dore hover:underline">
          Créer un compte
        </Link>
      </p>
    </div>
  );
}
