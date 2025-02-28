import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";

const HeaderH1 = styled.h1`
    font-size: 2.5em;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    width: 100%;
`
const HeaderP = styled.p`
    display: flex;
    justify-content: flex-end;
    font: inherit;
`
const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 2em 2em 2em 2em;
    background-color: #201E1E;
    color: white;
`
const HeaderContentBrand = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const HeaderButton = styled.button`
    border: none;
    background-color: #201E1E;
    display: flex;
    justify-content: flex-end;
`

function Header () {
return(
    <HeaderWrapper>
        <HeaderContentBrand>
            <HeaderH1>Reviva Fashion</HeaderH1>
            <HeaderP>by RCHLO</HeaderP>
        </HeaderContentBrand>
        <div>
            <Link to="carrinho">
                <HeaderButton>
                    <svg width="28" height="32" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 5.98944C6 2.68134 8.68393 0 12 0C15.3161 0 18 2.68134 18 5.98944V8.55634H21.4286C22.8482 8.55634 24 9.7061 24 11.1232V22.2465C24 25.0808 21.6964 27.3803 18.8571 27.3803H5.14286C2.3025 27.3803 0 25.0808 0 22.2465V11.1232C0 9.7061 1.15125 8.55634 2.57143 8.55634H6V5.98944ZM8.57143 8.55634H15.4286V5.98944C15.4286 4.09902 13.8911 2.5669 12 2.5669C10.1089 2.5669 8.57143 4.09902 8.57143 5.98944V8.55634ZM7.28571 13.6901C7.99821 13.6901 8.57143 13.1179 8.57143 12.4067C8.57143 11.6954 7.99821 11.1232 7.28571 11.1232C6.57321 11.1232 6 11.6954 6 12.4067C6 13.1179 6.57321 13.6901 7.28571 13.6901ZM16.7143 11.1232C16.0018 11.1232 15.4286 11.6954 15.4286 12.4067C15.4286 13.1179 16.0018 13.6901 16.7143 13.6901C17.4268 13.6901 18 13.1179 18 12.4067C18 11.6954 17.4268 11.1232 16.7143 11.1232Z" fill="white"/>
                        </svg>
                </HeaderButton>
            </Link>
        </div>
    </HeaderWrapper>
)
}

export default Header;