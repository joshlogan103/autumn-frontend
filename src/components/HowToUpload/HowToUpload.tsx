import "./HowToUpload.css";
import { Flex } from "@radix-ui/themes";

const HowToUpload = () => {
  const steps = [
    "Log onto LinkedIn",
    "On the top right, click the down-arrow under your photo next to ‘me’",
    "Under Account, click Settings and Privacy",
    "On the left-hand side, click Data Privacy",
    "Click 'Get a copy of your data'",
    "Click 'Connections' under ‘Want Something In Particular?’ and click request archive",
    "Download the CSV once it gets emailed to you, which takes about 10 minutes to complete",
    "Upload here!",
  ];

  return (
    <Flex className="how-to-upload-container" direction="column">
      <div className="how-to-upload-title">HOW TO UPLOAD</div>
      <Flex className="how-to-upload-instructions" direction="column">
        {steps.map((step, index) => (
          <Flex
            key={index}
            className={`step-item ${index % 2 === 0 ? "cyan-background" : "white-background"}`}
            align="center"
          >
            <div className="step-number">{index + 1}.</div>
            <div className="step-text">{step}</div>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default HowToUpload;
