import {
  AsideBox,
  Div,
  KcalItem,
  KcalList,
  Span,
  Text,
  Title,
} from './SideBar.styled';

export default function SideBar({
  date,
  left,
  consumed,
  dailyRate,
  percent,
  notAllowedProducts,
}) {
  const getPercentsKcal = percent => {
    return (percent / 100) * dailyRate;
  };

  return (
    <AsideBox>
      <Div>
        <Title>Summary for {date}</Title>
        <KcalList>
          <KcalItem>
            <Text>Left</Text>
            <Span>{left ? left : '000'} kcal</Span>
          </KcalItem>
          <KcalItem>
            <Text>Consumed</Text>
            <Span>{consumed ? consumed : '000'} kcal</Span>
          </KcalItem>
          <KcalItem>
            <Text>Daily rate</Text>
            <Span>{dailyRate ? dailyRate : '000'} kcal</Span>
          </KcalItem>
          <KcalItem>
            <Text>n% of normal</Text>
            <Span>{percent ? getPercentsKcal(percent) : '000'} kcal</Span>
          </KcalItem>
        </KcalList>
      </Div>
      <Div>
        <Title>Food not recommended</Title>
        <KcalList>
          {notAllowedProducts?.lendth > 0 ? (
            notAllowedProducts?.map(product => (
              <li key={product}>
                <p>{product}</p>
              </li>
            ))
          ) : (
            <li>
              <Text>Your diet will be displayed here</Text>
            </li>
          )}
        </KcalList>
      </Div>
    </AsideBox>
  );
}
