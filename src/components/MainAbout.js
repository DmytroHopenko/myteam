import React from "react";
import { Link } from "react-router-dom";

export default function MainAbout() {
  const Section1 = () => (
    <section className="about_wrap">
      <Pattern1 />
      <div className="about_big">
        <h1>About</h1>
      </div>
      <div className="about_text">
        <p>
          We help companies build dynamic teams made up of top global talent.
          Using our network of passionate professionals we drive innovation and
          deliver incredible outcomes. Talented, diverse teams shape the best
          products and experiences. We’ll bring those teams to you.
        </p>
      </div>
    </section>
  );
  const Section2 = () => (
    <section className="directors_wrap">
      <Pattern2 />
      <div className="directors_text">
        <h1>Meet the directors</h1>
      </div>
      <Directors />
      <Pattern3 />
    </section>
  );
  const Section3 = () => (
    <section className="clients_wrap">
      <Pattern4 />
      <div className="client_big">
        <h1>Some of our clients</h1>
      </div>
      <div className="clients">
        <img src="./img/logo-the-verge.png" alt="" width="165" height="28"/>
        <img src="./img/logo-jakarta-post.png" alt="" width="184" height="23"/>
        <img src="./img/logo-the-guardian.png" alt="" width="180" height="28"/>
        <img src="./img/logo-tech-radar.png" alt="" width="165" height="28"/>
        <img src="./img/logo-gadgets-now.png" alt="" width="98" height="45"/>
      </div>
    </section>
  );
  const Section4 = () => (
    <section className="ready">
      <Pattern6 />
      <h1>Ready to get started?</h1>
      <Link to="/contact">contact us</Link>
    </section>
  );
  const Directors = () => (
    <div className="directors_blocks">
      <div className="directors_human_wrap">
        <div className="front_wrap">
          <img src="./img/avatar-nikita.jpg" alt="" height="96" width="96" />
          <h4>Nikita Marks</h4>
          <span>Founder & CEO</span>
        </div>
        <div className="back_wrap">
          <h4>Nikita Marks</h4>
          <p>
            “It always amazes me how much talent there is in every corner of the
            globe.”
          </p>
          <div className="svg_wrap">
            <Twitter />
            <LinkedIn />
          </div>
        </div>
        <div className="directors_button">
          <Cross />
        </div>
      </div>
      <div className="directors_human_wrap">
        <div className="front_wrap">
          <img src="./img/avatar-christian.jpg" alt="" height="96" width="96" />
          <h4>Cristian Duncan</h4>
          <span>Co-founder & COO</span>
        </div>
        <div className="back_wrap">
          <h4>Cristian Duncan</h4>
          <p>
            “Distributed teams required unique processes. You need to approach
            work in a new way.”
          </p>
          <div className="svg_wrap">
            <Twitter />
            <LinkedIn />
          </div>
        </div>
        <div className="directors_button">
          <Cross />
        </div>
      </div>
      <div className="directors_human_wrap">
        <div className="front_wrap">
          <img src="./img/avatar-cruz.jpg" alt="" height="96" width="96" />
          <h4>Cruz Hamer</h4>
          <span>Co-founder & CTO</span>
        </div>
        <div className="back_wrap">
          <h4>Cruz Hamer</h4>
          <p>
            “Technology is at the forefront of enabling distributed teams.
            That's where we come in.”
          </p>
          <div className="svg_wrap">
            <Twitter />
            <LinkedIn />
          </div>
        </div>
        <div className="directors_button">
          <Cross />
        </div>
      </div>
      <div className="directors_human_wrap">
        <div className="front_wrap">
          <img src="./img/avatar-drake.jpg" alt="" height="96" width="96" />
          <h4>Drake Heaton</h4>
          <span>Business Development Lead</span>
        </div>
        <div className="back_wrap">
          <h4>Drake Heaton</h4>
          <p>
            “Hiring similar people from similar backgrounds is a surefire way to
            stunt innovation.”
          </p>
          <div className="svg_wrap">
            <Twitter />
            <LinkedIn />
          </div>
        </div>
        <div className="directors_button">
          <Cross />
        </div>
      </div>
      <div className="directors_human_wrap">
        <div className="front_wrap">
          <img src="./img/avatar-griffin.jpg" alt="" height="96" width="96" />
          <h4>Griffin Wise</h4>
          <span>Lead Marketing</span>
        </div>
        <div className="back_wrap">
          <h4>Griffin Wise</h4>
          <p>
            “Unique perspectives shape unique products, which is what you need
            to survive these days.”
          </p>
          <div className="svg_wrap">
            <Twitter />
            <LinkedIn />
          </div>
        </div>
        <div className="directors_button">
          <Cross />
        </div>
      </div>
      <div className="directors_human_wrap">
        <div className="front_wrap">
          <img src="./img/avatar-aden.jpg" alt="" height="96" width="96" />
          <h4>Aden Allan</h4>
          <span>Head of Talent</span>
        </div>
        <div className="back_wrap">
          <h4>Aden Allan</h4>
          <p>
            “Empowered teams create truly amazing products. Set the north star
            and let them follow it.”
          </p>
          <div className="svg_wrap">
            <Twitter />
            <LinkedIn />
          </div>
        </div>
        <div className="directors_button">
          <Cross />
        </div>
      </div>
    </div>
  );
  const Pattern1 = () => (
    <svg
      className="pattern_about"
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
    >
      <g fill="none" fill-rule="evenodd">
        <path fill="#2C6269" d="M100 100H0V0h100z" />
        <path
          fill="#F67E7E"
          d="M100 0c55.228 0 100 44.772 100 100s-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0zm0 67c-18.225 0-33 14.775-33 33s14.775 33 33 33 33-14.775 33-33-14.775-33-33-33z"
        />
        <path
          fill="#79C8C7"
          d="M100 40v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0V8h100zm0-8v4H0V0h100z"
        />
      </g>
    </svg>
  );
  const Pattern2 = () => (
    <svg
      className="pattern2"
      xmlns="http://www.w3.org/2000/svg"
      width="147"
      height="100"
    >
      <g fill="none" fill-rule="evenodd">
        <path fill="#002529" d="M0 100h100V0H0z" />
        <path
          fill="#79C8C7"
          d="M47 96v4h100v-4H47zm0-8v4h100v-4H47zm0-8v4h100v-4H47zm0-8v4h100v-4H47zm0-8v4h100v-4H47zm0-8v4h100v-4H47z"
        />
      </g>
    </svg>
  );
  const Pattern3 = () => (
    <svg
      className="pattern3"
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
    >
      <g fill="none" fill-rule="evenodd">
        <path fill="#2C6269" d="M100 100h100V0H100z" />
        <path
          fill="#012F34"
          d="M100 0C44.772 0 0 44.772 0 100s44.772 100 100 100 100-44.772 100-100S155.228 0 100 0zm0 67c18.225 0 33 14.775 33 33s-14.775 33-33 33-33-14.775-33-33 14.775-33 33-33z"
        />
        <path
          fill="#79C8C7"
          d="M100 96v4h100v-4H100zm0-8v4h100v-4H100zm0-8v4h100v-4H100zm0-8v4h100v-4H100zm0-8v4h100v-4H100zm0-8v4h100v-4H100z"
        />
        <path
          fill="#F67E7E"
          d="M196 140v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm49-8v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm49-8v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm35-8v4h4v-4h-4zm-14 0v4h4v-4h-4zm7 0v4h4v-4h-4zm-21 0v4h4v-4h-4zm7 0v4h4v-4h-4zm35 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-42 0v4h4v-4h-4zm49-8v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm49-8v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4z"
        />
      </g>
    </svg>
  );
  const Pattern4 = () => (
    <svg className="pattern4" xmlns="http://www.w3.org/2000/svg" width="200" height="200">
      <g fill="none" fill-rule="evenodd">
        <path fill="#2C6269" d="M100 100H0V0h100z" />
        <path
          fill="#014E56"
          d="M100 0c55.228 0 100 44.772 100 100s-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0zm0 67c-18.225 0-33 14.775-33 33s14.775 33 33 33 33-14.775 33-33-14.775-33-33-33z"
        />
        <path
          fill="#79C8C7"
          d="M100 140v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zM4 40v4H0v-4h4zm7 0v4H7v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zM4 32v4H0v-4h4zm7 0v4H7v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zM4 24v4H0v-4h4zm7 0v4H7v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm-35-8v4h-4v-4h4zm14 0v4h-4v-4h4zm-7 0v4h-4v-4h4zm21 0v4h-4v-4h4zm-7 0v4h-4v-4h4zM4 16v4H0v-4h4zm7 0v4H7v-4h4zm42 0v4h-4v-4h4zM4 8v4H0V8h4zm7 0v4H7V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zM4 0v4H0V0h4zm7 0v4H7V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4z"
        />
      </g>
    </svg>
  );
  const Pattern6 = () => (
    <svg
      className="pattern6"
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="144"
    >
      <g fill="none" fill-rule="evenodd">
        <path fill="#2C6269" d="M100 144H0V44h100z" />
        <path
          fill="#004047"
          d="M100 44c55.228 0 100 44.772 100 100s-44.772 100-100 100S0 199.228 0 144 44.772 44 100 44zm0 67c-18.225 0-33 14.775-33 33s14.775 33 33 33 33-14.775 33-33-14.775-33-33-33z"
        />
        <path
          fill="#F67E7E"
          d="M100 140v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100z"
        />
        <path
          fill="#79C8C7"
          d="M4 40v4H0v-4h4zm7 0v4H7v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zM4 32v4H0v-4h4zm7 0v4H7v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zM4 24v4H0v-4h4zm7 0v4H7v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm-35-8v4h-4v-4h4zm14 0v4h-4v-4h4zm-7 0v4h-4v-4h4zm21 0v4h-4v-4h4zm-7 0v4h-4v-4h4zM4 16v4H0v-4h4zm7 0v4H7v-4h4zm42 0v4h-4v-4h4zM4 8v4H0V8h4zm7 0v4H7V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zM4 0v4H0V0h4zm7 0v4H7V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4z"
        />
      </g>
    </svg>
  );
  const Cross = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M10 0v5.999L16 6v4h-6v6H6v-6H0V6h6V0h4z"
      />
    </svg>
  );
  const Twitter = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20">
      <path
        fill="#FFF"
        d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
      />
    </svg>
  );
  const LinkedIn = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
      <path
        fill="#FFF"
        d="M18 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM6 17H3V8h3v9zM4.5 6.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM17 17h-3v-5.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V17H8V8h3v1.2c.5-.8 1.6-1.4 2.5-1.4 1.9 0 3.5 1.6 3.5 3.5V17z"
      />
    </svg>
  );
  return (
    <main>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </main>
  );
}
