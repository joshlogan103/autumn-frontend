import { Flex, Text } from "@radix-ui/themes";
import "./HowItWorks.css";

interface HowItWorksProps {
  companyName: string;
  companyFlowChart: string;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ companyName, companyFlowChart }) => {
  return (
    <Flex className="how-it-works-container">
      {/* Title */}
      <Flex className="how-it-works-title">HOW IT WORKS</Flex>

      <img src={companyFlowChart}
      alt="How It Works Flowchart" className="how-it-works-flowchart-image" />

      {/* Flowchart */}
      <div className="flowchart-container">
        {/* Node 1 */}
        <div className="node node-1">
        <Text>{companyName}’s customers can upload their network in a <Text className="bold">secure, easy, and anonymized</Text> way.</Text>
        </div>
        {/* Node 2 */}
        <div className="node node-2">
        <Text>Autumn shows {companyName} the Company Name and Role Title for anyone in your network within their strategic account list. 
        <Text className="bold"> Autumn will never show personally identifiable information.</Text></Text>
        </div>
        {/* Node 3 */}
        <div className="node node-3">
        <Text>{companyName} reviews the anonymized matches, and can request an introduction from you, providing as much help as needed along the way.</Text>
        </div>
        {/* Node 4 */}
        <div className="node node-4">
        <Text>Autumn tracks the progress of any introduction you make and facilitates payment once complete.</Text>
        </div>
        {/* Node 5 */}
        {/* <div className="node node-5">
        <Text>Autumn tracks the progress of any introduction you make and facilitates payment once complete.</Text>
        </div> */}

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
          {/* <path
            d="M620,480 H420 V530"
            fill="none"
            stroke="black"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          /> */}
        </svg>
      </div>
    </Flex>
  );
};

export default HowItWorks;
