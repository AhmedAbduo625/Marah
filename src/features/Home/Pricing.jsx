import styled, { css } from "styled-components";
const StyledPricing = styled.section`
  background-color: var(--color-grey-light-1);
  padding: 15rem 0;
  margin-top: -10rem;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const Front = styled.div`
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.8s ease;
  transform-style: preserve-3d;
  box-shadow: 0 1.5rem 4rem var(--color-black-opacity);
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
`;
const Back = styled.div`
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.8s ease;
  transform-style: preserve-3d;
  box-shadow: 0 1.5rem 4rem var(--color-black-opacity);
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 7rem 0;
  &:hover {
    transform: rotateY(0);
  }

  ${(props) =>
    props.id === "1" &&
    css`
      background-image: linear-gradient(
        to right bottom,
        var(--color-primary-light-opacity),
        var(--color-primary-dark-opacity)
      );
    `}
  ${(props) =>
    props.id === "2" &&
    css`
      background-image: linear-gradient(
        to right bottom,
        var(--color-secondary-light-opacity),
        var(--color-secondary-dark-opacity)
      );
    `}
`;

const Picture = styled.div`
  background-size: cover;
  height: 12rem;
  background-blend-mode: screen;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  ${(props) =>
    props.id === "p1" &&
    css`
      background-image: linear-gradient(
        to right bottom,
        var(--color-primary-light-opacity),
        var(--color-primary-dark-opacity)
      );
    `}
  ${(props) =>
    props.id === "p2" &&
    css`
      background-image: linear-gradient(
        to right bottom,
        var(--color-secondary-light),
        var(--color-secondary-dark)
      );
    `}
`;

const Heading = styled.h2`
  width: 75%;
  font-weight: 300;
  text-transform: uppercase;
  font-size: 2.8rem;
  color: $color-white;
`;

const Span = styled.span`
  text-align: center;
  padding: 1rem;
  border-radius: 10px;
  ${(props) =>
    props.id === "h1" &&
    css`
      /* background-image: linear-gradient(
        to right bottom,
        var(--color-primary-light-opacity),
        var(--color-primary-dark-opacity)
      ); */
      background-color: var(--color-primary-dark);
    `}
  ${(props) =>
    props.id === "h2" &&
    css`
      /* background-image: linear-gradient(
        to right bottom,
        var(--color-secondary-light),
        var(--color-secondary-dark)
      ); */
      background-color: var(--color-secondary-dark-2);
    `}
`;

const List = styled.ul`
  width: 100%;
`;

const ListElement = styled.li`
  text-align: center;
  padding: 1rem;
  font-size: 1.5rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-light-2);
  }
`;

const Card = styled.div`
  height: 45rem;
  position: relative;
  width: 30rem;
  margin-top: -3rem;
  perspective: 150rem;

  &:hover {
    ${Front} {
      transform: rotateY(180deg);
    }
  }
  &:hover {
    ${Back} {
      transform: rotateY(0);
    }
  }
`;

const ActionBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: var(--color-white);
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  &:focus {
    outline: none;
  }
  ${(props) =>
    props.id === "b1" &&
    css`
      background-color: var(--color-primary-dark);
    `}
  ${(props) =>
    props.id === "b2" &&
    css`
      background-color: var(--color-secondary-dark);
    `}
`;

const Only = styled.span``;
const Price = styled.span`
  font-size: 5rem;
`;

function Pricing({ id }) {
  return (
    <StyledPricing id={id}>
      <Container>
        <Card>
          <Front>
            <Picture id="p1">
              <Heading>
                <Span id="h1">الاشتراك الاساسي</Span>
              </Heading>
            </Picture>
            <List>
              <ListElement>
                قم بإدارة ما يصل إلى 300 حيوان أو مجموعات أو قطعان نشطة متعددة
                الأنواع
              </ListElement>
              <ListElement>
                إدارة المهام لما يصل إلى 5 أعضاء في الفريق
              </ListElement>
              <ListElement>
                سجلات كاملة للماشية بما في ذلك السجلات الصحية والعلاجية
                والتذكيرات
              </ListElement>
              <ListElement>علم الأنساب والنسب</ListElement>
              <ListElement>إدارة وسجلات الأفراد والجماعات/القطيع</ListElement>
              <ListElement>مميزات اخرى</ListElement>
            </List>
          </Front>
          <Back id="1">
            <ActionBox>
              <Only>فقط</Only>
              <Price>99$</Price>
              <Button
                id="b1"
                variation="secondary"
                onClick={() => {
                  document
                    .getElementById("subscribe")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                إشترك الان
              </Button>
            </ActionBox>
          </Back>
        </Card>
        <Card>
          <Front>
            <Picture id="p2">
              <Heading>
                <Span id="h2">الاشتراك الممتاز</Span>
              </Heading>
            </Picture>
            <List>
              <ListElement>
                جميع ما قي الاشتراك الاساسي بالإضافة الى
              </ListElement>
              <ListElement>
                دعم ما يصل إلى 5000 مجموعة أو قطعان من الحيوانات النشطة أو أكثر.
                اتصل بنا للمزيد.
              </ListElement>
              <ListElement>عناصر المخزون غير محدودة</ListElement>
              <ListElement>تتبع التدقيق وإعداد التقارير</ListElement>
              <ListElement>الوصول المبكر إلى الميزات الجديدة</ListElement>
              <ListElement>مدير حساب مخصص ومراجعات تحسين الحساب</ListElement>
            </List>
          </Front>
          <Back id="2">
            <ActionBox>
              <Only>فقط</Only>
              <Price>299$</Price>
              <Button
                id="b2"
                variation="secondary"
                onClick={() => {
                  document
                    .getElementById("subscribe")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                إشترك الان
              </Button>
            </ActionBox>
          </Back>
        </Card>
      </Container>
    </StyledPricing>
  );
}

export default Pricing;
