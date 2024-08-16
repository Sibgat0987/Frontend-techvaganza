import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import EventsSection from "./Components/Events";
import Intro from "./Components/Intro";
import About from "./Components/About";
import MediaSidebar from "./Components/stickyScroll";

import Highlights from "./Components/EventsLineup";


export default function Home() {
  return (
    <>
      {/*<div className="background-image bg-1"></div>
     {/* <div className="background-image bg-1"></div>
{/*       <div className="background-image bg-1"></div>

      {/* <div className="background-image bg-1"></div>
      <div className="background-image bg-2"></div>
      <div className="background-image bg-3"></div> }

      <div className="glass-layer"></div>
      <div className="glass-layer"></div>*/}

      <div className="content">

        <div className="py-10">
         
          <Intro />
          <About />
          
        
          <EventsSection />
          <Highlights />
          <MediaSidebar />
         
        </div>
        <Footer />
      </div>
    </>
  );
}
