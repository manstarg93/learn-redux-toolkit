import { ButtonComponent } from './Button.styles';

type ButtonProps = React.ComponentPropsWithRef<'button'>;

interface IButton extends ButtonProps {
  color?: 'black' | 'green' | 'red';
}

const Button = ({ children, type, onClick, color }: IButton) => {
  return <ButtonComponent myColor={color}>{children}</ButtonComponent>;
};
export default Button;
