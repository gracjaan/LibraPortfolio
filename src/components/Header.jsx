import React from 'react'
import LibraLogo from '../assets/Libra.svg'

const Header = () => {
  return (
    <div class="flex flex-col gap-10">
        <img src={LibraLogo} width={528} class="mt-16 ml-16" alt="Vite logo" />
        <h3 class="text-black font-thin ml-16">Kompleksowe wykończenie wnętrz</h3>
        <div class="border-b border-black"></div>
    </div>
  )
}

export default Header

// import React, { useState, useEffect } from 'react'
// import LibraLogo from '../assets/Libra.svg'

// const Header = () => {
//     const [scrollPosition, setScrollPosition] = useState(0);

//     useEffect(() => {
//         const handleScroll = () => {
//             setScrollPosition(window.pageYOffset);
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     const height = Math.max(60, 100 - scrollPosition / 10);
//     const top = scrollPosition > (height - 250) ? '-250px' : '0';
//     const scale = Math.max(0.5, 1 - scrollPosition / 2000); // Adjust this value as needed

//     return (
//         <div class="flex flex-col gap-10 sticky top-0" style={{ top }}>
//             <div style={{ transform: `scale(${scale})`, transformOrigin: 'left' }}>
//                 <img src={LibraLogo} width={528} class="mt-16 ml-16" alt="Vite logo" />
//                 <h3 class="text-black font-thin ml-16">Kompleksowe wykończenie wnętrz</h3>
//             </div>
//             <div class="border-b border-black"></div>
//         </div>
//     )
// }

// export default Header