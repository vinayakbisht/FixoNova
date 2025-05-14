import React from 'react';
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
    return (
        <>
            <div className='home' id='home'>
                <main>
                    <h1>FixoNova </h1>
                    <p>Solution to all your problems</p>
                </main>
            </div>

            <div className="home2">
                <img src={vg} alt="Graphics" />
                <div>
                    <p>
                        We are your one and only solution to the tech problems you face
                        every day. We are leading tech company whose aim is to increase the
                        problem solving ability in children.
                    </p>
                </div>
            </div>

            <div className="home3" id='about'>
                <div>
                    <h1>Who we are ?</h1>
                    <p>
                      We are a passionate team of innovators, educators, and tech enthusiasts committed to making technology accessible and engaging for all. At our core, we believe in the power of technology to transform lives—especially when young minds are empowered to explore, create, and solve real-world problems.
                      With a focus on nurturing critical thinking and creativity in children, we combine cutting-edge tech solutions with educational initiatives that spark curiosity and inspire confidence. Whether it’s solving day-to-day tech issues or preparing the next generation for a tech-driven future, we’re here to lead the way.
                    </p>
                </div>
            </div>

            <div className="home4" id='brands'>
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{animationDelay: "0.3s" }}>
                            <AiFillGoogleCircle/>
                            <p>Google</p>
                        </div>
                        <div style={{animationDelay: "0.5s" }}>
                            <AiFillAmazonCircle/>
                            <p>Amazon</p>
                        </div>
                        <div style={{animationDelay: "0.7s" }}>
                            <AiFillYoutube/>
                            <p>Youtube</p>
                        </div>
                        <div style={{animationDelay: "1s" }}>
                            <AiFillInstagram/>
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home