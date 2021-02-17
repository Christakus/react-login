
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <a className="home-link" href="/">Home</a>

            <div className="links">
                <a href="/signin">Sign In</a>
                <a href="/signup">Sign Up</a>
            </div>
        </nav>

     );
}
 
export default Navbar;