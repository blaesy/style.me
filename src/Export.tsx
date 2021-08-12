import React from 'react';
import { FC } from 'react';
import styled from 'styled-components';
import { ShapeProperties } from './App';

const CodeInput = styled.textarea`
position: relative;
width: 144px;
max-height: 100px;
min-height: 100px;
border: none;
outline: none;
box-sizing: border-box;
font-size: 10px;
resize: none;
background: rgba(0,0,0,0);
border-radius: 4px;
color: black;
`;

const Wrapper = styled.div`
position: absolute;
top: 0;
right: 0;
margin: 0;
margin: 6px;
`;

const CopyButton = styled.button`
    position: absolute;
    bottom: 0;
    right: 0;
    outline: none;
    border: none;
    color: black;
    z-index: 1;
    background: transparent;
    font-size: 16px;
    margin: 0;
    padding: 0;

    &:hover { 
        cursor: pointer;
    }
`;

const ExportCode: FC<ShapeProperties> = ({shape}) => {
    const [exportableCSS, setExportableCSS] = React.useState<string>('')

    React.useEffect(() => {
        let newString = '';
        shape.customClass && (newString += `.${shape.customClass} {`);
        shape.width && (newString +=`\nwidth: ${shape.width}px;`);
        shape.height && (newString +=`\nheight: ${shape.height}px;`);
        shape.borderRadius && (newString +=`\nborder-radius: ${shape.borderRadius}px;`);
        shape.fill && (newString +=`\nbackground: rgba(${shape.fill.r + ',' + shape.fill.g + ',' + shape.fill.b + ',' + shape.fill.a});`);
        shape.borderWidth && (newString +=`\nborder: ${shape.borderWidth}px solid rgba(${shape.borderFill.r + ',' + shape.borderFill.g + ',' + shape.borderFill.b + ',' + shape.borderFill.a});`);
        shape.customClass && (newString += `\n}`);

        shape.hoverable && shape.customClass && (newString += `\n.${shape.customClass}:hover {`);
        shape.hoverable && shape.customClass && shape.cursorPointer && (newString += `\ncursor: pointer;`)
        shape.hoverable && shape.customClass && (newString += `\n}`);
        setExportableCSS(newString);
    }, [shape]);
    return (
        <Wrapper>
            <CodeInput value={exportableCSS} />
            <CopyButton onClick={() => navigator.clipboard.writeText(exportableCSS)}>COPY</CopyButton>
        </Wrapper>
    )
}

export default ExportCode;