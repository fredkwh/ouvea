export default function EmailConfirm() {
  return (
    <div className="max-w-md mx-auto px-6 py-10 text-gray-800 text-center">
      <h1 className="text-2xl font-bold text-ocre-dore mb-4">Vérification requise</h1>
      <p className="mb-4">
        Un courriel de vérification vous a été envoyé. Merci de cliquer sur le lien pour activer votre compte.
      </p>
      <p className="text-sm text-gray-600">
        Vérifiez également vos spams si vous ne le trouvez pas dans votre boîte principale.
      </p>
    </div>
  );
}
