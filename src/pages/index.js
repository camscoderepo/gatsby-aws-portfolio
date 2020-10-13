import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import { Header } from '../components'; 

const Home = ({ data }) => {
    return (
        <>
            <Header />
        </>
    )
}

export default Home;

export const query = graphql`
    query{
        
    }
`