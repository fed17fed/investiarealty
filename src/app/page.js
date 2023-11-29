import Home_V5 from "./(home)/home-v5/page";
import Wrapper from "./layout-wrapper/wrapper";

export const metadata = {
  title: "Investia || Investia - Real Estate Agents ltd",
};

export default function MainRoot() {
  return (
    <Wrapper>
      <Home_V5 />
    </Wrapper>
  );
}
