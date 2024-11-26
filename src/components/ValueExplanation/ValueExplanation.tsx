import { Flex } from "@radix-ui/themes";
import "./ValueExplanation.css"

const ValueExplanation = () => {

  return (
    <>
      <Flex className="three-keys">
        <Flex className="key-section">
          <div className="key-title">RECRUIT CUSTOMERS</div>
          <img src="/images/revenueGIF.gif" alt="revenueGIF" className="key-gif" />
          <div className="key-explanation">Turn loyal customers into champions</div>
        </Flex>
        <Flex className="key-section">
          <div className="key-title">MAP NETWORKS</div>
          <img src="/images/networksGIF.gif" alt="networksGIF" className="key-gif" />
          <div className="key-explanation">Automate the process of identifying valuable connections</div>
        </Flex>
        <Flex className="key-section">
          <div className="key-title">MANAGE INCENTIVES</div>
          <img src="/images/incentivesGIF.gif" alt="incentivesGIF" className="key-gif" />
          <div className="key-explanation">Reward customers for references and referals</div>
        </Flex>
      </Flex>
    </>
  )
}

export default ValueExplanation;