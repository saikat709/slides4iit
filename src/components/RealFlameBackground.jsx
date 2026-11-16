import React, { useEffect, useRef } from 'react';

/**
 * RealFlameBackground
 * A high-performance, realistic physical flame simulation using additive particle combustion,
 * fluid upward convective velocity, sinusoidal air draft turbulence, and floating embers.
 */
export default function RealFlameBackground({
  height = '100%',
  intensity = 1.0,
  className = '',
  showEmbers = true
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle pool for realistic flames
    const flameCount = Math.floor(Math.min(180, Math.max(90, width / 8)));
    const emberCount = showEmbers ? Math.floor(Math.min(60, Math.max(25, width / 20))) : 0;

    class FlameParticle {
      constructor(isInitial = false) {
        this.reset(isInitial);
      }

      reset(isInitial = false) {
        // Distribute across the bottom edge with a concentrated center peak
        const spread = (Math.random() - 0.5);
        this.x = width * 0.5 + spread * width * 0.85;
        this.y = height + (isInitial ? -Math.random() * height * 0.4 : Math.random() * 20);
        
        // Upward convective velocity
        this.vy = -(Math.random() * 2.5 + 2.2) * (0.8 + intensity * 0.4);
        this.vx = (Math.random() - 0.5) * 1.2;
        
        // Physical lifespan
        this.maxLife = Math.random() * 45 + 35;
        this.life = isInitial ? Math.random() * this.maxLife : 0;
        
        // Initial size (large at bottom, contracts as it burns out)
        this.baseSize = (Math.random() * 32 + 22) * (0.7 + intensity * 0.4);
        this.size = this.baseSize;

        // Swirl offset
        this.seed = Math.random() * 100;
      }

      update(time) {
        this.life++;
        if (this.life >= this.maxLife) {
          this.reset();
          return;
        }

        const progress = this.life / this.maxLife;

        // Acceleration upward as hot gas rises
        this.vy -= 0.04;
        
        // Air turbulence / sinusoidal draft
        const turbulence = Math.sin(time * 0.003 + this.seed) * 0.8 + Math.cos(this.y * 0.02) * 0.5;
        this.vx += (turbulence * 0.15);
        
        // Slight pull toward center to create natural flame tongue shapes
        const centerPull = (width * 0.5 - this.x) * 0.0008;
        this.vx += centerPull;

        this.x += this.vx;
        this.y += this.vy;

        // Shrink particle as it consumes fuel
        this.size = this.baseSize * (1 - progress * 0.75);
      }

      draw(ctx) {
        const progress = this.life / this.maxLife;
        if (this.size <= 0) return;

        // Realistic combustion color ramp:
        // Core/Birth: Intense white-hot (#FFFFFF) -> Pale yellow/peach (#FEDEE1)
        // Mid: Radiant warm flame orange/red (#FF4500, #E02E4C)
        // Outer/Smoke: Dark crimson / maroon (#70020F) -> Transparent
        let r, g, b, alpha;

        if (progress < 0.2) {
          // White-hot core
          const t = progress / 0.2;
          r = 255;
          g = Math.floor(245 - t * 65);   // 245 -> 180
          b = Math.floor(220 - t * 140);  // 220 -> 80
          alpha = 0.85;
        } else if (progress < 0.55) {
          // Radiant orange-red flame
          const t = (progress - 0.2) / 0.35;
          r = 255;
          g = Math.floor(180 - t * 130);  // 180 -> 50
          b = Math.floor(80 - t * 70);    // 80 -> 10
          alpha = 0.7 - t * 0.2;
        } else {
          // Deep maroon / dissipation
          const t = (progress - 0.55) / 0.45;
          r = Math.floor(240 - t * 128);  // 240 -> 112 (#70020F)
          g = Math.floor(50 - t * 48);    // 50 -> 2
          b = Math.floor(10 + t * 5);     // 10 -> 15
          alpha = (1 - t) * 0.5;
        }

        const radGrad = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, Math.max(1, this.size)
        );
        radGrad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha})`);
        radGrad.addColorStop(0.4, `rgba(${r}, ${Math.floor(g * 0.6)}, ${Math.floor(b * 0.4)}, ${alpha * 0.6})`);
        radGrad.addColorStop(1, `rgba(112, 2, 15, 0)`);

        ctx.fillStyle = radGrad;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    class EmberParticle {
      constructor(isInitial = false) {
        this.reset(isInitial);
      }

      reset(isInitial = false) {
        this.x = width * 0.5 + (Math.random() - 0.5) * width * 0.9;
        this.y = isInitial ? Math.random() * height : height + 10;
        this.vy = -(Math.random() * 2.2 + 1.2);
        this.vx = (Math.random() - 0.5) * 1.5;
        this.size = Math.random() * 2.5 + 1.2;
        this.maxLife = Math.random() * 90 + 70;
        this.life = isInitial ? Math.random() * this.maxLife : 0;
        this.seed = Math.random() * 50;
      }

      update(time) {
        this.life++;
        if (this.life >= this.maxLife || this.y < -20) {
          this.reset();
          return;
        }
        const progress = this.life / this.maxLife;
        this.x += this.vx + Math.sin(time * 0.002 + this.seed) * 0.8;
        this.y += this.vy;
        this.alpha = Math.sin(progress * Math.PI) * (0.8 + Math.random() * 0.2);
      }

      draw(ctx) {
        ctx.fillStyle = `rgba(254, 222, 225, ${this.alpha})`;
        ctx.shadowColor = '#FF5722';
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const flames = Array.from({ length: flameCount }, () => new FlameParticle(true));
    const embers = Array.from({ length: emberCount }, () => new EmberParticle(true));

    let lastTime = 0;
    const render = (time) => {
      // Clear with soft decay for slight motion trail
      ctx.clearRect(0, 0, width, height);

      // Base bottom hearth glow
      const baseGrad = ctx.createLinearGradient(0, height, 0, height - height * 0.45);
      baseGrad.addColorStop(0, 'rgba(180, 20, 40, 0.35)');
      baseGrad.addColorStop(0.4, 'rgba(112, 2, 15, 0.2)');
      baseGrad.addColorStop(1, 'rgba(112, 2, 15, 0)');
      ctx.fillStyle = baseGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw additive combustion flames
      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      for (let i = 0; i < flames.length; i++) {
        flames[i].update(time);
        flames[i].draw(ctx);
      }
      ctx.restore();

      // Draw rising embers
      if (showEmbers) {
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        for (let i = 0; i < embers.length; i++) {
          embers[i].update(time);
          embers[i].draw(ctx);
        }
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [intensity, showEmbers]);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}>
      {/* Real Flame HTML5 Canvas Simulation */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-85"
      />

      {/* Subtle bottom vignette to blend smoothly into the slide */}
      <div className="absolute inset-0 bg-gradient-to-t from-flame-maroon-deep/70 via-transparent to-flame-maroon/60 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
    </div>
  );
}
