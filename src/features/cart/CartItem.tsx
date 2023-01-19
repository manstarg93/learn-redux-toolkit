import { useState } from 'react';
import CartController from './CartController';
import {
  CartDescriptionContainer,
  CartImageContainer,
  CartItemContainer,
  CartItemItems,
  Color,
  ColorContainer,
  ColorDescription,
  Colors,
  TitleAndPriceContainer,
} from './CartItem.styles';
import { colors } from './colors';

interface ICartItem {
  id: string;
  title: string;
  price: number;
  currentPrice: string;
  img: string;
  amount: number;
  available: number;
}

const CartItem = ({
  id,
  title,
  available,
  img,
  amount,
  currentPrice,
}: ICartItem) => {
  const [selectedColor, setSelectedColor] = useState<string>(
    colors[0].colorName
  );

  const colorHandler = (selectColor: string) => {
    setSelectedColor(selectColor);
  };

  return (
    <CartItemContainer>
      <CartItemItems>
        <CartImageContainer>
          <img src={img} alt={title} />
        </CartImageContainer>
        <CartDescriptionContainer>
          <TitleAndPriceContainer>
            <h4>{title}</h4>
            <h5>${currentPrice}</h5>
          </TitleAndPriceContainer>

          <ColorContainer>
            <ColorDescription>
              Color: <span>{selectedColor}</span>
            </ColorDescription>

            <Colors>
              {colors.map((color) => (
                <Color
                  key={color.id}
                  onClick={() => colorHandler(color.colorName)}
                  colorprop={color.hexCode}
                />
              ))}
            </Colors>
          </ColorContainer>
          <CartController id={id} amount={amount} available={available} />
        </CartDescriptionContainer>
      </CartItemItems>
    </CartItemContainer>
  );
};
export default CartItem;
