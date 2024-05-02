import styled from "styled-components";
import logo from "../../assets/home5.jpg";
import { HiWifi } from "react-icons/hi";
import { GiPlantWatering, GiSheep } from "react-icons/gi";

const StyledFeatures = styled.section`
  background-image: linear-gradient(
      to right bottom,
      var(--color-primary-light-opacity),
      var(--color-primary-dark-opacity)
    ),
    url(${logo});
  padding: 20rem 0;
  margin-top: -10rem;
  background-size: cover;
  clip-path: polygon(0 15vh, 100% 0, 100% 85vh, 0 100%);
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const FeatureBox = styled.div`
  width: 20%;
  text-align: center;
  padding: 2.5rem;
  font-size: 1.5rem;
  background-color: var(--color-grey-light-1-opacity);
  box-shadow: 0 2rem 4rem var(--color-black);
  border-radius: 3px;
  transition: all 0.3s;
  height: 30rem;

  &:hover {
    transform: translateY(-1rem) scale(1.02);
  }

  & svg {
    margin-bottom: 1.5rem;
    height: 4rem;
    width: 4rem;
    fill: var(--color-primary);
  }
`;

const Heading = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1.4rem;
`;
function Features({ id }) {
  return (
    <StyledFeatures id={id}>
      <FeatureBox>
        <HiWifi />
        <Heading>ابقى على اتصال</Heading>
        <Paragraph>
          ميزات إدارة المزرعة التي تساعدك على تنظيم المهام وتعيينها من أي مكان
          (حتى في وضع عدم الاتصال) حتى يتمكن عمال المزرعة من معرفة ما يتعين
          عليهم القيام به وأولويات مهام المزرعة ومتى يحين موعد العمل. اجعل من
          السهل التركيز على ما هو مهم وتتبع ما يجب إنجازه.
        </Paragraph>
      </FeatureBox>
      <FeatureBox>
        <GiSheep />
        <Heading>إدارةالمواشي</Heading>
        <Paragraph>
          حفظ سجلات الماشية المتكاملة، ورسم خرائط المزرعة، والتتبع، والرعي،
          والتربية، وإدارة الصحة، والمبيعات، وإعداد التقارير لإدارة أعمال مزدهرة
          للماشية والماعز والخنازير والأغنام والدواجن (أو أكثر).
        </Paragraph>
      </FeatureBox>
      <FeatureBox>
        <GiPlantWatering />
        <Heading>إدارة المحاصيل الزراعية</Heading>
        <Paragraph>
          قم بتبسيط تخطيط المحاصيل والحصاد وتوقعات الدخل وتصور موسمك بسهولة.
          تعاون مع فريقك لتتبع وتبسيط إدارة المزرعة والأنشطة الميدانية للمدخلات.
          تحسين أداء الإنتاجية وفهم عائد الاستثمار وتبسيط تقارير الامتثال.
        </Paragraph>
      </FeatureBox>
    </StyledFeatures>
  );
}

export default Features;
