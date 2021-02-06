import React from 'react'
import {SidebarContainer,
        Icon,
        CloseIcon,
        SidebarMenu, 
        SidebarLink,
        SideBtnWrappe, 
        SidebarRoute} from './SideBarElements'

const SideBar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Pizza</SidebarLink>
                <SidebarLink to="/">Desserts</SidebarLink>
                <SidebarLink to="/">Full Menu</SidebarLink>
            </SidebarMenu>
            <SideBtnWrappe>
                <SidebarRoute to="/">Order Now</SidebarRoute>
            </SideBtnWrappe>

        </SidebarContainer>
            
        
    );
}

export default SideBar
