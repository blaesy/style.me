import React, {FC} from 'react';
import styled from 'styled-components';
import { ShapeProperties } from './App';
import { RGBColor, SketchPicker, SketchPickerProps } from 'react-color';

const InputWrapper = styled.div`
display: flex;
align-items: center;
position: relative;
justify-content: space-between;
width: 240px;
margin: 10px auto;
`;

const InputStyler = styled.div`
position: relative;
display: flex;
width: 134px;
`;

const Label = styled.span`
text-transform: uppercase;
letter-spacing:  1px;
text-align: left;
font-size: 12px;
width: 80px;
font-weight: 700;
color: white;
`;

const StyledSketchPicker = styled(SketchPicker)<SketchPickerProps>`
position: absolute;
z-index: 99;
top: 40px;
left: 50%;
transform: translate(-50%, 0);
`;

interface ButtonProp {
    fill: RGBColor;
}

const InputButton = styled.button<ButtonProp>`
margin: 0 auto;
padding: 0;
position: relative;
height: 34px;
width: 34px;
border: 2px solid white;
background: rgba(${props => props.fill.r + ',' + props.fill.g + ',' + props.fill.b + ',' + props.fill.a});
outline: none;
font-size: 18px;
text-align: center;
font-weight: 400;
border-radius: 4px;

&:hover {
    cursor: pointer;
}
`;

export interface InputNumberProps {
label: string;
value: RGBColor;
property: string;
}

const InputColor: FC<InputNumberProps & ShapeProperties> = ({label, value, property, shape, onChange}) => {
    
    const [open, setOpen] = React.useState<boolean>(false);

    return (
            <InputWrapper>      
                <Label>{label}</Label>
                    <InputStyler>
                        <InputButton fill={value} onClick={() => setOpen(!open)}></InputButton>
                        {open && <StyledSketchPicker color={value} onChange={(color) => onChange && onChange({...shape, [property]: color.rgb})}/>}

                    </InputStyler>

            </InputWrapper>
    )
}

export default InputColor;
