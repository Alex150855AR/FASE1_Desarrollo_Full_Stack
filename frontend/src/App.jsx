import React from 'react';
import Navbar from './components/Navbar.jsx';
import ProjectForm from './components/ProjectForm.jsx';
import ProjectList from './components/ProjectList.jsx';

function App() {
  return (
    <div className="container">
      <Navbar />
      {/* Sistema de Grid Responsivo */}
      <div className="grid">
        <aside>
          <ProjectForm />
        </aside>
        <main>
          <ProjectList />
        </main>
      </div>
    </div>
  );
}

export default App;