import { useState } from 'react';
import styled from 'styled-components';

const Countbox = styled.div`
  background-color: white;
  border-radius: 24px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 60%;
  max-width: 420px;
  padding: 40px 32px;
  gap: 16px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
`;

const Title = styled.h2`
  color: black;
  font-size: 32px;
  text-align: center;
  margin: 0;
`;

const Label = styled.p`
  color: #555;
  font-size: 16px;
  margin: 0;
`;

const CountText = styled.h2`
  color: green;
  font-size: 56px;
  text-align: center;
  margin: 0;
`;

const ButtonArea = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Button = styled.button`
  border: none;
  border-radius: 999px;
  padding: 12px 20px;
  background-color: #222;
  color: white;
  font-size: 14px;
  cursor: pointer;
`;

const CartButton = styled.button`
  border: none;
  border-radius: 999px;
  padding: 14px 28px;
  background-color: green;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

const ShoppingCart = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    alert(`現在個数は "${count}" です!`);
  };

  return (
    <Countbox>
      <Title>ショッピングカート</Title>
      <Label>選択した個数:</Label>

      <CountText>{count}</CountText>

      <ButtonArea>
        <Button onClick={() => setCount(count + 1)}>
          個数を増やす
        </Button>

        <Button onClick={() => setCount(count > 0 ? count - 1 : 0)}>
          個数を減らす
        </Button>
      </ButtonArea>

      <CartButton onClick={handleClick}>
        カートに入れる
      </CartButton>
    </Countbox>
  );
};

export default ShoppingCart;