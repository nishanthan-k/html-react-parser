import React from 'react'
import "./Resume.scss"
import parse from 'html-react-parser'
import resumeData from "../assets/resume.json"

const Resume = () => {
  const parseHtmlContent = (node) => {
    if (node.attribs && node.attribs.id === "profile-info") {
      // console.log(node);
      return (
        <div className='info'>
          <h1>{ node.children[0].children[0].data }</h1>
        </div>
      )
    } else if (node.attribs && node.attribs.id === "social-links") {
      return (
        <div className='social-links'>
          { node.children.map((child, index) => (
            <a key={ child.attribs.href } className={ node.children[0].attribs.id } href={ child.attribs.href }>{ child.children[0].data }</a>
          )) }
        </div>
      )
    }
  }

  return (
    <div className='resume'>
      { parse(resumeData.content, { replace: parseHtmlContent }) }
    </div>
  )
}

export default Resume