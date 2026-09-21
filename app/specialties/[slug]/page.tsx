import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';

export default async function SpecialtyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div className="w-full bg-[#f7f5f0] text-[#2c2a29] font-sans antialiased">
      <Navbar />
      <main className="w-full max-w-7xl mx-auto px-8 py-20 md:px-16">
        <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight capitalize">
          {slug.replace(/-/g, ' ')}
        </h1>
        <p className="mt-6 text-lg text-[#5e5a57] font-light max-w-2xl leading-relaxed">
          Learn more about our approach to {slug.replace(/-/g, ' ')}.
        </p>
      </main>
      <Footer />
    </div>
  );
}
