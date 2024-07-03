"use client";
import React from "react";
import "../../public/css/Problem.css";
import { Link, Element } from "react-scroll";

const Problem = () => {
  return (
    <div id="theProblem" className="h-[100vh] tp-c text-[#2a27e2]">
      <div className="heading">
        <h1>THE NEED</h1>
      </div>
      <div className="main">
        <div className="row-1">
          <div className="col-1">
            <h3>
              Challenge of <span>Visual Impairment</span>
            </h3>
            <p className="mb-4">
              Navigating the world without sight presents significant
              challenges.
            </p>

            <ul className="list-disc">
              <li className="mb-4 pr-10">
                <p>
                  From avoiding obstacles to recognizing important visual cues,
                  visually impaired individuals face daily difficulties that can
                  limit their independence and mobility.
                </p>
              </li>
              <li className="pr-8">
                <p>
                  Traditional aids like canes and guide dogs provide assistance
                  but have limitations in complex or unfamiliar environments.
                </p>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <ul className="list-disc text-xl">
              <li>
                <p>
                  Blind people face challenges navigating unfamiliar spaces,
                  relying on senses like touch and hearing.
                </p>
              </li>
              <br />
              <li>
                <p>
                  Reading text, using computers, and staying informed can be
                  difficult without sight.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="row-2">
          <div className="col-1">
            <p>
              This underscores the need for supportive technologies and systems
              to help blind individuals overcome these obstacles and lead more
              independent, fulfilling lives.
            </p>
          </div>
          <div className="col-2">
            <h3>
              Understanding the <span>Impact</span>
            </h3>
            <p>
              According to the WHO, over 253 million people live with vision
              impairment globally. Of these, 36 million are blind. These
              individuals often struggle with basic tasks that sighted people
              take for granted, such as crossing streets, identifying objects,
              and reading signs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Problem;
