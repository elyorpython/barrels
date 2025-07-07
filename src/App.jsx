// App.jsx
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import ClientManager from './components/ClientManager';
import BarrelsOut from './components/BarrelsOut';
import BarrelsReturns from './components/BarrelsReturns';
import Balance from './components/Balance';
import Warehouse from './components/Waregouse';
import Products from './components/Products';

export default function App() {
  const [page, setPage] = useState('clients');

  const renderPage = () => {
    switch (page) {
      case 'clients': return <ClientManager />;
      case 'out': return <BarrelsOut />;
      case 'return': return <BarrelsReturns />;
      case 'balance': return <Balance />;
      case 'warehouse': return <Warehouse />;
      case 'products': return <Products />
      default: return <div>Страница не найдена</div>;
    }
  };

  return (
    <div className="main-container-grid">
      <Sidebar setPage={setPage} />
      <main className="main-container">
        <div className="container">
          {renderPage()}
        </div>
      </main>
    </div>
  );
}
