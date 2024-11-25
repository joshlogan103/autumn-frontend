import "./LandingPage.css";
import { Flex } from "@radix-ui/themes"
import ValueExplanation from "../../components/ValueExplanation/ValueExplanation";
import PerformanceAndUseCases from "../../components/PerformanceAndUseCases/PerformanceAndUseCases";

const LandingPage = () => {
  
  return (
    <>
      <Flex className="landing-page">

        <div className="vs-section">
          <div className="value-statement">
            WE TURN <span className="styleword">CUSTOMERS</span> INTO A HIGH PERFORMING <span className="styleword">REVENUE</span> <span className="styleword">CHANNEL</span>
          </div>
        </div>

        <div className="how-it-works">
          HOW IT WORKS
        </div>

        <div className="value-explanation-container">
          <ValueExplanation />
        </div>

        <div className="perf-and-use-container">
          <PerformanceAndUseCases />
        </div>

      </Flex>
    </>
  )
}

export default LandingPage;