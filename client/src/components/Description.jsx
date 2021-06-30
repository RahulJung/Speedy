import React from "react";
import WebReport from "./WebReport.jsx";

function Description() {
  return (
    <div className="intro">
      <h2>Free Website Speed Grader</h2>
      <h4>by Ferocious Media</h4>
      <div className="introContent">
        <p>
          This Free Website Speed Test will grade your website on a scale of an
          ‘A’ (Very Fast) to an ‘F’ (Needs help). Along with the grade, comes
          the steps you’ll need to take to improve your website speed issues.
        </p>
        <p>
          Did you know, that a one second delay in mobile load times can reduce
          your conversions by 20%?
        </p>
        <p>
          In fact, site and page speed are critical measures of the quality of a
          user's experience and tie directly to how engaged a user is and how
          likely they are to convert from a prospective customer into a
          promising lead.
        </p>
      </div>
      <WebReport />
    </div>
  );
}

export default Description;
