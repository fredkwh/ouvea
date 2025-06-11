
import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      setMessage("✅ Un lien de réinitialisation a été envoyé à votre adresse.");
    } catch (err) {
      console.error("Erreur Firebase :", err.code, err.message);
      switch (err.code) {
        case "auth/user-not-found":
          setError("❌ Aucun compte n’est associé à cette adresse.");
          break;
        case "auth/invalid-email":
          setError("❌ Adresse email invalide.");
          break;
        default:
          setError("❌ Une erreur est survenue. Veuillez réessayer.");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-sable-chaud px-4">
      <h1 className="text-2xl font-bold text-ocre-dore mb-6">Réinitialiser mon mot de passe</h1>
      <form onSubmit={handleReset} className="w-full max-w-md">
        <input
          type="email"
          placeholder="adresse@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 mb-4 border border-ocre-dore rounded text-lg"
        />
        <button
          type="submit"
          className="w-full bg-ocre-dore hover:bg-ocre-dore/90 text-white font-semibold py-2 px-4 rounded"
        >
          Envoyer le lien de réinitialisation
        </button>
        {message && <p className="mt-4 text-green-700 text-center">{message}</p>}
        {error && <p className="mt-4 text-red-600 text-center">{error}</p>}
      </form>
    </div>
  );
}
