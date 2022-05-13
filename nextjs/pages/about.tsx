import React from "react";
import Link from "next/link";

function About() {
  return (
    <>
      <Link href="/">
        <a>Home test docker pull image</a>
      </Link>
      <h1>About test 123</h1>
      <img src="/static/about.jpg" />
    </>
  );
}

export default About;
