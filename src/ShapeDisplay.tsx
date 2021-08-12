import { FC } from 'react';
import styled from 'styled-components';
import { ShapeStyle, ShapeProperties } from './App';

const Shape = styled.div<ShapeStyle>`
height: ${props => props.height}px;
width: ${props => props.width}px;
border-radius: ${props => props.borderRadius}px;
border: ${props => props.borderWidth}px solid rgba(${props => props.borderFill.r + ',' + props.borderFill.g + ',' + props.borderFill.b + ',' + props.borderFill.a});
background: rgba(${props => props.fill.r + ',' + props.fill.g + ',' + props.fill.b + ',' + props.fill.a});
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);

${props => props.hoverable && `
&:hover {
    ${props.cursorPointer && 'cursor: pointer;'};
}
`}

transition: all .3s linear;
`;

const ShapeDisplay: FC<ShapeProperties> = ({shape}) => {

    return (
        <>
            <Shape
            height={shape.height}
            width={shape.width}
            borderRadius={shape.borderRadius}
            fill={shape.fill}
            borderFill={shape.borderFill}
            borderWidth={shape.borderWidth}
            hoverable={shape.hoverable}
            cursorPointer={shape.cursorPointer}
            />
        </>
    )
}

export default ShapeDisplay;