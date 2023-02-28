import React from "react";
import { Container, Row } from "react-bootstrap";
import BlockTitle from "./BlockTitle";
import BlogPost from "./BlogPost";

import BlogImage1 from "../assets/images/headline/people.jpg";
import BlogImage2 from "../assets/images/headline/experience.jpg";
import BlogImage3 from "../assets/images/headline/generation.jpg";

const BlogHome = () => {
  return (
    <section className="blog-one" id="our-value">
      <Container>
        <BlockTitle
          textAlign="center"
          paraText=""
          titleText={`Drive The Real Matters`}
        />
        <Row>
          <BlogPost
            postImage={BlogImage1}
            postTitle="Memberikan kepraktisan dan efisiensi untuk meningkatkan kualitas hidup manusia."
            postDate="PEOPLE"
            postCommentCount=""
            postLink="#"
          />
          <BlogPost
            postImage={BlogImage2}
            postTitle="Menghadirkan teknologi power management terbaik yang tentunya aman dan andal."
            postDate="EXPERIENCE"
            postCommentCount=""
            postLink="#"
          />
          <BlogPost
            postImage={BlogImage3}
            postTitle="Mendorong Green Manner yang berdampak positif terhadap lingkungan dengan praktik keberlanjutan."
            postDate="GENERATION"
            postCommentCount=""
            postLink="#"
          />
        </Row>
      </Container>
    </section>
  );
};

export default BlogHome;
