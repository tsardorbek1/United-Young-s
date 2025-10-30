
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Impact from './components/Impact';
import Team from './components/Team';
import JoinUs from './components/JoinUs';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white text-slate-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Impact />
        <Team />
        <JoinUs />
      </main>
      <Footer />
    </div>
  );
};

export default App;
