import styled, { css } from "styled-components";
import SectionHeading from "./SectionHeading";
import composition1 from "../../assets/composition-1.jpg";
import composition2 from "../../assets/composition-2.jpg";
import composition3 from "../../assets/composition-3.jpg";
const StyledAbout = styled.section`
  background-color: var(--color-grey-light-1);
  padding: 15rem 0;
  margin-top: -20vh;
  text-align: center;
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 4rem;
  margin-top: -5rem;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 8rem;
  text-align: start;
  width: 50%;
`;

const Heading = styled.h2`
  font-size: 2rem;
  font-weight: 600;
`;

const Paragraph = styled.p`
  font-weight: 400;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const Composition = styled.div`
  position: relative;
  width: 25%;
  margin-top: -8rem;
  height: 18rem;
  margin-left: 5rem;
`;

const Img = styled.img`
  width: 75%;
  height: 100%;
  position: absolute;
  box-shadow: 0 3rem 6rem var(--color-black-opacity);
  transition: all 0.2s;
  border-radius: 3px;
  &:hover {
    transform: translateY(-3px) scale(1.05);
    outline: 1.5rem solid var(--color-primary);
    outline-offset: 1.5rem;
    z-index: 1;
  }

  &:hover > *:not(:hover) {
    transform: scale(0.95);
  }

  ${(props) =>
    props.id === "2" &&
    css`
      top: 6rem;
      left: -2rem;
    `}
  ${(props) =>
    props.id === "1" &&
    css`
      top: 2rem;
      right: -4rem;
    `}
  ${(props) =>
    props.id === "3" &&
    css`
      left: 25%;
      top: 14rem;
    `}
`;

function About({ id }) {
  return (
    <StyledAbout id={id}>
      <SectionHeading>نظرة على تطبيق المــــــــراح</SectionHeading>
      <Content>
        <TextBox>
          <Heading>كن دائماً على إتصال</Heading>
          <Paragraph>
            يساعدك تطبيق المراح على إدارة مزرعتك من اي مكان وفي اي وقت
          </Paragraph>
          <Heading>إدارة المواشي</Heading>
          <Paragraph>
            تربية الماشية ورعايتها وتفقد حالتها الصحيه والتطعيمات الدورية <br />{" "}
          </Paragraph>
          <Heading>إدارة المحاصيل الزراعية</Heading>
          <Paragraph>
            افضل التقنيات المتبعه في الزراعة والتسميد والحصاد ودارة المحاصيل
          </Paragraph>
        </TextBox>

        <Composition>
          <Img src={composition1} id="1" />
          <Img src={composition2} id="2" />
          <Img src={composition3} id="3" />
        </Composition>
      </Content>
    </StyledAbout>
  );
}

export default About;
