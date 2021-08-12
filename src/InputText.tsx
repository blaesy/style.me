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
display: inline-block;

& > span {

    position: absolute;
    top: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    font-size: 20px;
    transform-origin: center;
    transition: all .3s ease-in-out;
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
}
`;

const Input = styled.input<React.InputHTMLAttributes<HTMLInputElement>>`
position: relative;
height: 36px;
width: 134px;
background: white;
outline: none;
border: none;
font-size: 18px;
text-align: center;
font-weight: 400;
border-radius: 4px;

::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

const RightPlus = styled.span`
right: 12px;
`;

const LeftMinus = styled.span`
left: 12px;
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

export interface InputTextProps {
label: string;
value?: string;
property: string;
}

const InputText: FC<InputTextProps & ShapeProperties> = ({label, value, property, shape, onChange}) => {

    return (
            <InputWrapper>      
                <Label>{label}</Label>
                    <InputStyler>
                            <Input type="text" value={value} onChange={(e: any) => onChange && onChange({...shape, [property]: e.target.value})}></Input>
                    </InputStyler>
            </InputWrapper>
    )
}

export default InputText;
