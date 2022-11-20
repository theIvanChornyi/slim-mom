import {
  AsideBox,
  Div,
  KcalItem,
  KcalList,
  ProductList,
  Span,
  Text,
  Title,
} from './SideBar.styled';

export default function SideBar({ date, dailyInfo, notAllowedProducts }) {
  const { dailyRate, kcalConsumed, kcalLeft, percentsOfDailyRate, daySummary } =
    dailyInfo;

  const getPercentsKcal = percent => {
    const total = dailyRate || daySummary.dailyRate;

    return (percent / 100) * total;
  };

  const normalLeft = Math.round(kcalLeft) || Math.round(daySummary.kcalLeft);
  const normalConsumed =
    Math.round(kcalConsumed) || Math.round(daySummary.kcalConsumed);
  const normalPercent =
    Math.round(percentsOfDailyRate) ||
    Math.round(daySummary.percentsOfDailyRate);
  const normalPercentsKcal =
    getPercentsKcal(Math.round(percentsOfDailyRate)) ||
    getPercentsKcal(Math.round(daySummary.percentsOfDailyRate));

  return (
    <AsideBox>
      <Div>
        <Title>Summary for {date}</Title>
        <KcalList>
          <KcalItem>
            <Text>Left</Text>
            <Span>
              {kcalLeft || daySummary ? normalLeft : '000'}
              kcal
            </Span>
          </KcalItem>
          <KcalItem>
            <Text>Consumed</Text>
            <Span>
              {kcalConsumed || daySummary ? normalConsumed : '000'}
              kcal
            </Span>
          </KcalItem>
          <KcalItem>
            <Text>Daily rate</Text>
            <Span>
              {dailyRate || daySummary
                ? dailyRate || daySummary.dailyRate
                : '000'}
              kcal
            </Span>
          </KcalItem>
          <KcalItem>
            <Text>
              {percentsOfDailyRate || daySummary ? normalPercent : 'n'}% of
              normal
            </Text>
            <Span>
              {percentsOfDailyRate || daySummary ? normalPercentsKcal : '000'}
              kcal
            </Span>
          </KcalItem>
        </KcalList>
      </Div>
      <Div>
        <Title>Food not recommended</Title>
        <ProductList>
          {notAllowedProducts ? (
            notAllowedProducts?.map(product => (
              <KcalItem key={product}>
                <Text>{product}</Text>
              </KcalItem>
            ))
          ) : (
            <KcalItem>
              <Text>Your diet will be displayed here</Text>
            </KcalItem>
          )}
        </ProductList>
      </Div>
    </AsideBox>
  );
}
