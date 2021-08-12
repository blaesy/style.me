import { FC } from 'react';
import styled from 'styled-components';
import { ShapeProperties } from './App';
import InputNumber from './InputNumber';
import InputColor from './InputColor';
import ExportCode from './Export';
import InputText from './InputText';
import InputRadio from './InputRadio';

const Wrapper = styled.div`
display: flex;
flex-direction: column;
`;

const Title = styled.div`
color: white;
margin: 10px auto;
font-size: 48px;
font-weight: 700;
`;

const ShapeSettings: FC<ShapeProperties> = ({shape, onChange}) => {
    
    return (
        <Wrapper>
            <Title>STYLE.ME</Title>
            <InputText label={"CLASS NAME"} onChange={onChange} property={'customClass'} value={shape.customClass} shape={shape}/>
            <InputNumber label={"HEIGHT"} onChange={onChange} property={'height'} min={0} max={1000} value={shape.height} shape={shape}/>
            <InputNumber label={"WIDTH"} onChange={onChange} property={'width'} min={0} max={1000} value={shape.width} shape={shape}/>
            <InputNumber label={"BORDER RADIUS"} onChange={onChange} property={'borderRadius'} min={0} max={500} value={shape.borderRadius} shape={shape}/>
            <InputNumber label={"BORDER WIDTH"} onChange={onChange} property={'borderWidth'} min={0} max={500} value={shape.borderWidth} shape={shape}/>
            <InputColor label={"FILL"} onChange={onChange} property={'fill'} value={shape.fill} shape={shape} />
            <InputColor label={"BORDER FILL"} onChange={onChange} property={'borderFill'} value={shape.borderFill} shape={shape} />
            <InputRadio label={"HOVER"} onChange={onChange} property={'hoverable'} value={shape.hoverable} shape={shape} />
            <InputRadio label={"CURSOR POINTER"} onChange={onChange} property={'cursorPointer'} value={shape.cursorPointer} shape={shape} />
        </Wrapper>
    )
}

export default ShapeSettings;