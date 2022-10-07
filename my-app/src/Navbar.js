const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>The Shift Planner</h1>
        <div className="links">
          <a href="/" style={{ 
            color: 'black', 
            backgroundColor: '#f1356d',
            borderRadius: '8px',
          }}>Shifts</a>
          <a href="/">Home</a>
        </div>
      </nav>
    );
  }
   
  export default Navbar;