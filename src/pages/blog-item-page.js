import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import styled from "@emotion/styled";
import loading from "../img/laoding.png";

const PostBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 50%;
  background-color: #fff;
  padding: 30px;
  border: 3px solid #fe8c04;
  border-radius: 8px;
`;
const PostTitle = styled.div`
  display: block;
  text-transform: uppercase;
  font: bold 20px/1 sans-serif;
  margin-bottom: 20px;
`;
const Loading = styled.img`
  height: 150px;
  animation: 2s linear 0s infinite loading;
  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const BlogItemPage = ({ match }) => {
  const [pageData, setPageData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const id = /\d+/.exec(match.params.id)[0];
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

    setIsLoading(true);

    fetch(url)
      .then((resolve) => resolve.json())
      .then((resolve) => {
        setPageData(resolve);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });

    return () => {
      console.log("unmount");
    };
  }, [setPageData, location]);

  return (
    <>
      {isLoading && <Loading src={loading} alt="loading" />}
      {pageData && !isLoading && (
        <PostBody>
          <PostTitle>{pageData.title}</PostTitle>
          <div>{pageData.body}</div>
        </PostBody>
      )}
    </>
  );
};
