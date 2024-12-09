import "./PoC2.css";
import { Flex } from "@radix-ui/themes";
import { useRef } from "react";
import Footer from "../../components/Footer/Footer";
import HowToUpload from "../../components/HowToUpload/HowToUpload";
import HowItWorks from "../../components/HowItWorks/HowItWorks";

const PoC2 = () => {
  const section3Ref = useRef<HTMLDivElement>(null);

  // const handleGetStarted = () => {
  //   if (section3Ref.current) {
  //     section3Ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  //   }
  // };
  

  return (
    <>
      <div className="page-wrapper">
        <div className="section-1">
          <Flex className="grow-with-autumn">GROW WITH AUTUMN</Flex>
          <Flex className="poc-customer">
            <img
              src="/images/scaleroLogo.webp"
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
          {/* <div className="get-started-wrapper">
            <Button size="3" className="get-started-button" onClick={handleGetStarted}>
              GET STARTED
            </Button>
          </div> */}
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

        <Flex className="how-it-works-section">
          <HowItWorks />
        </Flex>

        <Flex className="how-to-upload-section">
          <HowToUpload />
        </Flex>

        <div className="footer-section">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default PoC2;
