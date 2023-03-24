import React, { Component, useEffect } from "react";
import Router from "next/router";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const QUERY = gql`
	{
		title
	}
`;

const Index = () => {
	const { data, isLoading, error } = useQuery(QUERY);

	useEffect(() => {
		Router.push("/magazine");
	}, []);

	return <div />;
};

export default Index;
