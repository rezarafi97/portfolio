import { useEffect, useRef, useCallback, useState } from "react";

import { Helmet } from "react-helmet-async";
import { Box, Typography } from "@mui/material";

import Typed from "typed.js";
import TextTransition, { presets } from "react-text-transition";

import Particles from "react-particles";
import { loadFull } from "tsparticles";

import { links } from "../constants/particles";

const Home = ({ helmetTitle }) => {
    const [index, setIndex] = useState(0);

    const nameEl = useRef(null);

    const strings = [
        " توسعه دهنده سمت کاربر هستم",
        " برنامه نویسی هستم",
        " فریلنسر هستم",
    ];

    useEffect(() => {
        const typedName = new Typed(nameEl.current, {
            strings: [" رضا رفیع زاده "],
            typeSpeed: 110,
            backSpeed: 80,
            backDelay: 50,
            showCursor: false,
        });

        const stringsTransition = setInterval(() => {
            setIndex((index) => index + 1);
        }, 3000);

        return () => {
            typedName.destroy();
            clearInterval(stringsTransition);
        };
    }, []);

    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <Box
            sx={{
                backgroundColor: "gray",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>

            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={links}
            />

            <Box component="div" sx={{ display: "flex" }}>
                <Typography
                    ref={nameEl}
                    variant="h5"
                    color="black"
                ></Typography>
            </Box>

            <Box component="div" sx={{ display: "flex" }}>
                <TextTransition springConfig={presets.wobbly}>
                    <Typography
                        variant="h6"
                        color="black"
                        sx={{
                            mt: 3,
                        }}
                    >
                        {strings[index % strings.length]}
                    </Typography>
                </TextTransition>

                <Typography
                    variant="h6"
                    color="black"
                    sx={{ mt: 3, mr: 1 }}
                >
                    من یک
                </Typography>
            </Box>
        </Box>
    );
};

export default Home;