import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Hook } from './components/sections/Hook';
import { Solutions } from './components/sections/Solutions';
import { WhyHelvion } from './components/sections/WhyHelvion';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-white selection:text-black">
      <Header />
      <main>
        <Hero />
        <Hook />
        <Solutions />
        <WhyHelvion />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
