import { Flex } from "@radix-ui/themes";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <Flex className="how-it-works-container">
      {/* Title */}
      <Flex className="how-it-works-title">HOW IT WORKS</Flex>

      <img src="/images/howItWorksFlowchart.png" alt="How It Works Flowchart" className="how-it-works-flowchart-image" />

      {/* Flowchart */}
      <div className="flowchart-container">
        {/* Node 1 */}
        <div className="node node-1">
          Champify uploads their list of strategic accounts and shares this webpage with customers.
        </div>
        {/* Node 2 */}
        <div className="node node-2">
          Champify’s customers can upload their network in a secure, easy, and anonymized way.
        </div>
        {/* Node 3 */}
        <div className="node node-3">
          Autumn shows Champify ONLY the companies in your network that match their strategic accounts. Autumn will never show personally identifiable information.
        </div>
        {/* Node 4 */}
        <div className="node node-4">
          Champify reviews the anonymized matches, and can request an introduction from you, providing as much help as needed along the way.
        </div>
        {/* Node 5 */}
        <div className="node node-5">
          Autumn tracks the progress of any introduction you make and facilitates payment via electronic Visa or Amazon gift card, or a direct donation to any charity of your choice.
        </div>

        {/* Arrows */}
        <svg className="arrows">
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="10"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 10 3.5, 0 7" fill="black" />
            </marker>
          </defs>
          {/* Arrow from Node 1 to Node 2 */}
          <path
            d="M770,90 H970 V140"
            fill="none"
            stroke="black"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />
          {/* Arrow from Node 2 to Node 3 */}
          <path
            d="M620,220 H420 V280"
            fill="none"
            stroke="black"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />
          {/* Arrow from Node 3 to Node 4 */}
          <path
            d="M770,350 H970 V400"
            fill="none"
            stroke="black"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />
          {/* Arrow from Node 4 to Node 5 */}
          <path
            d="M620,480 H420 V530"
            fill="none"
            stroke="black"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />
        </svg>
      </div>
    </Flex>
  );
};

export default HowItWorks;
