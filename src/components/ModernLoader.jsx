import styled, { keyframes } from 'styled-components';
import logo from '../assets/logo.png'; // Adjust the path as necessary

const ModernLoader = () => {
  return (
     <div className="fixed inset-0 flex items-center justify-center bg-white/70 dark:bg-gray-900/80 backdrop-blur-sm z-[9999]">
      <PyramidLoader>
        <div className="wrapper">
          <span className="side side1" />
          <span className="side side2" />
          <span className="side side3" />
          <span className="side side4" />
          <span className="shadow" />
        </div>
        
        <LogoContainer>
          <img src={logo} alt="Logo" className="logo dark:invert" />
        </LogoContainer>
         <div class="overflow-hidden">
            <img src="https://ai-agent.preview.uideck.com/assets/images/gen-glow.png" class="absolute bottom-0 w-full left-1/2 z-10 -translate-x-1/2" alt=""/>
          </div>
      </PyramidLoader>
    </div>
  );
};

// Pyramid animation
const spin = keyframes`
  100% {
    transform: rotateY(360deg);
  }
`;

const PyramidLoader = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  transform-style: preserve-3d;
  transform: rotateX(-20deg);

  .wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    animation: ${spin} 4s linear infinite;
  }

  .side {
    width: 70px;
    height: 70px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transform-origin: center top;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    opacity: 0.8;
  }

  .side1 {
    transform: rotateZ(-30deg) rotateY(90deg);
    background: conic-gradient(#2BDEAC, #F028FD, #D8CCE6, #2F2585);
  }

  .side2 {
    transform: rotateZ(30deg) rotateY(90deg);
    background: conic-gradient(#2F2585, #D8CCE6, #F028FD, #2BDEAC);
  }

  .side3 {
    transform: rotateX(30deg);
    background: conic-gradient(#2F2585, #D8CCE6, #F028FD, #2BDEAC);
  }

  .side4 {
    transform: rotateX(-30deg);
    background: conic-gradient(#2BDEAC, #F028FD, #D8CCE6, #2F2585);
  }

  .shadow {
    width: 60px;
    height: 60px;
    background: #8B5AD5;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transform: rotateX(90deg) translateZ(-40px);
    filter: blur(12px);
    opacity: 0.5;
  }
`;

// Logo container
const LogoContainer = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;

  .logo {
    width: 100%;
    height: 100%;
    object-fit: contain;
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.1); opacity: 0.8; }
  }
`;

export default ModernLoader;