'use client';
import Image from 'next/image';
import './stylesheets/global.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { useEffect, useState } from 'react';
import EmailForm from './components/EmailForm';
import Modal from './components/modal';
import Swipercomponent from './components/body-parts/skills';
import Button from './components/forms/butttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <main className="container">
        <Navbar isActive={isActive} setIsActive={setIsActive}></Navbar>
        <div className={isActive ? 'prfl__main show' : 'prfl__main'}>
          <div className="introduction">
            <h1 className='introduction_name'>Abderrahman Ait Taleb <span className=''>Junior Full Stack Developer</span></h1>
          </div>
          <Modal isOpen={isModalOpen} closeModal={closeModal}>
            <EmailForm></EmailForm>
          </Modal>
          <div id="skills">
            <Swipercomponent></Swipercomponent>
          </div>
          <Footer>
            <div className="footer-top">
              <div className="contact">
                <span className="email">drs001abdoait@gmail.com</span>
                <span className="phone">0666239318</span>
                <div className="socialMedia">
                  <span className="icon fb"><FontAwesomeIcon icon={faFacebook} /></span>
                  <span className="icon inst"><FontAwesomeIcon className='inst' icon={faInstagram} /></span>
                  <span className="icon twitter"><FontAwesomeIcon icon={faXTwitter} /></span>
                </div>
              </div>
              <Button isPrimary={false} onClick={openModal}>Open Modal</Button>
            </div>
          </Footer>
        </div>
      </main>
    </>
  )
}
