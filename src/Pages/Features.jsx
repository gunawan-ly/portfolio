import { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Features = () => {
  const [text, setText] = useState("Click Me");
  const fitSect = () => {
    return (
      <div>
        <h3>Belajar Props dan State</h3>
        <p><i>"Silahkan klik tombol dibawah ini untuk melihat hasil dari props dan state!"</i></p>
      </div>
    );
  };

  const clicked = () => {
    setText("Success Clicked");
  };

  return (
    <>
      <Navbar />
      <div className="container d-flex flex-column align-items-center justify-content-center text-center">
        <h1 className="display-4">{() => text()}</h1>
        {fitSect()}
        <button
          className="btn btn-outline-primary text-dark"
          onClick={() => clicked()}
          type="button"
        >
          {text}
        </button>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Features;
