import Image from "next/image";
import './Home.css'
import profileImg from '../../assets/img/profile/profile.png'
import Button from "@/app/components/shared/Button";

export default function Home() {
    return (
        <div className="row justify-content-center">
            <div className="col-md-12">
                <div className="card">
                    <Image
                        src={profileImg}
                        alt="Picture of the author"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Sumit Mathur</h5>
                        <p className="card-text">Web Developer/UI Developer</p>
                        <Button title="Start" link="/About"/>
                    </div>
                </div>
            </div>
        </div>
    )
}