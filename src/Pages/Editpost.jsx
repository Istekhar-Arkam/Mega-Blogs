import React, { useState, useEffect } from "react";
import { Container, PostFrom } from "../components/Container";
import appwriteService from "../appWrite/config";
import { useParams, useNavigate } from "react-router-dom";

function Editpost() {
  const [post, setPosts] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPosts(post);
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  return post ? (
    <div className="py-8">
      <Container>
        <PostFrom post={post} />
      </Container>
    </div>
  ) : null;
}

export default Editpost;
