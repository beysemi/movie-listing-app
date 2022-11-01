import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {HeaderWrapper, BrandWrapper, Navigation, NavigationList, NavigationItem, NavigationLink, NavigationToggle } from './style'





const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
        document.querySelector('body').classList.toggle('no-scroll');

    }
    return (
        <>
            <HeaderWrapper>
                <BrandWrapper>
                   <Link href="/">
                        <a>
                            <Image src="/logo.svg" alt="logo" width={40} height={40} />
                        </a>
                   </Link>
                </BrandWrapper>
                <Navigation active={isOpen}>
                    <NavigationList>
                        <NavigationItem>
                            <Link href="/movies">
                                <NavigationLink>Movies</NavigationLink>
                            </Link>
                        </NavigationItem>
                        <NavigationItem>
                            <Link href="/tv-shows">
                                <NavigationLink>TV Shows</NavigationLink>
                            </Link>
                        </NavigationItem>
                        <NavigationItem>
                            <Link href="/report">
                                <NavigationLink>Report</NavigationLink>
                            </Link>
                        </NavigationItem>
                    </NavigationList>
                </Navigation>
                <NavigationToggle onClick={() => handleToggle()} active={isOpen}>
                    <span></span>
                    <span></span>
                    <span></span>
                </NavigationToggle>
            </HeaderWrapper>
        </>
    );
}

export default Header;
