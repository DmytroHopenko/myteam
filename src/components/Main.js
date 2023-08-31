import React from "react";
import { Link } from "react-router-dom";

export default function Main() {
  const Section1 = () => (
    <section className="hero">
      <Pattern1 />
      <div className="hero_important">
        <h1>
          Find the <br />
          best <span>talent</span>
        </h1>
      </div>
      <div className="hero_text">
        <p>
          Finding the right people and building high performing teams can be
          hard. Most companies aren’t tapping into the abundance of global
          talent. We’re about to change that.
        </p>
      </div>
      <Pattern2 />
    </section>
  );
  const Section2 = () => (
    <section className="building">
      <div className="build_text">
        <h1>Build & manage distributed teams like no one else.</h1>
      </div>
      <div className="build_meta">
        <div className="wrap_meta">
          <div className="wrap_img">
            <Person />
          </div>
          <div className="wrap_text">
            <h4>Experienced Individuals</h4>
            <p>
              Our network is made up of highly experienced professionals who are
              passionate about what they do.
            </p>
          </div>
        </div>
        <div className="wrap_meta">
          <div className="wrap_img">
            <Cog />
          </div>
          <div className="wrap_text">
            <h4>Easy to Implement</h4>
            <p>
              Our processes have been refined over years of implementation
              meaning our teams always deliver.
            </p>
          </div>
        </div>
        <div className="wrap_meta">
          <div className="wrap_img">
            <Chart />
          </div>
          <div className="wrap_text">
            <h4>Enhanced Productivity</h4>
            <p>
              Our customized platform with in-built analytics helps you manage
              your distributed teams.
            </p>
          </div>
        </div>
      </div>
      <Pattern3 />
    </section>
  );
  const Section3 = () => (
    <section className="delivering">
      <Pattern4 />
      <div className="deliver_text">
        <h1>
          Delivering real results for top
          <br />
          companies. Some of our <span>success stories.</span>
        </h1>
      </div>
      <div className="deliver_comments">
        <div className="comments">
          <Quotes />
          <p>
            “The team perfectly fit the specialized skill set required. They
            focused on the most essential features helping us launch the
            platform eight months faster than planned.”
          </p>
          <h4>Kady Baker</h4>
          <span>Product Manager at Bookmark</span>
          <img
            src="/myteam/img/avatar-kady.jpg"
            alt="human"
            width="62"
            height="62"
          ></img>
        </div>
        <div className="comments">
          <Quotes />
          <p>
            “We needed to automate our entire onboarding process. The team came
            in and built out the whole journey. Since going live, user retention
            has gone through the roof!”
          </p>
          <h4>Aiysha Reese</h4>
          <span>Founder of Manage</span>
          <img
            src="/myteam/img/avatar-aiysha.jpg"
            alt="human"
            width="62"
            height="62"
          ></img>
        </div>
        <div className="comments">
          <Quotes />
          <p>
            “Amazing. Our team helped us build an app that delivered a new
            experience for hiring a physio. The launch was an instant success
            with 100k downloads in the first month.”
          </p>
          <h4>Arthur Clarke</h4>
          <span>Co-founder of MyPhysio</span>
          <img
            src="/myteam/img/avatar-arthur.jpg"
            alt="human"
            width="62"
            height="62"
          ></img>
        </div>
      </div>
      <Pattern5 />
    </section>
  );
  const Section4 = () => (
    <section className="ready">
      <Pattern6 />
      <h1>Ready to get started?</h1>
      <Link to="/contact">contact us</Link>
    </section>
  );
  const Pattern1 = () => (
    <svg
      className="pattern1"
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
    >
      <g fill="none" fill-rule="evenodd">
        <path fill="#79C8C7" d="M100 200h100V100H100z" />
        <path
          fill="#012F34"
          d="M100 0C44.772 0 0 44.772 0 100s44.772 100 100 100 100-44.772 100-100S155.228 0 100 0zm0 67c18.225 0 33 14.775 33 33s-14.775 33-33 33-33-14.775-33-33 14.775-33 33-33z"
        />
        <path
          fill="#F67E7E"
          d="M196 196v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm49-8v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm49-8v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm35-8v4h4v-4h-4zm-14 0v4h4v-4h-4zm7 0v4h4v-4h-4zm-21 0v4h4v-4h-4zm7 0v4h4v-4h-4zm35 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-42 0v4h4v-4h-4zm49-8v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm49-8v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4z"
        />
      </g>
    </svg>
  );
  const Pattern2 = () => (
    <svg
      className="pattern2"
      xmlns="http://www.w3.org/2000/svg"
      width="358"
      height="100"
    >
      <g fill="none" fill-rule="evenodd">
        <circle cx="100" cy="100" r="100" fill="#2C6269" />
        <path
          fill="#012F34"
          d="M258 0c55.228 0 100 44.772 100 100s-44.772 100-100 100-100-44.772-100-100S202.772 0 258 0zm0 67c-18.225 0-33 14.775-33 33s14.775 33 33 33 33-14.775 33-33-14.775-33-33-33z"
        />
        <path fill="#79C8C7" d="M358 43h-43V0h43z" />
        <path
          fill="#F67E7E"
          d="M233.514 0c55.228 0 100 44.772 100 100s-44.772 100-100 100c-55.229 0-100-44.772-100-100s44.771-100 100-100zm0 67c-18.226 0-33 14.775-33 33s14.774 33 33 33c18.225 0 33-14.775 33-33s-14.775-33-33-33z"
        />
        <path
          fill="#79C8C7"
          d="M100 40v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0V8h100zm0-8v4H0V0h100z"
        />
      </g>
    </svg>
  );
  const Pattern3 = () => (
    <svg
      className="pattern3"
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="244"
    >
      <g fill="none" fill-rule="evenodd">
        <path fill="#2C6269" d="M100 144H0V44h100z" />
        <path
          fill="#014E56"
          d="M100 44c55.228 0 100 44.772 100 100s-44.772 100-100 100S0 199.228 0 144 44.772 44 100 44zm0 67c-18.225 0-33 14.775-33 33s14.775 33 33 33 33-14.775 33-33-14.775-33-33-33z"
        />
        <path
          fill="#79C8C7"
          d="M100 184v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zM4 40v4H0v-4h4zm7 0v4H7v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zM4 32v4H0v-4h4zm7 0v4H7v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zM4 24v4H0v-4h4zm7 0v4H7v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm-35-8v4h-4v-4h4zm14 0v4h-4v-4h4zm-7 0v4h-4v-4h4zm21 0v4h-4v-4h4zm-7 0v4h-4v-4h4zM4 16v4H0v-4h4zm7 0v4H7v-4h4zm42 0v4h-4v-4h4zM4 8v4H0V8h4zm7 0v4H7V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zM4 0v4H0V0h4zm7 0v4H7V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4z"
        />
      </g>
    </svg>
  );
  const Pattern4 = () => (
    <svg
      className="pattern4"
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
  const Pattern5 = () => (
    <svg
      className="pattern5"
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="100"
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
  const Person = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="72">
      <g fill="none" fill-rule="evenodd" transform="translate(-7)">
        <circle cx="44" cy="44" r="28" fill="#2C6269" />
        <path
          fill="#79C8C7"
          fill-rule="nonzero"
          d="M28.496 0c5.66 0 10.267 4.606 10.267 10.267v4.666a3.737 3.737 0 013.733 3.734 3.737 3.737 0 01-3.733 3.733h-.213a11.184 11.184 0 01-5.387 8.7v1.566h2.949a4.523 4.523 0 014.512 4.306l.005.212c0 .07 0 .14-.003.21l.122.007c4.216.561 7.348 4.142 7.348 8.332V56h-1.867V45.733a6.553 6.553 0 00-5.668-6.475l-.405-.025a4.573 4.573 0 01-.28.484l-4.847 7.233V56h-1.867l.001-13.044a9.388 9.388 0 01-5.6 1.844 9.39 9.39 0 01-5.6-1.843V56h-1.867v-9.05l-4.845-7.23a4.573 4.573 0 01-.282-.487l-.467.03c-3.17.426-5.606 3.21-5.606 6.47V56H7.029V45.733c0-4.19 3.132-7.77 7.288-8.326l.182-.013-.004-.22a4.52 4.52 0 014.305-4.502l.212-.005 2.95-.001v-1.534a10.995 10.995 0 01-5.187-7.266l-.055-.289a10.974 10.974 0 01-.13-.987l-.015-.19h-.212a3.738 3.738 0 01-3.729-3.535l-.005-.198a3.737 3.737 0 013.734-3.734l-.001-4.364A6.543 6.543 0 0112.633 4.9l-.004-.234c0-.516.418-.934.934-.934h.5a3.706 3.706 0 01-.5-1.866V.933c0-.515.418-.933.933-.933zM18.229 46.667c.515 0 .934.417.934.933v5.6a.933.933 0 11-1.867 0v-5.6c0-.516.418-.933.933-.933zm18.667 0c.516 0 .933.417.933.933v5.6a.932.932 0 11-1.867 0v-5.6c0-.516.418-.933.934-.933zm-.784-12.134h-2.95v1.139a.935.935 0 00.666.908l.11.025h.158c.516 0 .933.418.933.934v6.057l3.294-4.915c.256-.385.405-.827.434-1.289l.006-.199c0-1.47-1.19-2.66-2.651-2.66zm-14.15 0h-2.949a2.653 2.653 0 00-2.65 2.65 2.638 2.638 0 00.441 1.5l3.291 4.912v-6.056c0-.48.361-.873.825-.927l.11-.007h.158a.933.933 0 00.774-.926v-1.146zM31.296 32c-.572.213-1.168.38-1.783.5a10.97 10.97 0 01-5.684-.486v3.658a2.797 2.797 0 01-1.867 2.654v2.123a7.53 7.53 0 005.6 2.484c2.147 0 4.17-.901 5.6-2.485v-2.123a2.798 2.798 0 01-1.866-2.661zm1.933-20.8H21.895c-.413 2.84-2.638 4.552-3.666 5.203V19.6l.221 2.84c.023.267.06.54.107.81.883 4.971 5.646 8.297 10.616 7.415a9.328 9.328 0 007.529-8.593l.197-2.545v-3.122c-1.027-.65-3.255-2.363-3.67-5.205zm-3.526 11.473l1.32 1.32a7.27 7.27 0 01-5.168 2.14h-.16v-1.866h.16a5.414 5.414 0 003.848-1.594zm-3.008-6.22l1.734.694-1.355 3.386h1.422V22.4h-2.8a.935.935 0 01-.867-1.28l1.866-4.666zm12.068.347v2.8l-.072.933h.072c.98 0 1.786-.759 1.86-1.72l.006-.146c0-1.03-.837-1.867-1.866-1.867zm-22.399 0a1.869 1.869 0 00-1.868 1.867c0 1.03.837 1.866 1.867 1.866h.068l-.066-.861V16.8zm5.598-.933a1.867 1.867 0 110 3.733 1.867 1.867 0 010-3.733zm11.2 0a1.867 1.867 0 110 3.733 1.867 1.867 0 010-3.733zm3.733-4.668l-1.766.002c.272 1.256 1.054 2.215 1.768 2.86l-.002-2.862zm-18.666-.066v2.926c.714-.644 1.495-1.603 1.767-2.858l-.833-.001c-.317 0-.629-.023-.934-.067zm10.267-9.266H15.429c0 1.03.837 1.866 1.867 1.866a.934.934 0 010 1.867H14.59a4.675 4.675 0 004.573 3.733h17.68c-.465-4.194-4.03-7.466-8.347-7.466z"
        />
        <path d="M0 0h56v56H0z" />
      </g>
    </svg>
  );
  const Cog = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72">
      <g fill="none" fill-rule="evenodd">
        <circle cx="44" cy="44" r="28" fill="#2C6269" />
        <path
          fill="#79C8C7"
          fill-rule="nonzero"
          d="M31.719 0a2.19 2.19 0 012.187 2.188v3.23a23.117 23.117 0 015.886 2.436l2.284-2.283a2.19 2.19 0 013.093 0l5.26 5.26a2.19 2.19 0 010 3.093l-2.283 2.284a23.117 23.117 0 012.436 5.886h3.23A2.19 2.19 0 0156 24.28v7.438a2.19 2.19 0 01-2.188 2.187h-3.237a23.122 23.122 0 01-2.44 5.877l2.293 2.293a2.19 2.19 0 010 3.093l-5.259 5.26a2.19 2.19 0 01-3.093 0l-2.301-2.301a23.12 23.12 0 01-5.869 2.426v3.258A2.19 2.19 0 0131.72 56H24.28a2.19 2.19 0 01-2.187-2.188v-3.265a23.107 23.107 0 01-5.859-2.43l-2.31 2.312a2.19 2.19 0 01-3.094 0l-5.26-5.26a2.19 2.19 0 010-3.093l2.311-2.311a23.107 23.107 0 01-2.43-5.859H2.189A2.19 2.19 0 010 31.72V24.28a2.19 2.19 0 012.188-2.187h3.258a23.106 23.106 0 012.426-5.869l-2.3-2.301a2.19 2.19 0 010-3.093l5.259-5.26a2.19 2.19 0 013.093 0l2.293 2.294a23.106 23.106 0 015.877-2.44V2.188A2.19 2.19 0 0124.28 0h7.438zm0 2.188H24.28v4.098c0 .513-.356.957-.857 1.068a20.954 20.954 0 00-6.78 2.815c-.433.277-1 .216-1.363-.148l-2.904-2.903-5.259 5.26 2.91 2.91c.363.362.425.928.149 1.36a20.959 20.959 0 00-2.801 6.774c-.11.502-.555.86-1.068.86h-4.12v7.437h4.126c.513 0 .957.357 1.068.857a20.948 20.948 0 002.805 6.764c.276.433.215 1-.148 1.362l-2.92 2.92 5.258 5.26 2.92-2.92a1.094 1.094 0 011.363-.15 20.943 20.943 0 006.764 2.806c.5.111.857.555.857 1.068v4.127h7.438v-4.12c0-.514.357-.959.859-1.069 2.41-.53 4.69-1.473 6.774-2.801a1.094 1.094 0 011.361.15l2.91 2.909 5.259-5.26-2.903-2.902a1.094 1.094 0 01-.148-1.363 20.957 20.957 0 002.815-6.78c.11-.502.555-.858 1.068-.858h4.099V24.28H49.72c-.514 0-.958-.357-1.068-.859a20.944 20.944 0 00-2.811-6.79 1.094 1.094 0 01.148-1.362l2.893-2.893-5.26-5.259-2.892 2.893c-.363.363-.929.424-1.362.148a20.954 20.954 0 00-6.79-2.81 1.093 1.093 0 01-.86-1.069V2.187zm4.087 11.877a1.094 1.094 0 11-1.07 1.908c-5.356-3.004-12.133-2.065-16.48 2.282-5.374 5.373-5.374 14.117 0 19.49A13.742 13.742 0 0028 41.775c3.53 0 7.058-1.343 9.745-4.03a13.765 13.765 0 002.588-15.903 1.094 1.094 0 111.957-.978 15.95 15.95 0 01-2.998 18.428A15.92 15.92 0 0128 43.962a15.92 15.92 0 01-11.292-4.67c-6.226-6.227-6.226-16.357 0-22.584a15.822 15.822 0 019.209-4.54 16.079 16.079 0 019.889 1.897zm-2.495 6.198l3.923 3.923c.427.427.427 1.12 0 1.547L27.23 35.737a1.095 1.095 0 01-1.547 0l-6.917-6.917a1.093 1.093 0 010-1.547l3.923-3.923a1.093 1.093 0 011.547 0l2.22 2.22 5.308-5.307a1.093 1.093 0 011.547 0zm-.774 2.32l-5.307 5.308a1.095 1.095 0 01-1.547 0l-2.22-2.22-2.377 2.376 5.37 5.37 8.458-8.457-2.377-2.377zm6.22-5.957c.288 0 .57.117.774.32.203.204.32.486.32.774a1.1 1.1 0 01-.32.773 1.1 1.1 0 01-.774.32 1.1 1.1 0 01-.774-.32 1.099 1.099 0 010-1.546c.203-.204.485-.32.774-.32z"
        />
      </g>
    </svg>
  );
  const Chart = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72">
      <g fill="none" fill-rule="evenodd">
        <circle cx="44" cy="44" r="28" fill="#2C6269" />
        <path
          fill="#79C8C7"
          fill-rule="nonzero"
          d="M52.5 18.667c.644 0 1.167.522 1.167 1.166l-.001 33.833h1.167c.601 0 1.097.456 1.16 1.04l.007.127c0 .644-.523 1.167-1.167 1.167l-2.315-.001L52.5 56h-7.018l-6.964-.001L38.5 56h-7.018l-6.964-.001L24.5 56H1.167a1.167 1.167 0 010-2.333l1.166-.001V40.833c0-.6.456-1.096 1.04-1.16l.127-.006h7c.644 0 1.167.522 1.167 1.166l-.001 12.833h4.667v-24.5c0-.6.456-1.096 1.04-1.16L17.5 28h7c.644 0 1.167.523 1.167 1.167l-.001 24.499h4.667V33.833c0-.6.456-1.096 1.04-1.16l.127-.006h7c.644 0 1.167.522 1.167 1.166l-.001 19.833h4.667V19.833c0-.6.456-1.096 1.04-1.16l.127-.006zM9.333 42H4.667v11.667h4.666V42zm14-11.667h-4.666v23.334h4.666V30.333zm14 4.667h-4.666v18.667h4.666V35zm14-14h-4.666v32.667h4.666V21zM49 0a4.671 4.671 0 014.667 4.667A4.671 4.671 0 0149 9.333a4.64 4.64 0 01-2.37-.647l-7.61 7.612a4.64 4.64 0 01.647 2.369A4.671 4.671 0 0135 23.333a4.671 4.671 0 01-4.603-5.44l-5.372-1.532A4.669 4.669 0 0121 18.667a4.643 4.643 0 01-2.802-.937l-7.117 5.674c.373.67.586 1.442.586 2.263A4.671 4.671 0 017 30.333a4.671 4.671 0 01-4.667-4.666A4.671 4.671 0 017 21c.905 0 1.75.259 2.466.706l7.274-5.8A4.671 4.671 0 0121 9.333a4.671 4.671 0 014.665 4.781l5.7 1.627a4.66 4.66 0 016.005-1.095l7.61-7.611a4.64 4.64 0 01-.647-2.37A4.671 4.671 0 0149 0zM7 23.333a2.336 2.336 0 00-2.333 2.334A2.336 2.336 0 007 28a2.336 2.336 0 002.333-2.333c0-.634-.254-1.21-.666-1.632a.99.99 0 01-.106-.114l.074.082A2.325 2.325 0 007 23.333zm28-7a2.336 2.336 0 00-2.333 2.334A2.336 2.336 0 0035 21a2.336 2.336 0 002.333-2.333A2.336 2.336 0 0035 16.333zm-14-4.666A2.336 2.336 0 0018.667 14c0 .535.18 1.028.485 1.423l.028.03.015.02a2.317 2.317 0 001.805.86A2.336 2.336 0 0023.333 14 2.336 2.336 0 0021 11.667zm28-9.334a2.336 2.336 0 00-2.333 2.334c0 .631.252 1.205.661 1.626l.025.021.021.022c.42.411.993.664 1.626.664a2.336 2.336 0 002.333-2.333A2.336 2.336 0 0049 2.333z"
        />
      </g>
    </svg>
  );
  const Quotes = () => (
    <svg
      className="quotes"
      xmlns="http://www.w3.org/2000/svg"
      width="67"
      height="56"
    >
      <path
        fill="#2C6269"
        d="M51.273 56c4.638 0 8.368-1.322 11.19-3.967 2.823-2.645 4.235-5.799 4.235-9.46 0-2.95-.429-5.494-1.286-7.63a197.251 197.251 0 01-2.495-6.562c-.806-2.237-1.21-4.933-1.21-8.087 0-2.746.454-5.798 1.361-9.155C63.976 7.782 65.286 4.069 67 0H55.356c-3.73 3.662-7.032 7.833-9.905 12.512-2.873 4.68-5.166 9.359-6.88 14.038C36.857 31.23 36 35.4 36 39.063c0 5.391 1.361 9.562 4.083 12.512C42.805 54.525 46.535 56 51.273 56zm-36 0c4.638 0 8.368-1.322 11.19-3.967 2.823-2.645 4.235-5.799 4.235-9.46 0-2.95-.429-5.494-1.286-7.63a197.251 197.251 0 01-2.495-6.562c-.806-2.237-1.21-4.933-1.21-8.087 0-2.746.454-5.798 1.361-9.155C27.976 7.782 29.286 4.069 31 0H19.356c-3.73 3.662-7.032 7.833-9.905 12.512-2.873 4.68-5.166 9.359-6.88 14.038C.857 31.23 0 35.4 0 39.063c0 5.391 1.361 9.562 4.083 12.512C6.805 54.525 10.535 56 15.273 56z"
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
