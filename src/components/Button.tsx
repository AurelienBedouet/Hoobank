interface Props {
  styles: string;
}

const Button = ({ styles }: Props) => (
  <button
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient border-2 border-cyan-500 rounded-[10px] outline-none transition duration-500 linear get-started ${styles}`}
  >
    Get Started
  </button>
);

export default Button;
