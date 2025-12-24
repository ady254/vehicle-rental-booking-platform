import { ThemeProvider } from './context/ThemeContext';
import { AppProvider, useApp } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BikesListPage from './pages/BikesListPage';
import BikeDetailsPage from './pages/BikeDetailsPage';
import BookingPage from './pages/BookingPage';
import PaymentPage from './pages/PaymentPage';
import ConfirmationPage from './pages/ConfirmationPage';
import ContactPage from './pages/ContactPage';
import FAQsPage from './pages/FAQsPage';
import RentalRulesPage from './pages/RentalRulesPage';

function AppContent() {
  const { currentPage } = useApp();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'bikes':
        return <BikesListPage />;
      case 'bike-details':
        return <BikeDetailsPage />;
      case 'booking':
        return <BookingPage />;
      case 'payment':
        return <PaymentPage />;
      case 'confirmation':
        return <ConfirmationPage />;
      case 'contact':
        return <ContactPage />;
      case 'faqs':
        return <FAQsPage />;
      case 'rental-rules':
        return <RentalRulesPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Navbar />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
