import React, { Component, useEffect } from "react";
import Router from "next/router";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const QUERY = gql`
  {
    title
  }
`;

const Index =() => {

  const {data, isLoading, error} = useQuery(QUERY);

  console.log(data, isLoading, error);
  useEffect(() => {
    Router.push("/presentation");
  }, []);

  return <div />;
};

export default Index
