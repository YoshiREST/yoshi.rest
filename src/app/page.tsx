'use client';

import React              from "react";

import { NextUIProvider } from "@nextui-org/react";

import { Navbar }         from "@components/Navbar";
import { Footer }         from "@components/Footer";

import Landing            from "@containers/landing/Landing";

const Home = () => {
    return (
      <NextUIProvider>
        <div>
            <Navbar/>
                <Landing />
            <Footer />
        </div>
      </NextUIProvider>
    );
};

export default Home;
