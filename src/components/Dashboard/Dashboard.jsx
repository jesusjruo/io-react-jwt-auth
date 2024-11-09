import { AuthedUserContext } from '../../App';
import { useContext } from 'react';

const Dashboard = () => {
  const user = useContext(AuthedUserContext);

  return (
    <main className="dashboard-main">
      <header className="dashboard-header">
        <h1 className="dashboard-title">Welcome, {user.username}!</h1>
      </header>
      <section className="dashboard-content">
        <p className="dashboard-intro">
          Here’s your personalized dashboard, where you can seamlessly manage and track all your projects in one place. Dive in to keep tabs on your tasks, progress, and achievements!
        </p>
      </section>
      <footer className="dashboard-footer">
        <p className="footer-text">
          Crafted with dedication by Jesus & Alex.
        </p>
      </footer>
    </main>
  );
};

export default Dashboard;

