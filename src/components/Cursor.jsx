import React, { useEffect, useRef } from "react";

function CursorFollower() {
  const followerRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const followerPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      followerPos.current.x += (mousePos.current.x - followerPos.current.x) * 1;
      followerPos.current.y += (mousePos.current.y - followerPos.current.y) * 1;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${followerPos.current.x - 20}px, ${followerPos.current.y - 20}px)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={followerRef}
      className="hidden md:block fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9999]
                 bg-white mix-blend-difference
                 shadow-[0_0_60px_6px_rgba(255,255,255,0.9),0_0_80px_10px_rgba(255,255,255,0.7)]"
    />
  );
}

export default CursorFollower;
