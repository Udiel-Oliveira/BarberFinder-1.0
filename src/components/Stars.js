import React from "react";
import styled from 'styled-components/native';

import StarFull from '../assets/Star-Full.svg'
import StarHalf from '../assets/Star-Half.svg'
import StarEmpty from '../assets/Star-Empty.svg'

const StarArea = styled.View`
    flex-direction: row;
`;

const StarView = styled.View``;

export default () => {

    let s = [0,0,0,0,0];


    return (
        <StarArea>
            {s.map((i, k)=>(
                <StarView key={k}>
                    {i === 0 && <StarEmpty width="18" height="18"/>}
                    {i === 1 && <StarHalf width="18" height="18"/>}
                    {i === 2 && <StarFull width="18" height="18"/>}
                </StarView>
            ))}
        </StarArea>
    )
}