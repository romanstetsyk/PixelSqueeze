import { FigCaption, Slider } from "./ImageSlider.styled";

export const ImageSlider = ({ urlOriginal, urlCompressed }) => {
  return (
    <Slider>
      <img-comparison-slider class="slider">
        <figure slot="first" className="before" mb={2}>
          <img width="100%" src={urlOriginal} alt="" />
          <FigCaption left={3}>Before</FigCaption>
        </figure>
        <figure slot="second" className="after">
          <img width="100%" src={urlCompressed} alt="" />
          <FigCaption right={3}>After</FigCaption>
        </figure>
      </img-comparison-slider>
    </Slider>
  );
};
