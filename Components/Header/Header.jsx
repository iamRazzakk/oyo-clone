import Image from 'next/image';
import React from 'react';
import headerImg from '../../public/Assets/headerImg.jpg'

const Header = () => {
    return (
        <div>
            <div>
                <Image src={headerImg} alt='headerImage'></Image>
            </div>
            <div>
                <h1>Over 174,000+ hotels and homes across 35+ countries</h1>
                <div className="flex">
                    <input type="search" name="hotel" id="" />
                    <input type="date" name="date" id="" />
                </div>
            </div>
        </div>
    );
};

export default Header;