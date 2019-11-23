import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})``;

export const NoDataWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const NoDataText = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: 'rgba(255, 255, 255, 0.6)';
`;
