import { Flex } from "@radix-ui/themes";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <Flex className="how-it-works-container">
      {/* Title */}
      <Flex className="how-it-works-title">HOW IT WORKS</Flex>

      {/* Flowchart */}
      <div className="flowchart-container">
        {/* Node 1 */}
        <div className="node" style={{ top: "50px", left: "50%" }}>
          Champify uploads their list of strategic accounts and shares this webpage with customers.
        </div>
        {/* Node 2 */}
        <div className="node" style={{ top: "200px", left: "calc(50% + 350px)" }}>
          Champify’s customers can upload their network in a secure, easy, and anonymized way.
        </div>
        {/* Node 3 */}
        <div className="node" style={{ top: "350px", left: "50%" }}>
          Autumn shows Champify ONLY the companies in your network that match their strategic accounts. Autumn will never show personally identifiable information.
        </div>
        {/* Node 4 */}
        <div className="node" style={{ top: "500px", left: "calc(50% + 350px)" }}>
          Champify reviews the anonymized matches, and can request an introduction from you, providing as much help as needed along the way.
        </div>
        {/* Node 5 */}
        <div className="node" style={{ top: "650px", left: "50%" }}>
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
            d="M950,100 H1150 V150"
            fill="none"
            stroke="black"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />
          {/* Arrow from Node 2 to Node 3 */}
          <path
            d="M800,250 H600 V300"
            fill="none"
            stroke="black"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />
          {/* Arrow from Node 3 to Node 4 */}
          <path
            d="M950,400 H1150 V450"
            fill="none"
            stroke="black"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />
          {/* Arrow from Node 4 to Node 5 */}
          <path
            d="M800,550 H600 V600"
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
