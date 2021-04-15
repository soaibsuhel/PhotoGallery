import React from "react";
import web from "../src/images/img2.svg.jpg"
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () => {
    return (
        <>
            <Common
                name="Grow your business with"
                imgsrc={web}
                visit="/gallery"
                btname=" Get Started"
            />
        </>
    );
};

export default Home;