export default function Contact() {
  return (
    <div className="max-w-lg mx-auto px-6 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-amber-700 text-center">Nous contacter</h1>
      <p className="mb-4 text-center">
        Une question, une suggestion, ou une envie de smoothie bowl ? Écris-nous !
      </p>

      <div className="space-y-4 text-center">
        <p>📧 <a href="mailto:contact@bowlandthegang.ca" className="text-blue-600 hover:underline">contact@bowlandthegang.ca</a></p>
        <p>📍 Basé à Montréal</p>
        <p>📱 Instagram : <a href="https://instagram.com/bowlandthegang" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">@bowlandthegang</a></p>
      </div>

      <p className="mt-6 text-center text-sm text-gray-500">
        Nous répondons en général dans la journée.
      </p>
    </div>
  );
}
