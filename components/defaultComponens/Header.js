import { Text } from 'react-native';
import styled from 'styled-components/native';

const View = styled.View`
  background: #2F3136;
  height: 60px;
`

export default function Main() {
    return (
      <View>
        <Text>Header</Text>
      </View>
    );
}
