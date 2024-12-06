import React, { useRef, useState } from "react";
import { Dialog, Flex, Button, Text, Link } from "@radix-ui/themes";
import emailjs from "@emailjs/browser";
import "./HowToUpload.css";

const HowToUpload = () => {
  const steps = [
    <>
      Log on to <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
    </>,
    "On the top right, click the down-arrow under your photo next to ‘me’",
    "Under Account, click Settings and Privacy",
    "On the left-hand side, click Data Privacy",
    "Click 'Get a copy of your data'",
    "Click 'Connections' under ‘Want Something In Particular?’ and click 'Request Archive'",
    "After about 10 minutes, your data will be available to download from the same page by clicking 'Download archive'",
    "Upload here!",
  ];

  const formRef = useRef<HTMLFormElement>(null); // Reference to the form
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) {
      alert("Form not found. Please try again.");
      return;
    }

    setIsSending(true);

    try {
      // Send form data via emailjs.sendForm
      await emailjs.sendForm(
        "service_o8kas37",        // EmailJS Service ID
        "template_eqgefuv",       // EmailJS Template ID
        formRef.current,          // Form element reference
        "UmlBP-6HgGXOHrc4x"       // EmailJS Public Key
      );

      alert("CSV sent successfully!");
      formRef.current.reset(); // Reset the form after submission
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send CSV. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Flex className="how-to-upload-section" direction="column" align="center">
      <Flex className="how-to-upload-container" direction="column">
        <div className="how-to-upload-title">HOW TO UPLOAD</div>
        <Flex className="how-to-upload-instructions" direction="column">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <Flex className="step-item" align="center">
                <div className="step-number">{index + 1}.</div>
                <div className="step-text">{step}</div>
              </Flex>
              {index < steps.length - 1 && <div className="step-divider" />}
            </React.Fragment>
          ))}
        </Flex>
      </Flex>

      <Dialog.Root>
        <Dialog.Trigger>
          <Button size="3" className="upload-csv">UPLOAD CSV</Button>
        </Dialog.Trigger>

        <Dialog.Content maxWidth="450px">
          <Dialog.Title>Upload Your CSV</Dialog.Title>
          <Dialog.Description>
            Please select a CSV file to upload.
          </Dialog.Description>

          <form ref={formRef} onSubmit={handleSubmit} encType="multipart/form-data">
            <Flex direction="column" gap="3" mt="4">
              <label className="file-input-wrapper">
                <span className="file-input-button">Choose File</span>
                <input
                  type="file"
                  name="my_file" // Must match the parameter name in your EmailJS template
                  accept=".csv"
                  className="file-input-hidden"
                />
              </label>
            </Flex>

            <Flex gap="3" mt="4" justify="end">
              <Dialog.Close>
                <Button variant="surface" color="gray" disabled={isSending}>
                  Cancel
                </Button>
              </Dialog.Close>
              <Button variant="solid" type="submit" disabled={isSending}>
                {isSending ? "Sending..." : "Submit"}
              </Button>
            </Flex>
          </form>
        </Dialog.Content>
      </Dialog.Root>
    </Flex>
  );
};

export default HowToUpload;
