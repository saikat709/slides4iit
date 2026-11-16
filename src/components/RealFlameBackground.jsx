import React, { useEffect, useRef } from 'react';

/**
 * RealFlameBackground
 * Realistic physical flame combustion simulation.
 * Supports:
 * - 'yellow': High-visibility radiant golden-yellow fire with white-hot core (ideal for Home cover).
 * - 'ambient': Gentle warm golden flame base with floating embers (ideal for content slides with light/dark gradients).
 */
export default function RealFlameBackground({
  colorPreset = 'yellow', // 'yellow' | 'ambient'
  flameHeight = 'tall',   // 'tall' | 'bottom'
  intensity = 1.0,
  showEmbers = true,
  className = ''
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

    const isHome = colorPreset === 'yellow' && flameHeight === 'tall';
    const flameCount = isHome
      ? Math.floor(Math.min(200, Math.max(110, width / 7)))
      : Math.floor(Math.min(100, Math.max(50, width / 14)));

    const emberCount = showEmbers
      ? (isHome ? Math.floor(Math.min(70, Math.max(30, width / 18))) : Math.floor(Math.min(35, Math.max(15, width / 30))))
      : 0;

    class FlameParticle {
      constructor(isInitial = false) {
        this.reset(isInitial);
      }

      reset(isInitial = false) {
        // Spread along bottom edge
        const spread = (Math.random() - 0.5);
        this.x = width * 0.5 + spread * width * (isHome ? 0.95 : 1.0);
        this.y = height + (isInitial ? -Math.random() * (isHome ? height * 0.45 : height * 0.2) : Math.random() * 20);

        // Convective upward velocity
        const baseSpeed = isHome ? (Math.random() * 2.8 + 2.4) : (Math.random() * 1.6 + 1.2);
        this.vy = -baseSpeed * (0.8 + intensity * 0.4);
        this.vx = (Math.random() - 0.5) * 1.1;

        // Life
        const maxLifeBase = isHome ? (Math.random() * 45 + 40) : (Math.random() * 32 + 24);
        this.maxLife = maxLifeBase;
        this.life = isInitial ? Math.random() * this.maxLife : 0;

        // Size
        const sizeBase = isHome ? (Math.random() * 38 + 26) : (Math.random() * 26 + 16);
        this.baseSize = sizeBase * (0.7 + intensity * 0.4);
        this.size = this.baseSize;

        this.seed = Math.random() * 100;
      }

      update(time) {
        this.life++;
        if (this.life >= this.maxLife) {
          this.reset();
          return;
        }

        const progress = this.life / this.maxLife;

        // Thermal acceleration
        this.vy -= isHome ? 0.05 : 0.03;

        // Draft turbulence
        const turbulence = Math.sin(time * 0.003 + this.seed) * 0.9 + Math.cos(this.y * 0.02) * 0.5;
        this.vx += (turbulence * 0.16);

        // Center draft
        const centerPull = (width * 0.5 - this.x) * (isHome ? 0.0009 : 0.0004);
        this.vx += centerPull;

        this.x += this.vx;
        this.y += this.vy;

        // Shrink at tip
        this.size = this.baseSize * (1 - progress * 0.78);
      }

      draw(ctx) {
        const progress = this.life / this.maxLife;
        if (this.size <= 0) return;

        let r, g, b, alpha;

        if (colorPreset === 'yellow') {
          // VISIBLE RADIANT YELLOW FLAME
          if (progress < 0.22) {
            // Stage 1: Intense White-Hot to Radiant Sunny Yellow
            const t = progress / 0.22;
            r = 255;
            g = Math.floor(255 - t * 35);   // 255 -> 220
            b = Math.floor(230 - t * 210);  // 230 -> 20 (bright yellow!)
            alpha = 0.92;
          } else if (progress < 0.58) {
            // Stage 2: Vivid Golden Yellow to Warm Amber
            const t = (progress - 0.22) / 0.36;
            r = 255;
            g = Math.floor(220 - t * 105);  // 220 -> 115 (golden yellow -> warm amber)
            b = Math.floor(20 - t * 20);    // 20 -> 0
            alpha = 0.85 - t * 0.25;
          } else {
            // Stage 3: Amber to Fiery Orange-Red and Smoke Dissipation
            const t = (progress - 0.58) / 0.42;
            r = Math.floor(255 - t * 125);  // 255 -> 130
            g = Math.floor(115 - t * 105);  // 115 -> 10
            b = Math.floor(t * 15);
            alpha = (1 - t) * 0.55;
          }
        } else {
          // AMBIENT WARM FLAME (Gentle golden-amber presence for content slides)
          if (progress < 0.3) {
            const t = progress / 0.3;
            r = 255;
            g = Math.floor(235 - t * 50);
            b = Math.floor(140 - t * 110);
            alpha = 0.65;
          } else if (progress < 0.7) {
            const t = (progress - 0.3) / 0.4;
            r = 255;
            g = Math.floor(185 - t * 95);
            b = Math.floor(30 - t * 25);
            alpha = 0.5 - t * 0.2;
          } else {
            const t = (progress - 0.7) / 0.3;
            r = Math.floor(230 - t * 110);
            g = Math.floor(90 - t * 80);
            b = 10;
            alpha = (1 - t) * 0.3;
          }
        }

        const radGrad = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, Math.max(1, this.size)
        );
        radGrad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha})`);
        radGrad.addColorStop(0.45, `rgba(${r}, ${Math.floor(g * 0.75)}, ${Math.floor(b * 0.4)}, ${alpha * 0.65})`);
        radGrad.addColorStop(1, `rgba(255, 120, 0, 0)`);

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
        this.x = width * 0.5 + (Math.random() - 0.5) * width * 0.95;
        this.y = isInitial ? Math.random() * height : height + 10;
        this.vy = -(Math.random() * 2.2 + 1.2);
        this.vx = (Math.random() - 0.5) * 1.4;
        this.size = Math.random() * 2.4 + 1.2;
        this.maxLife = Math.random() * 85 + 60;
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
        this.x += this.vx + Math.sin(time * 0.002 + this.seed) * 0.7;
        this.y += this.vy;
        this.alpha = Math.sin(progress * Math.PI) * (0.85 + Math.random() * 0.15);
      }

      draw(ctx) {
        // Golden glowing sparks
        ctx.fillStyle = `rgba(255, 225, 80, ${this.alpha})`;
        ctx.shadowColor = '#FFA500';
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const flames = Array.from({ length: flameCount }, () => new FlameParticle(true));
    const embers = Array.from({ length: emberCount }, () => new EmberParticle(true));

    const render = (time) => {
      ctx.clearRect(0, 0, width, height);

      // Base bottom hearth glow (warm golden/amber)
      const hearthGrad = ctx.createLinearGradient(0, height, 0, height - (isHome ? height * 0.45 : height * 0.25));
      if (colorPreset === 'yellow') {
        hearthGrad.addColorStop(0, 'rgba(255, 170, 0, 0.45)');
        hearthGrad.addColorStop(0.3, 'rgba(230, 60, 20, 0.25)');
        hearthGrad.addColorStop(1, 'rgba(112, 2, 15, 0)');
      } else {
        hearthGrad.addColorStop(0, 'rgba(255, 160, 20, 0.25)');
        hearthGrad.addColorStop(0.4, 'rgba(200, 40, 20, 0.12)');
        hearthGrad.addColorStop(1, 'rgba(112, 2, 15, 0)');
      }
      ctx.fillStyle = hearthGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw additive combustion flames
      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      for (let i = 0; i < flames.length; i++) {
        flames[i].update(time);
        flames[i].draw(ctx);
      }
      ctx.restore();

      // Draw rising golden embers
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
  }, [colorPreset, flameHeight, intensity, showEmbers]);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}>
      {/* Real Flame HTML5 Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-90"
      />

      {/* Vignette blend */}
      {colorPreset === 'yellow' ? (
        <div className="absolute inset-0 bg-gradient-to-t from-flame-maroon-deep/75 via-transparent to-flame-maroon/70 pointer-events-none" />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-transparent pointer-events-none" />
      )}
    </div>
  );
}
