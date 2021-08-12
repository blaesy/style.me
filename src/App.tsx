import React, { FC } from 'react';
import { Color, RGBColor } from 'react-color';
import styled from 'styled-components';
import ExportCode from './Export';
import ShapeDisplay from './ShapeDisplay';
import ShapeSettings from './ShapeSettings';

const Wrapper = styled.div`
display: flex;
width: 100%;
height: 100vh;
min-height: 100vh;
`;

const LeftPanel = styled.div`
width: 296px;
background: #BF045B;
box-shadow: 10px 0 10px -2px rgba(0,0,0,0.3);
z-index: 1;
`;

const RightPanel = styled.div`
position: relative;
width: calc(100% - 346px);
margin: 25px;
border-radius: 8px;
`;

export interface ShapeStyle {
  customClass?: string;
  height: number;
  width: number;
  borderRadius: number;
  fill: RGBColor;
  borderFill: RGBColor;
  borderWidth: number;
  hoverable?: boolean;
  cursorPointer?: boolean;
}

export interface ShapeProperties {
  shape: ShapeStyle;
  onChange?: React.Dispatch<React.SetStateAction<ShapeStyle>>;
}

const App: FC = () => {

  const [shapeProperties, setShapeProperties] = React.useState<ShapeStyle>({
    customClass: 'box',
    height: 100,
    width: 100,
    borderRadius: 10,
    fill: {r: 0, g: 0, b: 0, a: 1},
    borderFill: {r: 0, g: 0, b: 0, a: 1},
    borderWidth: 0,
    hoverable: false,
    cursorPointer: false
  })

  return (
    <Wrapper>
      <LeftPanel>
        <ShapeSettings 
        shape={shapeProperties}
        onChange={setShapeProperties}
        />
      </LeftPanel>
      <RightPanel>
        <ShapeDisplay
          shape={shapeProperties}>
        </ShapeDisplay>
      </RightPanel>

      <ExportCode shape={shapeProperties} />
    </Wrapper>
  );
}

export default App;
