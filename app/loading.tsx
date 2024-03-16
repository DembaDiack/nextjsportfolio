"use client";
import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
const Loading: React.FC<{ loading: boolean }> = ({ loading }) => {
  return (
    <ClipLoader
      loading={loading}
      color="#3b82f6"
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
      cssOverride={{
        display: "block",
        margin: "100px auto",
      }}
    />
  );
};

export default Loading;
