import "./PerformanceAndUseCases.css";
import { Flex } from "@radix-ui/themes";
import UseCasesAccordian from "../UseCasesAccordian/UseCasesAccordian";

const PerformanceAndUseCases = () => {

  return (
    <>
      <Flex className="perf-and-use-container">
        <Flex className="performance-container">
          <div className="pau-title">
            PERFORMANCE
          </div>
          <Flex className="performance-items">
            <div>
              <span className="performance-number">65%</span> AVG INCREASE IN REFERRALS
            </div>
            <div>
              <span className="performance-number">80%</span> AVG INCREASE IN REFERANCE NETWORK
            </div>
          </Flex>
        </Flex>
        <Flex className="use-cases-container">
          <div className="pau-title">
            USE CASES
          </div>
          <Flex className="use-case-items">
            <UseCasesAccordian />
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default PerformanceAndUseCases;