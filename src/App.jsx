import React from 'react';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import { projects } from './data/projects';

export default function App() {
  return (
    <>
      <div className="background-glow" />
      <div className="container">
        <Header />
        <main className="grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </main>
        <Footer />
      </div>
    </>
  );
}
