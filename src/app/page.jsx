import "./home.css";

export default function Home() {
  return (
    <div className="page-content hero">
      <video autoplay loop muted>
        <source src="/public/images/ink.mp4" type="video/mp4"></source>
      </video>
      <container className="landing-hook">
        <h2 className="tracking-in-expand-fwd-top">We are Reweb Studio</h2>
        <p className="tracking-in-expand-fwd-bottom" id="grow">Digitizing Your Creativity</p>
      </container>
    </div>
  );
}


  