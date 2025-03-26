document.addEventListener('DOMContentLoaded', () => {
    // Particle.js Configuration
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: ['#4A90E2', '#2ECC71', '#E74C3C']  // Game-inspired colors
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                },
                polygon: {
                    nb_sides: 5
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#4A90E2',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: true,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse'  // Particles move away from cursor
                },
                onclick: {
                    enable: true,
                    mode: 'push'     // Add more particles on click
                },
                resize: true
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });

    // Additional Interactive Elements
    const sections = document.querySelectorAll('#about-me, #skills');
    
    sections.forEach(section => {
        section.addEventListener('mouseenter', () => {
            // Subtle particle interaction when hovering over sections
            particlesJS.load('particles-js', {
                particles: {
                    move: {
                        speed: 4  // Increase particle movement speed
                    }
                }
            });
        });

        const skillData = {
            gfx: {
                title: "🎨 GFX & UI/UX",
                description: "I create stunning visuals and user-friendly interfaces for an immersive experience.",
                image: "gfx-sample.jpg" // Replace with actual image/GIF
            },
            lighting: {
                title: "💡 Lighting",
                description: "I set the perfect mood with immersive lighting and effects.",
                image: "lighting-sample.jpg"
            },
            scripting: {
                title: "📜 Scripting",
                description: "I bring gameplay to life with smooth mechanics and well-optimized code.",
                image: "scripting-sample.gif"
            },
            modeling: {
                title: "🛠️ Modeling",
                description: "I craft detailed assets and props to enhance the world.",
                image: "modeling-sample.jpg"
            },
            animation: {
                title: "🎥 Animation",
                description: "I create smooth and fluid character/object animations.",
                image: "animation-sample.gif"
            },
            sfx: {
                title: "🎵 SFX",
                description: "I design high-quality sound effects for maximum immersion.",
                image: "sfx-sample.mp3" // You can replace this with an actual audio player if needed
            }
        };
        
        const buttons = document.querySelectorAll(".skill-btn");
        const title = document.getElementById("skill-title");
        const description = document.getElementById("skill-description");
        const image = document.getElementById("skill-image");

        buttons.forEach(button => {
            button.addEventListener("click", () => {
                const skill = button.getAttribute("data-skill");
                title.textContent = skillData[skill].title;
                description.textContent = skillData[skill].description;
                image.src = skillData[skill].image;
                image.style.display = "block";
            });
        });

        section.addEventListener('mouseleave', () => {
            // Reset to original particle configuration
            particlesJS.load('particles-js', {
                particles: {
                    move: {
                        speed: 2
                    }
                }
            });
        });
    });
});