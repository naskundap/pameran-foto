import Sidebar from './components/Sidebar';
import Gallery from './components/Gallery';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col md:flex-row">
      <Sidebar />
      <main className="flex-1">
        <Gallery />
      </main>
    </div>
  );
}