/*rafce*/
import React , {useState} from 'react'
import Navbar from '../Navbar';
import SideBar from '../SideBar';
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements';

const Hero = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <HeroContent>
                <HeroItems>
                    <HeroH1>You want your Pizza !!</HeroH1>
                    <HeroP>READY in 60 seconds</HeroP>
                    <HeroBtn>Place order</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>

    )
}

export default Hero
