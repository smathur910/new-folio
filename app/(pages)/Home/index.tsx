"use client"

import Image from "next/image";
import './Home.css'
import profileImg from '../../assets/img/profile/profile.png'
import Button from "@/app/components/shared/Button";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Player } from '@lordicon/react';
import ICON from '../../assets/img/json/loading.json';

export default function Home() {
    const content1Ani = useRef(null);
    const content2Ani = useRef(null);
    const buttonAni = useRef(null);
    const playerRef = useRef<Player>(null);


    useEffect(() => {
        if (typeof window !== 'undefined') {
        const elements = [content1Ani.current, content2Ani.current, buttonAni.current];

        gsap.fromTo(elements, {
            scale: 0,
            duration: .8,
            ease: "elastic.out(1,0.3)",
            stagger: 0.5,
        },
            {
                scale: .8,
                duration: 4,
                ease: "elastic.out(1,0.3)",
                stagger: 0.5,
            });
        playerRef.current?.playFromBeginning();
    }
}, []);


    return (
        <div className="row justify-content-center">
            <div className="col-md-12">
                <div className="card">
                    <div className="image-container">
                    <>
                    {typeof window !== 'undefined' && (
                    <Player
                        ref={playerRef}
                        size={180}
                        icon={ICON}
                        onComplete={() => playerRef.current?.playFromBeginning()}
                    />
                )}
                </>
                    <Image
                        src={profileImg}
                        alt="Picture of the author"
                    />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title" ref={content1Ani}>Sumit Mathur</h5>
                        <p className="card-text" ref={content2Ani}>Web Developer/UI Developer</p>
                        <div ref={buttonAni}>
                            <Button title="Start" link="/about" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}