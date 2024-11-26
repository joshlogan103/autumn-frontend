import { Flex } from "@radix-ui/themes";
import "./ValueExplanation.css"

const ValueExplanation = () => {

  return (
    <>
      <Flex className="three-keys">
        <Flex className="key-section">
          <div className="key-title">RECRUIT CUSTOMERS</div>
          <img src="../../images/revenueGif.gif" alt="revenueGIF" className="key-gif" />
          <div className="key-explanation">Turn loyal customers into champions</div>
        </Flex>
        <Flex className="key-section">
          <div className="key-title">MAP NETWORKS</div>
          <img src="../../images/networksGif.gif" alt="revenueGIF" className="key-gif" />
          <div className="key-explanation">Automate the process of identifying valuable connections</div>
        </Flex>
        <Flex className="key-section">
          <div className="key-title">MANAGE INCENTIVES</div>
          <img src="../../images/incentivesGif.gif" alt="revenueGIF" className="key-gif" />
          <div className="key-explanation">Reward customers for references and referals</div>
        </Flex>
      </Flex>
    </>
  )
}

export default ValueExplanation;