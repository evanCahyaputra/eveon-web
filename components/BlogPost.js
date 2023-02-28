import React from "react";
import Link from "next/link";
import { Col } from 'react-bootstrap';

const BlogPost = (props) => {
  return (
    <Col lg={4} md={6} sm={12}>
      <div className="blog-one__single">
        <div className="blog-one__image">
          <img src={props.postImage} alt="" />
        </div>
        <div className="blog-one__content">
          <div className="blog-one__circle"></div>
          <div className="blog-one__content-inner">
            <div className="blog-one__meta">
              {props.postDate}
            </div>
            <h3>
              {props.postTitle}
            </h3>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default BlogPost;
