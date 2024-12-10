import React, { useEffect, useState, useRef } from 'react';
import './products.css';
import solar from '../../assets/solar.png';
import inverter from '../../assets/inverter.png';
import battery from '../../assets/battery.png';
import Productsmall from '../products/productsmall';


function Products() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const imageRefs = useRef([]);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 1200); // Check if screen width is 768px or smaller
        };

        window.addEventListener('resize', handleResize);
        handleResize(); 

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 } // Trigger when 10% of the element is visible
        );

        imageRefs.current.forEach((img) => {
            if (img) observer.observe(img);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className='product-description-container'>
            {isSmallScreen ? (
                <Productsmall />
            ) : (
                <>
                    <div className='product-head'  data-aos="fade-up">
                        We provide top-notch products and services in the solar energy sector, specializing in solar panels, inverters, and batteries. Our solutions are designed to deliver reliable, sustainable, and efficient energy systems, empowering homes and businesses with clean energy alternatives.
                    </div>
                    <div className='product-details'>
                        <div className='classA' data-aos="fade-up">
                            <img
                                src={solar}
                                alt="Solar Panels"
                                className="product-image"
                                ref={(el) => (imageRefs.current[0] = el)}
                            />
                        </div>
                        <div className='classB' data-aos="fade-up">
                            <div className='classtext'>
                            DT Energy takes pride in delivering the highest quality solar solutions to our valued customers. In our installations, we exclusively use premium solar panels from renowned brands such as JA Solar, Phonosolar, and Ulica Solar. These industry-leading panels are recognized for their exceptional performance, durability, and efficiency, ensuring optimal energy generation for homes and businesses alike. With a commitment to excellence, DT Energy partners with these trusted brands to guarantee that every solar installation meets the highest standards of reliability and sustainability.
                            Each of these solar panels comes with an impressive 30-year product warranty, offering unparalleled peace of mind and long-term value. This extended warranty is a testament to the superior build quality and advanced technology of these panels, making them a smart investment for the future. At DT Energy, our mission is to empower our clients with clean, renewable energy solutions that contribute to a greener, more sustainable planet. By choosing DT Energy, you are not only investing in top-tier solar products but also benefiting from our expertise, professionalism, and dedication to customer satisfaction.
                            </div>
                        </div>
                        <div className='classC' data-aos="fade-up">
                            <div className='classtext'>
                            When it comes to inverters, we rely on the trusted expertise of globally renowned brands such as Solis, FoxESS, and Huawei. These inverters are at the forefront of modern technology, designed to maximize energy efficiency and ensure the seamless operation of solar power systems in both residential and commercial settings. Solis inverters are known for their superior performance, reliability, and ease of use, making them a top choice for solar installations worldwide. FoxESS brings innovative features and high durability, ensuring that your solar system operates efficiently even in challenging conditions. Huawei, a global leader in technology, offers inverters with advanced features like intelligent monitoring and robust protection systems, providing unmatched efficiency and long-term stability.
                            </div>
                        </div>
                        <div className='classD' data-aos="fade-up">
                            <img
                                src={inverter}
                                alt="Inverter"
                                className="product-image"
                                ref={(el) => (imageRefs.current[1] = el)}
                            />
                        </div>
                        <div className='classE' data-aos="fade-up">
                            <img
                                src={battery}
                                alt="Battery"
                                className="product-image"
                                ref={(el) => (imageRefs.current[2] = el)}
                            />
                        </div>
                        <div className='classF' data-aos="fade-up">
                            <div className='classtext'>
                            we go beyond solar panels and inverters to provide comprehensive energy solutions, including premium battery systems that ensure uninterrupted power and efficient energy storage. We proudly offer battery solutions from globally trusted brands such as Panasonic, Energynet, and SF Sonic, each known for their advanced technology, reliability, and exceptional performance. Panasonic batteries are synonymous with innovation and longevity, offering outstanding energy density and stability, making them ideal for both residential and commercial applications. Energynet delivers cutting-edge battery solutions designed to maximize storage efficiency and provide reliable backup power during outages. SF Sonic, a renowned name in the energy storage sector, offers robust and durable batteries capable of handling varying energy demands with ease. With these high-quality battery solutions, DT Energy empowers homes and businesses to achieve energy independence, optimize energy usage, and reduce reliance on the grid. Our battery systems are tailored to meet diverse needs, ensuring seamless integration with solar installations for a complete and sustainable energy solution. At DT Energy, we are committed to delivering reliable, efficient, and future-ready energy storage solutions that support a greener, more resilient tomorrow.
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Products;
