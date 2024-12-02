import "./PoC.css";
import { Flex, Button } from "@radix-ui/themes";
import { useRef } from "react";
import Companies from "../../components/Companies/Companies";
import Footer from "../../components/Footer/Footer";
import HowToUpload from "../../components/HowToUpload/HowToUpload";

const PoC = () => {
  const section3Ref = useRef<HTMLDivElement>(null);

  const handleGetStarted = () => {
    if (section3Ref.current) {
      section3Ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  

  return (
    <>
      <div className="page-wrapper">
        <div className="section-1">
          <Flex className="grow-with-autumn">GROW WITH AUTUMN</Flex>
          <Flex className="poc-customer">
            <img
              src="/images/champifyLogo.png"
              alt="docusignLogo"
              className="company-logo-alt"
            />
          </Flex>
        </div>
        <Flex className="section-2">
          <Flex className="s1-wrapper">
            <Flex className="s1-text">
              AUTUMN HELPS COMPANIES FIND MORE HAPPY CUSTOMERS BY LEVERAGING
              THEIR BEST CUSTOMERS’ NETWORKS
            </Flex>
          </Flex>
          <div className="get-started-wrapper">
            <Button className="get-started-button" onClick={handleGetStarted}>
              GET STARTED
            </Button>
          </div>
        </Flex>
        <Flex className="section-3" ref={section3Ref}>
          <Flex className="reward-terms-title">
            REWARD TERMS
          </Flex>
          <Flex className="reward-terms-details">
            <div className="reward-term-item">
            <strong>$X00</strong> for a completed Introduction
            </div>
            <div className="reward-term-item">
            <strong>Y% </strong>of the first year contract value for any facilitated purchase
            </div>
            <div className="reward-term-item">
            Visa gift-card, amazon gift-card, or a donation to the charity of your choice
            </div>
          </Flex>
        </Flex>

        <Flex className="how-to-upload-section">
          <HowToUpload />
        </Flex>

        <Flex className="companies-section">
          <Companies />
        </Flex>

        <div className="footer-section">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default PoC;
