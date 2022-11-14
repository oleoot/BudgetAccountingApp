import { Text } from 'react-native';
import styled from 'styled-components/native';

const View = styled.View`
  background: #2F3136;
  position: absolute;
  bottom: 60px;
  height: 60px;
  width: 100%
`

export default function Footer() {
    return (
      <View>
        <Text>Footer</Text>
      </View>
    );
}
