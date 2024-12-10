import React from 'react'
import { useEffect } from "react";
import './solarinstallation.css'
import Solarinstallationimg from '../../assets/solarinstallation.jpg'
import Batterystoragesolution from '../../assets/energystorage.png';
import hybrid from '../../assets/hybrid.png';
import Ongrid from '../../assets/ongrid.png';
import Offgrid from '../../assets/offgrid.png';
import Consultation from '../../assets/consultation.png';
import Financial from '../../assets/Financial.jpg';
import Contact from '../Contact/contact';
import BankPartners from '../Bankingpartens/bankingpartners';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS CSS


function Solarinstallation() {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS
    }, []);
    return (
        <div className='solarinstallation-container'>
            <div className='solarinstallation-head'  data-aos="fade-up">
                In today’s world, renewable energy is more than just a trend—it's the future.
                At DT Energy (Dream Trillions (Pvt) Ltd), we believe in leading that future with
                innovative, sustainable, and efficient solar solutions. Whether you are looking to power
                your home, business, or a large-scale project, our expertise in solar installation
                guarantees reliable energy solutions tailored to your specific needs.
            </div>
            <h2 className='solarinstallation-heading'  data-aos="fade-up">1. Solar Installation</h2>

            <div className='solarinstallation-section'>

                <div className='solarinstallation-image'  data-aos="fade-up">
                    <img src={Solarinstallationimg} alt="Solar Installation" />
                </div>
                <div className='solarinstallation-description'  data-aos="fade-up">

                    <div className="solar-services-intro"  data-aos="fade-up">
                        Whether you are looking to power your home, business, or a large-scale project, our expertise in solar installation guarantees reliable energy solutions tailored to your specific needs.
                        We offer customized solar installation services across all system configurations:
                    </div>
                    <div className="solar-services-list">

                        <ul className="solar-services-items"  data-aos="fade-up">
                            <li className="solar-service-item"  data-aos="fade-up">
                                <span className="service-title"  data-aos="fade-up">1. On-Grid Systems:</span> Perfect for locations with a reliable grid connection, It generates electricity from solar panels and can draw power from the grid when
                                solar production is sufficient. Users can sell excess energy back to the grid, making it a
                                cost-effective option for harnessing solar power
                            </li>
                            <li className="solar-service-item"  data-aos="fade-up">
                                <span className="service-title"  data-aos="fade-up">2. Off-Grid Systems:</span> Ideal for remote areas, our off-grid solutions ensure energy independence by utilizing advanced battery storage.
                            </li>
                            <li className="solar-service-item"  data-aos="fade-up">
                                <span className="service-title"  data-aos="fade-up">3. Hybrid Systems:</span> A versatile option combining the benefits of both on-grid and off-grid systems, offering maximum reliability and flexibility.
                            </li>
                        </ul>
                    </div>
                </div>




            </div>

            <div className='client-need'  data-aos="fade-up">
                At DT Energy, we provide customized solar installation services tailored to the client's needs. Whether it's for a <span className="highlight">residential</span> or <span className="highlight">commercial</span> property, we offer solutions that match the space and energy requirements. For clients with limited space, we recommend <span className="highlight">rooftop</span> installations, making the most of the available roof area. For those with larger properties or land, <span className="highlight">ground-mounted</span> systems are an excellent option, providing flexibility and maximizing energy production. We design and configure each system based on the client's specific needs, ensuring efficient and reliable energy solutions. Whether opting for an on-grid, off-grid, or hybrid system, our team guarantees the right choice for every client.


                <div>

                </div>


            </div>
            <h2 className='solarinstallation-heading'  data-aos="fade-up">2. Battery storage solutions</h2>
            <div className='solarinstallation-section'>

                <div className='solarinstallation-image'  data-aos="fade-up">
                    <img src={Batterystoragesolution} alt="Solar Installation" />
                </div>
                <div className='solarinstallation-description'  data-aos="fade-up">

                    <div className="solar-services-intro"  data-aos="fade-up">
                        Our energy storage systems are designed to
                        enhance the efficiency, reliability, and sustainability of your energy usage, helping you
                        make the most of your solar investment. </div>
                    <div className="solar-services-list">

                        <ul className="solar-services-items"  data-aos="fade-up">
                            <li className="solar-service-item"  data-aos="fade-up">
                                <span className="service-title"  data-aos="fade-up">1. Advanced Battery Storage Systems:</span> We offer cutting-edge lithium-ion and leadacid battery systems from three leading brands.
                            </li>
                            <li className="solar-service-item"  data-aos="fade-up">
                                <span className="service-title"  data-aos="fade-up">2. Energy Optimization & Management:</span>Our smart energy management systems
                                monitor and optimize energy usage by intelligently distributing stored power when
                                electricity costs are high or grid supply is limited </li>
                            <li className="solar-service-item"  data-aos="fade-up">
                                <span className="service-title"  data-aos="fade-up">3.Grid-Tied and Off-Grid Solutions </span> Whether you are connected to the grid or looking
                                for complete energy independence, we have the right storage solution for you. </li>
                        </ul>
                    </div>

                </div>




            </div>

            <div className='ongrid-offgrid'>
                <div className='onoff-grids' data-aos="fade-up">
                    <img src={Ongrid} alt="On-Grid System" />
                    <p className="onoff-text"  data-aos="fade-up"> On-Grid System</p>
                </div>
                <div className='onoff-grids'  data-aos="fade-up">
                    <img src={Offgrid} alt="Off-Grid System" />
                    <p className="onoff-text"  data-aos="fade-up">Off-Grid System</p>
                </div>
                <div className='onoff-grids'  data-aos="fade-up">
                    <img src={hybrid} alt="Off-Grid System" />
                    <p className="onoff-text"  data-aos="fade-up">Hybrid System</p>
                </div>
            </div>
            <h2 className='solarinstallation-heading'  data-aos="fade-up">3. Consultation And Site Assessments</h2>
            <div className='solarinstallation-section'>

                <div className='solarinstallation-image'  data-aos="fade-up">
                    <img src={Consultation} alt="Solar Installation" />
                </div>
                <div className='solarinstallation-description'  data-aos="fade-up">

                    <div className="solar-services-intro"  data-aos="fade-up">
                        DT Energy provides a comprehensive consultation service that includes a personalized energy assessment to design tailored solar solutions, offering various system configurations and technologies to suit your needs and budget. We provide financial guidance on available financing options, savings, incentives, and rebates, while also offering regulatory advice to navigate local regulations, permits, and necessary documentation. Additionally, we are here to answer any questions you may have about the solar installation process, system performance, or ongoing maintenance. Here's what happens during a typical installation: </div>
                    <div className="solar-services-list">

                        <ul className="solar-services-items"  data-aos="fade-up">
                            <li className="solar-service-item"  data-aos="fade-up">
                                <span className="service-title"  data-aos="fade-up">1. Site Assessment and Consultation:</span> A representative from DT Energy visits the
                                homeowner’s property to assess roof space, orientation, shading, and energy needs.
                                This assessment helps determine the optimal system size and placement
                            </li>
                            <li className="solar-service-item"  data-aos="fade-up">
                                <span className="service-title" data-aos="fade-up">2.Structural Analysis</span></li>
                            <li className="solar-service-item"  data-aos="fade-up">
                                <span className="service-title"  data-aos="fade-up">3.Energy Production Estimates</span> Whether you are connected to the grid or looking
                                for complete energy independence, we have the right storage solution for you. </li>
                            <li className="solar-service-item"  data-aos="fade-up">
                                <span className="service-title"  data-aos="fade-up">4.System design,permits & paper works</span>Before proceeding with installation, DT Energy obtains the
                                necessary permits from local authorities </li>
                            <li className="solar-service-item"  data-aos="fade-up">
                                <span className="service-title"  data-aos="fade-up">5.Installation of Solar Panels & Electrical wiring:</span>Before proceeding with installation, DT Energy obtains the
                                necessary permits from local authorities </li>
                            <li className="solar-service-item"  data-aos="fade-up">
                                <span className="service-title"  data-aos="fade-up">6.System Inspection,Approval & Connecting to the Grid </span></li>
                            <li className="solar-service-item"  data-aos="fade-up">
                                <span className="service-title"  data-aos="fade-up">7.Commissioning and Activation</span></li>




                        </ul>
                    </div>

                </div>




            </div>
            <h2 className='solarinstallation-heading'  data-aos="fade-up">4. Financial Assistance</h2>
            <div className='client-need'  data-aos="fade-up">
                Transitioning to solar energy is an excellent way to save on your energy bills while
                reducing your carbon footprint. However, the upfront cost of installing solar panels can
                be a barrier for many. That’s where DT Energy’s solar financing solutions come in.
                We offer a variety of solar fin
                <div>

                </div>


            </div>


            <div className='solarinstallation-section'>

                <div className='solarinstallation-image' data-aos="fade-up">
                    <img src={Financial} alt="Solar Installation" />
                </div>
                <div className='solarinstallation-description'  data-aos="fade-up">

                    <div className="solar-services-intro"  data-aos="fade-up">
                        We offer a variety of solar financing options tailored to meet your individual needs and
                        budget </div>
                    <div className="solar-services-list">

                        <ul className="solar-services-items" >
                            <li className="solar-service-item"  data-aos="fade-up">
                                <span className="service-title"  data-aos="fade-up">1. Solar Loans:</span> Our solar loans are specifically designed to help homeowners and
businesses finance the installation of solar panels. With competitive interest rates and
flexible repayment terms, our loans make solar energy an affordable option for
everyone.
                            </li>
                           


                        </ul>

                    </div>
                    <div className="solar-services-intro"  data-aos="fade-up">
                    Benefits of Solar Financing with DT Energy </div>
                    <ul className="solar-services-items"  data-aos="fade-up">
                            <li className="solar-service-item"  data-aos="fade-up">
                                <span className="service-title"  data-aos="fade-up">1. Affordability:</span> Our financing solutions make solar energy accessible, enabling you to
                                invest in renewable energy even if you can’t afford the upfront costs
                            </li>
                            <li className="solar-service-item"  data-aos="fade-up">
                                <span className="service-title" data-aos="fade-up">2.Energy Savings:</span>Solar panels can lead to substantial savings on your energy bills. The
amount you save will vary based on the size of your solar system and the sunlight your
location receives.</li>
                           
                         </ul>

                </div>




            </div>
            <div className='client-need'  data-aos="fade-up">
            <span className="highlight"> DT Energy connects with banks</span> to provide financing solutions for customers who want to make the switch to solar energy but may not have the resources to cover upfront costs. Through partnerships with financial institutions, we offer easy access to loans, incentives, and rebates, ensuring that you can invest in a solar system that suits your needs. Our team works closely with banks to guide you through the financing process, making your transition to solar energy as smooth and affordable as possible. <div>

                </div>


            </div>
            <BankPartners/>
            <div id="contact-section">
      <Contact />
    </div>
        </div>
    )
}

export default Solarinstallation