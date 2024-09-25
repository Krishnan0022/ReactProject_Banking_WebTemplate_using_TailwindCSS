
import './App.css';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-900 text-white">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Banking App</h1>
          <nav className="space-x-4">
            <a href="#dashboard" className="hover:text-blue-300">Dashboard</a>
            <a href="#services" className="hover:text-blue-300">Services</a>
            <a href="#contact" className="hover:text-blue-300">Contact</a>
            <a href="#login" className="hover:text-blue-300">Login</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white p-8 rounded-lg mb-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to Your Trusted Bank</h2>
          <p className="text-xl mb-4">Secure banking solutions at your fingertips.</p>
          <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold">Get Started</button>
        </section>

        {/* Dashboard Section */}
        <section id="dashboard" className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Balance Card */}
          <div className="bg-white shadow-lg rounded-lg p-4 text-center">
            <h3 className="text-xl font-semibold mb-2">Account Balance</h3>
            <p className="text-2xl font-bold">$5,200.00</p>
          </div>
          {/* Recent Transactions */}
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Recent Transactions</h3>
            <ul>
              <li className="flex justify-between border-b py-2">
                <span>Payment to ABC</span>
                <span>-$200.00</span>
              </li>
              <li className="flex justify-between border-b py-2">
                <span>Deposit from XYZ</span>
                <span>+$500.00</span>
              </li>
            </ul>
          </div>
          {/* Quick Actions */}
          <div className="bg-white shadow-lg rounded-lg p-4 text-center">
            <h3 className="text-xl font-semibold mb-2">Quick Actions</h3>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg m-2">Transfer Money</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg m-2">Pay Bills</button>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="my-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-4">
              <h3 className="text-xl font-bold mb-2">Loans</h3>
              <p>Get the best loan deals with flexible payment plans.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4">
              <h3 className="text-xl font-bold mb-2">Credit Cards</h3>
              <p>Explore various credit card options with amazing perks.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4">
              <h3 className="text-xl font-bold mb-2">Savings</h3>
              <p>Maximize your savings with our high-interest accounts.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Banking App. All rights reserved.</p>
          <p>
            <a href="#privacy" className="hover:text-blue-300">Privacy Policy</a> | 
            <a href="#terms" className="hover:text-blue-300"> Terms of Service</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
