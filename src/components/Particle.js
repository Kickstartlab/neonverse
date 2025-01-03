import React, { useCallback } from "react";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";

function Particle() {
    const particlesInit = useCallback(async (engine) => {
        // Load the full tsParticles bundle
        await loadFull(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: { enable: true },
                particles: {
                    number: {
                        value: 50,
                    },
                    color: {
                        value: "#ffffff",
                    },
                    size: {
                        value: 3,
                    },
                    move: {
                        enable: true,
                        speed: 1,
                    },
                    links: {
                        enable: true,
                        distance: 150,
                        color: "#ffffff",
                        opacity: 0.4,
                        width: 1,
                    },
                },
                background: {
                    color: "#000000", // Background color
                },
            }}
        />
    );
}

export default Particle;
