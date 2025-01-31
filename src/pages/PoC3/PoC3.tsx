import "./PoC3.css";
import { Flex } from "@radix-ui/themes";
import { useRef } from "react";
import Footer from "../../components/Footer/Footer";
import HowToUpload from "../../components/HowToUpload/HowToUpload";
import HowItWorks from "../../components/HowItWorks/HowItWorks";

const PoC3 = () => {
  const section3Ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="page-wrapper">
        <div className="section-1">
          <Flex className="grow-with-autumn">GROW WITH AUTUMN</Flex>
          <Flex className="poc-customer">
            <img
              src="/images/SimonDataVector.png"
              alt="docusignLogo"
              className="company-logo-alt"
            />
          </Flex>
        </div>
        <Flex className="section-2">
          <Flex className="s1-wrapper">
            <Flex className="s1-text">
              AUTUMN HELPS HAPPY CUSTOMERS MAKE REFERRALS AND GET COMPENSATED
            </Flex>
          </Flex>
        </Flex>
        <Flex className="section-3" ref={section3Ref}>
          <Flex className="reward-terms-title">
            REWARD TERMS
          </Flex>
          <Flex className="reward-terms-details">
            <div className="reward-term-item">
              <strong>$50 </strong>for uploading your connections
            </div>
            <div className="reward-term-item">
              <strong>$1,000</strong> for a completed Introduction
            </div>
            <div className="reward-term-item">
              <strong>15% </strong>of the value of the first year of a signed contract
            </div>
            <div className="reward-term-item">
              Visa gift-card, amazon gift-card, or a donation to the charity of your choice
            </div>
          </Flex>
        </Flex>

        <Flex className="how-it-works-section">
          <HowItWorks companyName="Simon Data" companyFlowChart="/images/SimonFlowChart.png" /> {/* Pass the company name as a prop */}
        </Flex>

        <Flex className="how-to-upload-section">
          <HowToUpload companyName="Simon Data"/>
        </Flex>

        <div className="footer-section">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default PoC3;
