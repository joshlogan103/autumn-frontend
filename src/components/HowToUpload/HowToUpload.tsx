import React, { useState } from "react";
import { Dialog, Flex, Button, Text } from "@radix-ui/themes";
import "./HowToUpload.css";

const HowToUpload = () => {
  const steps = [
    "Log onto LinkedIn",
    "On the top right, click the down-arrow under your photo next to ‘me’",
    "Under Account, click Settings and Privacy",
    "On the left-hand side, click Data Privacy",
    "Click 'Get a copy of your data'",
    "Click 'Connections' under ‘Want Something In Particular?’ and click 'Request Archive'",
    "After about 10 minutes, your data will be available to download from the same page by clicking 'Download archive'",
    "Upload here!",
  ];

  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    console.log("Uploading file:", file);
    // Handle the upload logic here
  };

  return (
    <Flex className="how-to-upload-section" direction="column" align="center">
      <Flex className="how-to-upload-container" direction="column">
        <div className="how-to-upload-title">HOW TO UPLOAD</div>
        <Flex className="how-to-upload-instructions" direction="column">
          {steps.map((step, index) => (
            <Flex
              key={index}
              className={`step-item ${
                index % 2 === 0 ? "cyan-background" : "white-background"
              }`}
              align="center"
            >
              <div className="step-number">{index + 1}.</div>
              <div className="step-text">{step}</div>
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Dialog.Root>
        <Dialog.Trigger>
          <Button className="upload-csv">UPLOAD</Button>
        </Dialog.Trigger>

        <Dialog.Content maxWidth="450px">
          <Dialog.Title>Upload Your CSV</Dialog.Title>
          <Dialog.Description>
            Please select a CSV file to upload.
          </Dialog.Description>

          <Flex direction="column" gap="3" mt="4">
            <label className="file-input-wrapper">
              <span className="file-input-button">Choose File</span>
              <input
                type="file"
                accept=".csv"
                onChange={handleFileChange}
                className="file-input-hidden"
              />
            </label>
            {file && (
              <Text size="2" mt="2">
                Selected file: {file.name}
              </Text>
            )}
          </Flex>


          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="surface" color="gray">
                Cancel
              </Button>
            </Dialog.Close>
            <Button variant="solid" onClick={handleSubmit}>
              Submit
            </Button>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </Flex>
  );
};

export default HowToUpload;
