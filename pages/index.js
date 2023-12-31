import React, {useRef} from "react";
import Navbar from "../components/_App/Navbar";
import MainBanner from "../components/HomeOne/MainBanner";
import MainBannerCopy from "../components/HomeOne/MainBannerCopy";
import Facilities from "../components/HomeOne/Facility";
import AboutUs from "../components/HomeOne/AboutUs";
import Services from "../components/HomeOne/Services";
import DoctorsStyleOne from "../components/Common/DoctorsStyleOne";
import OurWorks from "../components/HomeOne/OurWorks";
import FunFactStyleOne from "../components/Common/FunFactStyleOne";
import AppointmentForm from "../components/HomeOne/AppointmentForm";
import EmergencyArea from "../components/HomeOne/EmergencyArea";
import TestimonialStyleOne from "../components/Common/TestimonialStyleOne";
import NewsStyleOne from "../components/Common/NewsStyleOne";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/_App/Footer";

const Index = () => {
  const headerRef = useRef();

  return (
    <>
      <Navbar headerRef={headerRef} />

      <MainBannerCopy headerRef={headerRef} />

      {/* <Facilities /> */}

      <AboutUs />

      {/* <MainBannerCopy /> */}

      <Services />

      {/* <DoctorsStyleOne /> */}

      <OurWorks />

      <NewsStyleOne />

      {/* <FunFactStyleOne /> */}

      {/* <AppointmentForm /> */}
      {/* <TestimonialStyleOne /> */}
      <Footer />
    </>
  );
};

export default Index;
