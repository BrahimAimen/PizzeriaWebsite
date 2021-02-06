import styled from 'styled-components';
import { FaPizzaSlice } from 'react-icons/fa';
import Navbar from '.';
import {Link} from 'react-router-dom';

export const Nav = styled.nav`
    background-color: transparent;
    height: 80px;
    display: flex;
    justify-content: center;
    font-weight: 700;
    color: #fff;
`;

export const NavLink = styled(Link)`
    color: #fff;
    font-size: 2rem;
    display: flex;
    align-items:center;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 400px){

        position: absolute;
        top:10px;
        left:25px;
    }
`;

export const NavIcon = styled.div`
    display: block;
    position: absolute;
    top: 0px;
    right: 0px;
    cursor: pointer;
    color:#fff;

    p{
        transform: translate(-175%,100%);
        font-weight:bold;
    }
`;

export const Bars = styled(FaPizzaSlice)`

    font-size: 2rem;
    transform: translate(-50%, -15%);



`;