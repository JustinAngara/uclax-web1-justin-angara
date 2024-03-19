import styled from "styled-components";
import React from "react";
import ReactPlayer from "react-player";

const Grid = () => {
    // currently test data
    const inventory = [
        { title: "title 1", data: "data 1", insight: "insight 1" },
        { title: "title 2", data: "data 2", insight: "insight 2" },
        { title: "title 3", data: "data 3", insight: "insight 3" },
        { title: "title 4", data: "data 4", insight: "insight 4" },
        { title: "title 5", data: "data 5", insight: "insight 5" },
    ];

    return (
        <GridStyled>
            <h1>Stock Market Explained</h1>
            <br></br>
            <ReactPlayer url="https://www.youtube.com/watch?v=ZCFkWDdmXG8" />

            <br></br>

            <h1>Ultimate Guide to Investing</h1>
            <ReactPlayer url="https://www.youtube.com/watch?v=_MeZt4LBnCE&ab_channel=JamesJani" />
            <br></br>

            <div>Test Data, soon will add graphs based on data</div>
            {inventory.map((item) => (
                <GridItem key={item.title}>
                    <h3>{item.title}</h3>
                    <p>Data: {item.data}</p>
                    <p>Insight: {item.insight}</p>
                </GridItem>
            ))}
        </GridStyled>
    );
};

export default Grid;

const GridStyled = styled.div`
    display: grid;

    grid-gap: 10px; /* Spacing between items */
`;

const GridItem = styled.div`
    color: black;
    background-color: #eee; /* Light background color */
    padding: 10px; /* Padding for content */
    border-radius: 5px; /* Rounded corners */
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsive columns */
    border: 1px solid #ff0000;
    padding: 10px; /* Padding for content *
`;
// this is test commit