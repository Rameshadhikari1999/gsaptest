import React, { useEffect, useRef } from 'react'
import{IoMenu} from '../../assets/incons.jsx'
import { menu } from '../../assets/contents.jsx'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import MobileNav from './MobileNav.jsx';

const Nav = () => {

    const [disWidth, setDisWidth] = React.useState(window.innerWidth > 768 ? true : false);
    const [isOpen, setIsOpen] = React.useState(false);
    const listRef = useRef();
    const navRef = useRef();

    // responsive for mobile and desktop nav
    useEffect(() => {
      window.addEventListener('resize', () => {
        setDisWidth(window.innerWidth > 768 ? true : false);
      });
      return () => {
        window.removeEventListener('resize', () => {
          setDisWidth(window.innerWidth > 768 ? true : false);
        });
      }
    }, []);
    
    // animation for desktop nav 
    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from('.nav h1', {
            opacity: 0,
            y: -20,
            duration: 1,
            delay: 1,
            ease: 'power4.out',
        })
        
        { disWidth && tl.to(listRef.current .children,{
            opacity: 1,
            y: 0,
            stagger: 0.2,
            duration: 0.6,
            ease: 'power4.out',
        })
        .to(listRef.current, {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            duration: 1,
            ease: 'power4.out',
        })}
        return () => {
            tl.kill();
        };
    }, [disWidth]);


    // animation for mobile nav 
    const tlMobile = gsap.timeline();
    useGSAP(() => {
        tlMobile.to("#navContainer", {
            y: 0,
            duration: 1,
            ease: 'power1.out',
        })
        {!disWidth && tlMobile.to(navRef.current .children, {
            opacity: 1,
            x: 0,
            duration: 0.7,
            stagger: 0.2,
            ease: 'steps(6)',
        })}
        tlMobile.pause();
    });


    const handleClose = () => {
        tlMobile.reverse();
    }

    const handleOpen = () => {
        tlMobile.play();
    }

  return (
    <header className='nav w-full fixed top-0 left-0  z-10 py-10  flex items-center justify-around'>
        {!disWidth && <MobileNav  onClose={handleClose} navRef={navRef}/>}
        {!disWidth && <div className='cursor-pointer text-blue-900 p-1 border-[2px] border-blue-900'>
        <IoMenu size={30} onClick={handleOpen}/>
        </div>}

      <h1 className='text-2xl font-semibold tracking-widest text-white font-gupter cursor-pointer'>CARVILLA</h1>
      {disWidth &&<ul ref={listRef} className='flex  justify-center gap-5 text-white'>
        {menu.map((item, index) => (
          <li  className='font-bold text-xm uppercase tracking-wide p-2 cursor-pointer hover:text-blue-400 hover:scale-[90%] transition-all ease-linear duration-300 font-gupter -translate-y-10 opacity-0'  
          key={index}
          >
            {item}
          </li>
        ))}
      </ul>}
    </header>
  )
}

export default Nav
