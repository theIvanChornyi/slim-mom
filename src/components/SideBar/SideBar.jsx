import {
  AsideBox,
  Div,
  KcalItem,
  KcalList,
  Span,
  Text,
  Title,
} from './SideBar.styled';

export default function SideBar() {
  return (
    <AsideBox>
      <Div>
        <Title>Summary for 06/20/2020</Title>
        <KcalList>
          <KcalItem>
            <Text>Left</Text>
            <Span>000 kcal</Span>
          </KcalItem>
          <KcalItem>
            <Text>Consumed</Text>
            <Span>000 kcal</Span>
          </KcalItem>
          <KcalItem>
            <Text>Daily rate</Text>
            <Span>000 kcal</Span>
          </KcalItem>
          <KcalItem>
            <Text>n% of normal</Text>
            <Span>000 kcal</Span>
          </KcalItem>
        </KcalList>
      </Div>
      <Div>
        <Title>Food not recommended</Title>
        <ul>
          <li>
            <Text>Your diet will be displayed here</Text>
          </li>
        </ul>
      </Div>
    </AsideBox>
  );
}
