import Image from "next/image";
import aboutRightImg from '../../assets/img/profile/about.png'
import './About.css'
export default function about() {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className="left-card p-5">
                            <div className="left-card__title">
                                <h1>Hi!</h1>
                                <p className="mb-3">Welcome to my corner of the web! I'm Sumit Mathur, a seasoned Front End Developer hailing from Kolkata, India, with over 4 years of hands-on experience in web development.
                                </p>
                                <p className="mb-3">
                                    As an Innovative Front End Developer, I specialize in crafting and maintaining responsive websites that leave a lasting impression. My toolkit includes proficiency in HTML, CSS, jQuery, JavaScript, and leading JS Frameworks like Angular and React. With a robust foundation in web development, I approach every project with dedication and expertise.
                                </p>
                                <p className="mb-3">
                                    What sets me apart is my unwavering passion for UI design. Leveraging my skills in Adobe Photoshop and Figma, I strive to create visually stunning and intuitive interfaces that captivate users. My meticulous attention to detail ensures that each project I undertake meets the highest standards of quality and functionality.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
                        <div className="right-card">
                            <div className="right-card__image">
                                <Image src={aboutRightImg} alt="about"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}