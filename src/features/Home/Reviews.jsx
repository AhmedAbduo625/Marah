import styled from "styled-components";
import videoMP4 from "../../assets/test2.mp4";
import fig1 from "../../assets/fig-1.jpg";
import fig2 from "../../assets/fig-4.jpg";
import fig3 from "../../assets/fig-3.jpg";
// import videoWEBM from "../../assets/review.webm";
const StyledReviews = styled.section`
  padding: 15rem 0;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const BackgroundVideo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0.4;
  height: 100%;
  width: 100%;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Story = styled.div`
  width: 60%;
  padding: 4rem;
  padding-left: 9rem;
  margin: 0 auto;
  background-color: var(--color-grey-light-1-opacity);
  box-shadow: 0 3rem 6rem var(--color-black-opacity);
  border-radius: 3px;
  display: flex;
  transform: skewx(-12deg);
  font-size: 1.6rem;
  backface-visibility: hidden;
  &:not(:last-child) {
    margin-bottom: 6rem;
  }
`;

const Img = styled.img`
  height: 100%;
  transform: scale(1.2);
  transition: all 0.5s;
`;

const Caption = styled.figcaption`
  position: absolute;
  opacity: 0;
  color: var(--color-white);
  text-transform: uppercase;
  font-size: 1.7rem;
  transition: all 0.5s;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0%);
  text-align: center;
`;
const Figure = styled.figure`
  width: 10rem;
  height: 10rem;
  position: relative;

  backface-visibility: hidden;
  overflow: hidden;

  @supports (-webkit-clip-path: polygon(0 0)) or (clip-path: polygon(0 0)) {
    -webkit-clip-path: circle(50% at 50% 50%);
    clip-path: circle(50% at 50% 50%);
    -webkit-shape-outside: circle(50% at 50% 50%);
    shape-outside: circle(50% at 50% 50%);
  }

  &:hover {
    ${Caption} {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }
  &:hover {
    ${Img} {
      filter: blur(3px) brightness(80%);
      transform: scale(1);
    }
  }
`;

const TextBox = styled.div`
  transform: skewX(12deg);
  padding: 2rem;
`;

const Heading = styled.h2`
  margin-bottom: 2rem;
`;

const Paragraph = styled.p``;

function Reviews({ id }) {
  return (
    <StyledReviews id={id}>
      <BackgroundVideo>
        <Video loop muted autoplay="">
          <source src={videoMP4} type="video/mp4" />
          Your browser is not support
        </Video>
      </BackgroundVideo>
      <Story>
        <Figure>
          <Img src={fig3} />
          <Caption>محمد</Caption>
        </Figure>
        <TextBox>
          <Heading>التطبيق الافضل على الإطلاق</Heading>
          <Paragraph>
            هذا التطبيق سهل الاستخدام وساعدني في إدارة مزرعتي بشكل ممتاز
          </Paragraph>
        </TextBox>
      </Story>
      <Story>
        <Figure>
          <Img src={fig2} />
          <Caption>نواف</Caption>
        </Figure>
        <TextBox>
          <Heading>انصحكم بإستخدام التطبيق</Heading>
          <Paragraph>
            {" "}
            لقد وجدت زيادة غير مسبوقه في حجم الانتاج بعد استخدام هذا التطبيق
            انصحكم بإستخدام هذا التطبيق
          </Paragraph>
        </TextBox>
      </Story>
    </StyledReviews>
  );
}

export default Reviews;
