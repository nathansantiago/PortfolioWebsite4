export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">Nathan Santiago</h1>
      <p className="text-lg mb-8">Welcome to my portfolio website!</p>
      <a
        href="#projects"
        className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        View Projects
      </a>
    </section>
  );
}