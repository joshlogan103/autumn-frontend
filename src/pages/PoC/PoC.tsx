import "./PoC.css";
import { Flex, Button } from "@radix-ui/themes";
import { useRef } from "react";

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
            $X00 for a completed Introduction <br />
            Y% of the first year contract value for any facilitated purchase <br />
            Visa gift-card, amazon gift-card, or a donation to the charity of your choice
          </Flex>
          
        </Flex>
      </div>
    </>
  );
};

export default PoC;
