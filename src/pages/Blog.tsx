import Footer from '../components/Footer';

export default function Blog() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-16">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl font-extrabold mb-4 text-center">Blog</h1>
        <p className="text-center">📝 Blog posts will be published here soon. Stay tuned!</p>
        <Footer />
      </div>
    </div>
  );
}
