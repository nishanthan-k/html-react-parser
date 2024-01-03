import parse from "html-react-parser";
import React from "react";
import "./HtmlParser.scss";
import resumeData from "./assets/resume.json";

function HtmlParser() {
  let imgData = [];
  const dynamicConvertion = (node, index) => {
    if (node.attribs && node.attribs.id === "profile-info") {
      return (
        <p className="student-name" key={index}>
          {node.children[0].children[0].data}
        </p>
      );
    } else if (node.attribs && node.attribs.id === "social-links") {
      return (
        <div className="links">
          <a className="link" href={node.children[0].attribs.href} key={index}>
            {node.children[0].children[0].data}
          </a>
          <a className="link" href={node.children[0].attribs.href} key={index}>
            {node.children[1].children[0].data}
          </a>
        </div>
      );
    } else if (node.attribs && node.attribs.id === "profile-img") {
      // console.log(node);
      imgData.push(node.children[0], node.children[1]);
      return (
        // <div className="profile-img-container">
        //   <img
        //     className="profile-img-1"
        //     src={node.children[0].attribs.src}
        //     alt={node.children[0].attribs.alt}
        //     // src={src[0]}
        //     // alt={node.children[0].attribs.alt}
        //     width={100}
        //   />
        //   <img
        //     className="profile-img-2"
        //     src={node.children[1].attribs.src}
        //     alt={node.children[1].attribs.alt}
        //     // src={src[1]}
        //     // alt={node.children[1].attribs.alt}
        //     width={100}
        //   />
        // </div>

        <div className="imgData">
          <img
            className="imgData-1"
            src={imgData[0].attribs.src}
            alt={imgData[0].attribs.alt}
            width={100}
          />
          <img
            className="imgData-2"
            src={imgData[1].attribs.src}
            alt={imgData[1].attribs.alt}
            width={100}
          />
        </div>
      );
    }
  };

  const reactElements = parse(resumeData.content, {
    replace: dynamicConvertion,
  });

  return <div className="HtmlParser">{reactElements}</div>;
}

export default HtmlParser;
