import "./LandingPage.css";
import { Flex } from "@radix-ui/themes"
import ValueExplanation from "../../components/ValueExplanation/ValueExplanation";

const LandingPage = () => {
  
  return (
    <>
      <Flex className="landing-page">
        <Flex className="vs-section">
          <div className="value-statement">
            We turn <span className="underline">customers</span> into a high performing <span className="underline">revenue</span> <span className="underline">channel</span>
          </div>
        </Flex>
        <div className="how-it-works">
          How it works
        </div>
        <ValueExplanation />
      </Flex>
    </>
  )
}

export default LandingPage;