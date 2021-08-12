import React, {FC} from 'react';
import styled from 'styled-components';
import { ShapeProperties } from './App';

const InputWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 240px;
margin: 10px auto;
`;

const InputStyler = styled.div`
position: relative;
display: flex;
width: 134px;
`;

const Input = styled.input<React.InputHTMLAttributes<HTMLInputElement>>`
margin: 0 auto;
padding: 0;
position: relative;
height: 34px;
width: 34px;
border: 2px solid white;
outline: none;
font-size: 18px;
text-align: center;
font-weight: 400;
border-radius: 4px;

&:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    display: ${props => props.checked ? 'block' : 'none'};
    z-index: 1;
    background: white;
}

-webkit-appearance: none;
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

export interface InputRadioProps {
label: string;
value?: boolean;
property: string;
}

const InputRadio: FC<InputRadioProps & ShapeProperties> = ({label, value, property, shape, onChange}) => {

    return (
            <InputWrapper>      
                <Label>{label}</Label>
                    <InputStyler>
                            <Input type="checkbox" checked={value} onChange={() => onChange && onChange({...shape, [property]: !value})} />
                    </InputStyler>
            </InputWrapper>
    )
}

export default InputRadio;
