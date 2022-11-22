import Filter from 'components/Filter';
import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectIsAuth } from 'redux/auth/selectors.auth';
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

  const isAuth = useSelector(selectIsAuth);
  const [filterRequest, setFilterRequest] = useState('');

  const getUserFilterRequest = e => {
    setFilterRequest(e.target.value);
  };

  const filtredNotAllowedProducts = useMemo(
    () =>
      notAllowedProducts
        .filter(product =>
          product.toLowerCase().includes(filterRequest.toLowerCase())
        )
        .sort((prev, post) => prev.localeCompare(post)),
    [filterRequest, notAllowedProducts]
  );

  const getPercentsKcal = percent => {
    const total = dailyRate || daySummary?.dailyRate;

    return Math.round((percent / 100) * total);
  };

  const normalLeft = Math.round(kcalLeft) || Math.round(daySummary?.kcalLeft);
  const normalConsumed =
    Math.round(kcalConsumed) || Math.round(daySummary?.kcalConsumed);
  const normalPercent =
    Math.round(percentsOfDailyRate) ||
    Math.round(daySummary?.percentsOfDailyRate);
  const normalPercentsKcal =
    getPercentsKcal(percentsOfDailyRate) ||
    getPercentsKcal(daySummary?.percentsOfDailyRate);

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
        <Filter
          isAuth={isAuth}
          onChangeFilter={getUserFilterRequest}
          value={filterRequest}
        />
        <ProductList>
          {filtredNotAllowedProducts ? (
            <>
              {filtredNotAllowedProducts?.map(product => (
                <KcalItem key={product}>
                  <Text>{product}</Text>
                </KcalItem>
              ))}
            </>
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

SideBar.propTypes = {
  date: PropTypes.string,
  dailyInfo: PropTypes.shape({
    date: PropTypes.string,
    daySummary: PropTypes.shape({
      dailyRate: PropTypes.number,
      date: PropTypes.string,
      id: PropTypes.string,
      kcalConsumed: PropTypes.number,
      kcalLeft: PropTypes.number,
      percentsOfDailyRate: PropTypes.number,
      userId: PropTypes.string,
    }),
    eatenProducts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        kcal: PropTypes.number,
        title: PropTypes.string,
        weight: PropTypes.number,
      })
    ),
    id: PropTypes.string,
  }),
  notAllowedProducts: PropTypes.arrayOf(PropTypes.string),
};
