import './App.css';

function App() {
  return (
    <div className="website">

      {/* Navigation */}
      <header className="navbar">
        <h2 className="logo">Spice Garden<span>.</span></h2>

        <nav>
          <a href="#home">Home</a>
          <a href="#menu">Our Menu</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="order-btn" href="#menu">
          Order Now
        </a>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="subtitle">WELCOME TO SPICE GARDEN</p>

          <h1>
            Delicious Food,
            <br />
            Beautiful Moments.
          </h1>

          <p className="hero-description">
            Experience the taste of freshly prepared meals
            made with love and the finest ingredients.
          </p>

          <a href="#menu" className="hero-btn">
            Explore Our Menu
          </a>
        </div>
      </section>

      {/* Menu Section */}
      <section className="menu-section" id="menu">
        <p className="subtitle">OUR SPECIALITIES</p>
        <h2>Popular Dishes</h2>

        <div className="menu-container">

          <div className="food-card">
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600"
              alt="Delicious burger"
            />
            <h3>Classic Burger</h3>
            <p>Juicy burger with fresh ingredients.</p>
            <strong>Rs. 850</strong>
          </div>

          <div className="food-card">
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600"
              alt="Fresh pizza"
            />
            <h3>Italian Pizza</h3>
            <p>Freshly baked pizza with melted cheese.</p>
            <strong>Rs. 1,200</strong>
          </div>

          <div className="food-card">
            <img
              src="https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600"
              alt="Rice dish"
            />
            <h3>Special Rice</h3>
            <p>Delicious rice prepared with special spices.</p>
            <strong>Rs. 950</strong>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <h2>Our Story</h2>
        <p>
          At Spice Garden, we believe great food brings
          people together. Every dish is prepared with
          fresh ingredients, passion and care.
        </p>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <h2>Ready to Enjoy Great Food?</h2>
        <p>Visit us or contact us to place your order.</p>
        <a
          href="https://wa.me/923001234567"
          target="_blank"
          rel="noreferrer"
          className="hero-btn"
        >
          Order on WhatsApp
        </a>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Spice Garden. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;