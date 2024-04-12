// import React, { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import "./Navbar.scss";

// function Navbar() {
//     const [active, setActive] = useState(false);
//     const [open, setOpen] = useState(false);

//     const { pathname } = useLocation();

//     const isActive = () => {
//         window.scrollY > 0 ? setActive(true) : setActive(false);
//     };

//     useEffect(() => {
//         window.addEventListener("scroll", isActive);
//         return () => {
//             window.removeEventListener("scroll", isActive);
//         };
//     }, []);

//     // const currentUser = null

//     const currentUser = {
//         id: 1,
//         username: "Anna",
//         isSeller: true,
//     };

//     return (
//         <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
//             <div className="container">
//                 <div className="logo">
//                     <Link className="link" to="/">
//                         <span className="text">liverr</span>
//                     </Link>
//                     <span className="dot">.</span>
//                 </div>
//                 <div className="links">
//                     <span>Liverr Business</span>
//                     <span>Explore</span>
//                     <span>English</span>
//                     {!currentUser?.isSeller && <span>Become a Seller</span>}
//                     {currentUser ? (
//                         <div className="user" onClick={() => setOpen(!open)}>
//                             <img
//                                 src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
//                                 alt=""
//                             />
//                             <span>{currentUser?.username}</span>
//                             {open && <div className="options">
//                                 {currentUser.isSeller && (
//                                     <>
//                                         <Link className="link" to="/mygigs">
//                                             Gigs
//                                         </Link>
//                                         <Link className="link" to="/add">
//                                             Add New Gig
//                                         </Link>
//                                     </>
//                                 )}
//                                 <Link className="link" to="/orders">
//                                     Orders
//                                 </Link>
//                                 <Link className="link" to="/messages">
//                                     Messages
//                                 </Link>
//                                 <Link className="link" to="/">
//                                     Logout
//                                 </Link>
//                             </div>}
//                         </div>
//                     ) : (
//                         <>
//                             <span>Sign in</span>
//                             <Link className="link" to="/register">
//                                 <button>Join</button>
//                             </Link>
//                         </>
//                     )}
//                 </div>
//             </div>
//             {(active || pathname !== "/") && (
//                 <>
//                     <hr />
//                     <div className="menu">
//                         <Link className="link menuLink" to="/">
//                             Graphics & Design
//                         </Link>
//                         <Link className="link menuLink" to="/">
//                             Video & Animation
//                         </Link>
//                         <Link className="link menuLink" to="/">
//                             Writing & Translation
//                         </Link>
//                         <Link className="link menuLink" to="/">
//                             AI Services
//                         </Link>
//                         <Link className="link menuLink" to="/">
//                             Digital Marketing
//                         </Link>
//                         <Link className="link menuLink" to="/">
//                             Music & Audio
//                         </Link>
//                         <Link className="link menuLink" to="/">
//                             Programming & Tech
//                         </Link>
//                         <Link className="link menuLink" to="/">
//                             Business
//                         </Link>
//                         <Link className="link menuLink" to="/">
//                             Lifestyle
//                         </Link>
//                     </div>
//                     <hr />
//                 </>
//             )}
//         </div>
//     );
// }

// export default Navbar;

















import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss"

const Navbar = () => {

    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);

    const { pathname } = useLocation();

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", isActive);

        return () => {
            window.removeEventListener("scroll", isActive)
        };
    }, []);
    /* fetch user detail from database */
    const currentUsers = {
        id: 1,
        username: "John Doe",
        isSeller: true
    }

    return (
        <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
            <div className="container">
                <div className="logo">
                    <Link to="/" className="link">
                        <span className='text'>V-Work</span>
                    </Link>
                    <span className='dot'>.</span>
                </div>
                <div className="links">
                    <span>Vwork Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>Sign in</span>
                    {!currentUsers?.isSeller && <span>Become a Seller</span>}
                    {!currentUsers && <button>Join</button>}
                    {currentUsers && (
                        <div className="user" onClick={() => setOpen(!open)}>
                            <img src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            <span>{currentUsers?.username}</span>

                            {open && <div className="options">
                                {currentUsers?.isSeller && (
                                    <>
                                        <Link className="link" to="/mygigs">
                                            Gigs
                                        </Link>
                                        <Link className="link" to="/add">
                                            Add New Gig
                                        </Link>
                                    </>
                                )}
                                <Link className="link" to="/orders">
                                    Orders
                                </Link>
                                <Link className="link" to="/messages">
                                    Messages
                                </Link>
                                <Link className="link" to="/">
                                    Logout
                                </Link>
                            </div>}

                        </div>
                    )}
                </div>
            </div>

            {(active || pathname !== "/") && (
                <>
                    <hr />
                    <div className="menu">
                        <Link className="link menuLink" to="/">
                            Graphics & Design
                        </Link>
                        <Link className="link menuLink" to="/">
                            Video & Animation
                        </Link>
                        <Link className="link menuLink" to="/">
                            Writing & Translation
                        </Link>
                        <Link className="link menuLink" to="/">
                            AI Services
                        </Link>
                        <Link className="link menuLink" to="/">
                            Digital Marketing
                        </Link>
                        <Link className="link menuLink" to="/">
                            Music & Audio
                        </Link>
                        <Link className="link menuLink" to="/">
                            Programming & Tech
                        </Link>
                        <Link className="link menuLink" to="/">
                            Business
                        </Link>
                        <Link className="link menuLink" to="/">
                            Lifestyle
                        </Link>
                    </div>
                </>
            )}
        </div>
    )
}

export default Navbar;