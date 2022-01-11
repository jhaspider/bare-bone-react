import React from "react";
import ReactDOM from "react-dom";

const Section = (props) => {
  const { label } = props;
  return (
    <>
      <h3 className="mb-5">{label}</h3>
      {props.children}
    </>
  );
};

const Link = ({ label, icon, url }) => {
  const onMouseOver = (e) => (e.currentTarget.style.backgroundColor = "#6366f1");
  const onMouseOut = (e) => (e.currentTarget.style.backgroundColor = "#ebeef1");
  const onClick = (e) => window.open(url);

  return (
    <div className="link" onClick={onClick} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      <div
        className="icon"
        style={{
          WebkitMaskImage: `url(/icons/${icon})`,
        }}></div>
      <p>{label}</p>
    </div>
  );
};

const App = () => (
  <div className="flex flex-col justify-center items-center">
    <div className="w-full md:w-[650px] px-5 mx:p-0">
      <div className="flex flex-col">
        <div className="flex flex-col justify-center items-center mt-12">
          <div className="border rounded-full w-28 h-28 bg-indigo-500 overflow-hidden">
            <img src="/icons/profile.jpg" />
          </div>
          <h1>Amarjit</h1>
          <h2>An amazing bio coming soon under 80 letters</h2>
        </div>
        <div className="flex flex-col justify-center items-center mt-12">
          <Section label="Persuing Life Goals">
            <Link label="LinkedIn" icon="linkedin.svg" url="https://www.linkedin.com/in/amarjit-jha/" />
            <Link label="Medium" icon="medium.svg" url="https://jha-amarjit.medium.com" />
            <Link label="Git" icon="github.svg" url="https://github.com/jhaspider" />
            <Link label="Instagram" icon="instagram.svg" url="https://www.instagram.com/amarjit.jha.35/" />
          </Section>
        </div>
        <div className="flex flex-row justify-center items-center mt-5 mb-32 gap-2">
          <a href="https://music.apple.com/in/playlist/hindi-pop/pl.u-yZyVW5VCqWg6oR" target="_blank">
            <img src="/icons/music.svg" />
          </a>
          <a href="mailto:jha.amarjit@gmail.com">
            <img src="/icons/email.svg" />
          </a>
        </div>
      </div>
    </div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("root"));
