import React from "react";
import images from "components/images";

const Footer = () => {
    return (
        <footer className="page-footer">
            <div className="container">
                <div className="footer-sections">
                    <h3>About</h3>
                    <p className="footer-about-us">
                        FastGrocery is an online grocery delivery service. It
                        was founded in December 2013 and is based out of Mumbai.
                        As of 2018, the company has raised about $535.5 million
                        from investors including SoftBank, Tiger Global and
                        Sequoia Capital.
                    </p>
                </div>

                <div className="footer-sections">
                    <h3>Get started</h3>
                    <ul className="footer-links">
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Sign Up</a>
                        </li>
                        <li>
                            <a href="">Offers</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-sections">
                    <h3>Quick Links</h3>
                    <ul className="footer-links">
                        <li>
                            <a href="">About Us</a>
                        </li>
                        <li>
                            <a href="">Contact Us</a>
                        </li>
                        <li>
                            <a href="">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="">Sitemap</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-sections">
                    <h3>Support</h3>
                    <ul className="footer-links">
                        <li>
                            <a href="">FAQs</a>
                        </li>
                        <li>
                            <a href="">Help desk</a>
                        </li>
                        <li>
                            <a href="">Forums</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-sections">
                    <h3>Follow us on</h3>
                    <div className="footer-links">
                        <ul className="social-icons">
                            <li>
                                <a className="" href="#">
                                    <img
                                        src={images.facebook}
                                        alt="Facebook Icon"
                                    />
                                </a>
                            </li>
                            <li>
                                <a className="" href="#">
                                    <img
                                        src={images.twitter}
                                        alt="Twitter Icon"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div className="">
                <div className="container-reserved">
                    <p className="copyright-text">
                        Copyright &copy; 2021 All Rights Reserved by
                        <a href="#">FastGrocery</a>.
                    </p>
                    <a href="#top">Jump to top of page</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
