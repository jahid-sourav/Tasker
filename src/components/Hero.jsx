import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <main className="main-area h-screen overflow-hidden px-2">
      <div className="content">
        <h1 className="title font-bold text-7xl text-white">Tasker!</h1>
        <p className="text">
          Welcome to Tasker, a React web application! Here, you can start by
          creating your daily tasks, as well as editing, updating, and deleting
          them. This makes it easy to keep track of your daily tasks! So, what
          are you waiting for?
        </p>
      </div>
      <div className="bottom-area">
        <Link
          to="/login"
          className="bg-white text-blue-400 font-semibold text-lg px-4 py-2 rounded-md"
        >
          Get Started now
        </Link>
      </div>

      <div className="wave"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
    </main>
  );
};

export default Hero;
