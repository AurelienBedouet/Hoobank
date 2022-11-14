import { quotes } from "../../assets";

interface Props {
  content: string;
  name: string;
  title: string;
  img: string;
}

const TestimonialCard = ({ content, name, title, img }: Props) => (
  <div className="flex justify-between flex-col px-10 rounded-[20px]  max-w-sm my-5 cursor-default feedback-card">
    <img src={quotes} alt="double quotes" className="w-11 h-7 object-contain" />
    <p className="font-poppins font-normal text-lg leading-[32.4px] text-white my-10">
      {content}
    </p>

    <div className="flex flex-row">
      <img src={img} alt={name} className="w-12 h-12 rounded-full" />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-xl leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-base leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default TestimonialCard;
