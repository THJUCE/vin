
import React from 'react';

const Snowflakes: React.FC = () => {
  const snowflakesCount = 50;
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {Array.from({ length: snowflakesCount }).map((_, i) => {
        const size = Math.random() * 8 + 4;
        const left = Math.random() * 100;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 10;
        const opacity = Math.random() * 0.7 + 0.3;

        return (
          <div
            key={i}
            className="snowflake text-white"
            style={{
              left: `${left}%`,
              fontSize: `${size}px`,
              animationDuration: `${duration}s`,
              animationDelay: `-${delay}s`,
              opacity: opacity,
              filter: `blur(${Math.random() * 1}px)`
            }}
          >
            ❄
          </div>
        );
      })}
    </div>
  );
};

export default Snowflakes;
