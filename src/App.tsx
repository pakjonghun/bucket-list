import CanvasPage from './CanvasPage';
import './App.css';
import { useRef } from 'react';

function App() {
  const parentRef = useRef<null | HTMLDivElement>(null);

  return (
    <section>
      <header>헤더</header>
      <main>
        <nav>네비게이션</nav>
        <div ref={parentRef} className="parent">
          <CanvasPage parentRef={parentRef} />
        </div>
        <div className="inspector">인스펙터</div>
      </main>
    </section>
  );
}

export default App;
