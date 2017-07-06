import styled from 'styled-components/native';

const AbsBottomView = styled.View`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const WarningText = styled.Text`
  color: orangered;
`;

const WhiteText = styled.Text`
  color: white;
`;

const SmallWhiteText = styled.Text`
  color: white;
  font-size: 11;
`;

const FlexView = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export {
  AbsBottomView,
  WarningText,
  WhiteText,
  SmallWhiteText,
  FlexView
}
