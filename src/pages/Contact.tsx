import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-16">
      <div className="max-w-xl mx-auto space-y-6">
        <h1 className="text-4xl font-extrabold mb-4 text-center">Contact</h1>
        <p className="text-center">Feel free to reach out through any of the platforms below.</p>
        <ul className="space-y-2 text-center">
          <li>
            Email: <a href="mailto:goole910805@gmail.com" className="underline hover:text-cyan-400">goole910805@gmail.com</a>
          </li>
          <li>
            GitHub: <a href="https://github.com/and910805" target="_blank" rel="noopener noreferrer" className="underline hover:text-cyan-400">and910805</a>
          </li>
        </ul>
        <Footer />
      </div>
    </div>
  );
}
