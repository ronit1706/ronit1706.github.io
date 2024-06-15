import React, { useRef, useEffect } from 'react';

const ParticlesBackground = () => {
  const canvasRef = useRef(null);
  let particles = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set initial canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Adjust particle positions if they are outside new canvas dimensions
      particles.forEach(particle => {
        if (particle.x > canvas.width) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = canvas.height;
      });

      init(); // Reinitialize particles after resize
    };

    // Particle class
    class Particle {
      constructor(x, y, radius, color, velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
        this.alpha = 1; // Transparency for trailing effect
        this.fadeOutRate = 0.0005; // Rate at which alpha decreases
      }

      // Draw particle
      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha; // Set transparency
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
      }

      // Update particle position and alpha
      update() {
        this.draw();
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        // Reflect particles off canvas edges
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.velocity.x = -this.velocity.x;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.velocity.y = -this.velocity.y;
        }

        if (this.alpha > 0) {
          this.alpha -= this.fadeOutRate; // Fade out particle
        } else {
          this.alpha = 0; // Ensure alpha does not go negative
        }
      }
    }

    // Initialize particles
    function init() {
      particles = [];
      for (let i = 0; i < 50; i++) {
        const radius = Math.random() * 2 + 0.5; // Smaller particles
        const x = Math.random() * canvas.width; // Random x position within canvas width
        const y = Math.random() * canvas.height; // Random y position within canvas height
        const color = 'rgba(255, 255, 255, 0.7)'; // Particle color with opacity
        const velocity = {
          x: (Math.random() - 0.5) * 2, // Random x velocity between -1 and 1
          y: (Math.random() - 0.5) * 2 // Random y velocity between -1 and 1
        };

        particles.push(new Particle(x, y, radius, color, velocity));
      }
    }

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.update();

        // Remove faded out particles
        if (particle.alpha <= 0) {
          particles.splice(index, 1);
        }

        // Draw trailing lines
        drawLines(particles);
      });
    }

    // Draw lines between particles
    function drawLines(particles) {
      particles.forEach(p1 => {
        particles.forEach(p2 => {
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) { // Draw line if particles are close enough
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.01)';
            ctx.stroke();
          }
        });
      });
    }

    // Initialize particles and start animation
    init();
    animate();

    // Resize canvas on window resize
    window.addEventListener('resize', resizeCanvas);

    // Cleanup on unmount
    return () => {
      particles = [];
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default ParticlesBackground;
