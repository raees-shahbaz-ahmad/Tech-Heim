import React from 'react';
import { useNavigate } from 'react-router';
import "../Footer/Footer.css";

const Footer = () => {

    const navigate = useNavigate();

    const handleContactUsClick = () => {
        navigate("/contactUs");
    }

    const handleBlogClick = () => {
        navigate("/blog");
    }

    const handleOrderClick = () => {
        navigate("/orders");
    }

    const handleFaqClick = () => {
        navigate("/faq");
    }

    return (
        <footer>
            <div className="internal-footer">
                <div className="footer-content">
                    <ul>
                        <div className="heading">Company</div>
                        <li onClick={handleContactUsClick}>Contact Us</li>
                        <li onClick={handleBlogClick}>Blog</li>
                        <li onClick={handleOrderClick}>Order Status</li>
                    </ul>

                    <ul>
                        <div className="heading">Info</div>
                        <li>How Its Work</li>
                        <li>Our Promises</li>
                        <li onClick={handleFaqClick} >FAQ</li>
                    </ul>

                    <ul>
                        <div className="heading">Contact Us</div>
                        <li>123 Main Street,Anytown,USA</li>
                        <li>+1(555)-123-4567</li>
                        <li className='footer-email'>techhiem@gmail.com</li>
                    </ul>

                </div>

                <div className="footer-signup-content">
                    <p className="para">Sign up for News and updates</p>
                    <input type="email" placeholder="E-Mail Address" />
                    <div className="social-icons">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" viewBox="0 0 448 512">
                            <path
                                d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" viewBox="0 0 512 512">
                            <path
                                d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" viewBox="0 0 448 512">
                            <path
                                d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" viewBox="0 0 576 512">
                            <path
                                d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="sub-footer">
                <div className="copy-write">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 22C6.98 22 2.5 17.52 2.5 12C2.5 6.48 6.98 2 12.5 2C18.02 2 22.5 6.48 22.5 12C22.5 17.52 18.02 22 12.5 22Z" stroke="#CBCBCB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15.3802 15C14.6702 15.62 13.7502 16 12.7402 16C10.5302 16 8.74023 14.21 8.74023 12C8.74023 9.79 10.5302 8 12.7402 8C13.7502 8 14.6702 8.38 15.3802 9" stroke="#CBCBCB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    2023 Tech Heim.
                </div>
                <div className="sub-footer-content">
                    <li>Cookie Settings</li>
                    <li>Privacy Policy</li>
                    <li>Terms and Conditions </li>
                    <li>Imprint</li>
                </div>
            </div>
        </footer>
    )
}

export default Footer