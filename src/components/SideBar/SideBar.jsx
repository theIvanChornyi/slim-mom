import {
  AsideBox,
  Div,
  KcalItem,
  KcalList,
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

  return (
    <AsideBox>
      <Div>
        <Title>Summary for {date}</Title>
        <KcalList>
          <KcalItem>
            <Text>Left</Text>
            <Span>
              {kcalLeft || daySummary ? kcalLeft || daySummary.kcalLeft : '000'}
              kcal
            </Span>
          </KcalItem>
          <KcalItem>
            <Text>Consumed</Text>
            <Span>
              {kcalConsumed || daySummary
                ? kcalConsumed || daySummary.kcalConsumed
                : '000'}
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
            <Text>n% of normal</Text>
            <Span>
              {percentsOfDailyRate || daySummary
                ? getPercentsKcal(percentsOfDailyRate) ||
                  getPercentsKcal(daySummary.percentsOfDailyRate)
                : '000'}
              kcal
            </Span>
          </KcalItem>
        </KcalList>
      </Div>
      <Div>
        <Title>Food not recommended</Title>
        <KcalList>
          {notAllowedProducts ? (
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
