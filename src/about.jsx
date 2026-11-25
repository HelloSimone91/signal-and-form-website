import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

export function AboutApp() {
  return (
    <div className="min-h-screen border-x-0 md:border-x-8 lg:border-x-[16px] border-black">
      <div className="max-w-[1600px] mx-auto border-x border-black min-h-screen bg-cream flex flex-col">
        <header className="flex flex-col md:flex-row justify-between items-center py-6 px-8 border-b border-black gap-4 md:gap-0">
          <a href="/" className="font-serif text-xl tracking-wide uppercase font-bold hover:opacity-70 transition-opacity">
            Signal + Form
          </a>
          <nav className="w-full md:w-auto flex flex-wrap justify-center gap-x-4 md:gap-x-6 gap-y-2 text-xs md:text-sm uppercase tracking-widest font-semibold">
            <a href="/#projects" className="hover:opacity-70 transition-opacity">Projects</a>
            <a href="/#log" className="hover:opacity-70 transition-opacity">Captain's Log</a>
            <a href="/about.html" className="hover:opacity-70 transition-opacity">About</a>
            <a href="/signup.html" className="hover:opacity-70 transition-opacity">Follow</a>
          </nav>
        </header>

        <main className="flex-grow px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-widest font-semibold mb-6">About</p>
            <h1 className="text-5xl sm:text-6xl font-serif leading-[0.95] tracking-[-0.04em] mb-10">
              What Signal + Form is
            </h1>
            <p className="text-xl md:text-2xl font-serif leading-relaxed mb-8">
              Signal + Form is a studio testing one hypothesis: that values-based living could save us all. Not in a grand way. In the small way that enough people doing what they actually value changes a home, a neighborhood, a city.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              The idea underneath it is simple. Values are what we do. Every choice and action is a vote for the values we hold, whether we are aware of it or not. When we learn to spot our values by watching our actions, we can be more intentional about them.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              So the studio makes media, tools, objects, and experiments for values-led living. Its branches include the Values Dictionary, a free iPhone dictionary for people new to values-based living; Howdy Human, a Sunday Study Hall and gathering; Things Get Weird, a shop of printable workbooks and tools; and The Adventures of Julia and Jeep Jeep, a children's storybook.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Signal + Form is the studio behind them all, not a branch itself.
            </p>
            <p className="text-lg leading-relaxed mb-12">
              The studio is run by Simone DeAngelis in Austin, Texas. More about her lives at <a href="https://simone.lol" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70">simone.lol</a>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/#projects" className="border border-black rounded-full px-6 py-3 font-semibold uppercase text-sm tracking-widest hover:bg-black hover:text-cream transition-colors inline-block text-center">
                Explore Projects
              </a>
              <a href="/signup.html" className="border border-black rounded-full px-6 py-3 font-semibold uppercase text-sm tracking-widest hover:bg-black hover:text-cream transition-colors inline-block text-center">
                Follow Along
              </a>
            </div>
          </div>
        </main>

        <footer className="border-t border-black p-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase tracking-widest font-semibold text-center md:text-left">
          <div>© 2026 Signal + Form Media</div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a href="https://www.valuesinthewild.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Values in the Wild</a>
            <a href="https://www.howdyhuman.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Howdy Human</a>
            <a href="https://thingsgetweird.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Things Get Weird</a>
            <a href="/signup.html" className="hover:underline">Email List</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

const container = document.getElementById('about-root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <AboutApp />
  </React.StrictMode>
);
