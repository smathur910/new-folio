import { FaDiscord } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../Footer/Footer.css';

export default function Footer() {

    const div1Ref = useRef(null);
    const div2Ref = useRef(null);
    const div3Ref = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
        const elements = [div1Ref.current, div2Ref.current, div3Ref.current];
        gsap.fromTo(elements, {
            opacity: 0,
            y: 100,
            duration: 1,
            ease: 'power3.out',
            stagger: 0.5,
        },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
                stagger: 0.5,
            });
    }
}, []);

    return (
        <div className="col-12 mt-4">
            <div className="row">
                <div className="col-md-4 col-12">
                    <div className="footer-col d-flex" ref={div1Ref}>
                        <div className="footer-card">
                            <div className="footer-icon">
                                <FaDiscord />
                            </div>
                            <div className="footer-text">
                                <div className="title">
                                    Discord
                                </div>
                                <div className="link">
                                    @Telegram
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-12">
                    <div className="footer-col d-flex" ref={div2Ref}>
                        <div className="footer-card width19">
                            <div className="footer-icon">
                                <IoMdMail />
                            </div>
                            <div className="footer-text">
                                <div className="title">
                                    Mail
                                </div>
                                <div className="link">
                                    smathur910@gmail.com
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-12">
                    <div className="footer-col d-flex" ref={div3Ref}>
                        <div className="footer-card">
                            <div className="footer-icon">
                                <FaLinkedinIn />
                            </div>
                            <div className="footer-text">
                                <div className="title">
                                    LinkedIn
                                </div>
                                <div className="link">
                                    @Telegram
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
