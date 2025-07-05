import React, { useState, useEffect } from "react";
import appwriteService from "../appWrite/config";
import { Container, Post, PostCard } from "../components";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {}, []);
  appwriteService.getPosts([]).then((posts) => {
    if (posts) {
      setPosts(posts);
    }
  });
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="w-1 p-2/4">
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
export default AllPosts;
