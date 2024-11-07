import Map from "./components/Map";
import Navbar from "./components/Navbar";




export default function Home() {
  return (
    <div>
      <Navbar />
      <header style={{ textAlign: 'center', padding: '20px' }}>
        <h1>Geospatial Data Management</h1>
        <p>Upload and manage geospatial data with interactive maps.</p>
      </header>
      <main style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
        <Map /> {/* Display the map component */}
      </main>
    </div>
  );
}
