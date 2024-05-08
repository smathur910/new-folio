import { FaDiscord } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import '../Footer/Footer.css'

export default function Footer() {
    return (
        <div className="col-12 mt-4">
            <div className="row">
                <div className="col-md-4 col-12">
                    <div className="footer-col d-flex">
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
                <div className="col-md-4 col-12">
                    <div className="footer-col d-flex">
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
                <div className="col-md-4 col-12">
                    <div className="footer-col d-flex">
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
    );
}