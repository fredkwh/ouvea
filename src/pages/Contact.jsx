
export default function Contact() {
  return (
    <div className="max-w-lg mx-auto px-6 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-ocre-dore text-center">Nous contacter</h1>
      <p className="mb-4 text-center">
        Une question, une suggestion, ou l’envie d’amener Ouvéa dans votre studio ? Écris-nous !
      </p>

      <div className="space-y-4 text-center">
        <p>📧 <a href="mailto:contact@ouvea.ca" className="text-ocre-dore hover:underline">contact@ouvea.ca</a></p>
        <p>📍 Basé à Montréal</p>
        <p>📱 Instagram : <a href="https://instagram.com/ouvea.ca" target="_blank" rel="noopener noreferrer" className="text-ocre-dore hover:underline">@ouvea.ca</a></p>
      </div>

      <p className="mt-6 text-center text-sm text-gray-500">
        Nous répondons en général dans la journée.
      </p>
    </div>
  );
}
