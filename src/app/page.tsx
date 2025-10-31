export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl font-bold text-indigo-900 mb-4">Pamela Alfred</h1>
        <p className="text-2xl text-indigo-700 mb-6">Consultante IA & Transformation Numérique</p>
        <p className="text-lg text-gray-700 mb-8">
          Experte en IA générative • No-Code • Automatisation • Canada ↔ Afrique
        </p>
        <a 
          href="mailto:alfred.pam@gmail.com" 
          className="inline-block px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition"
        >
          Me contacter
        </a>
      </div>
    </main>
  );
}
