import React, { useRef, useState } from "react";
import { Dialog, Flex, Button, Link, Text } from "@radix-ui/themes";
import emailjs from "@emailjs/browser";
import "./HowToUpload.css";

interface HowToUploadProps {
  companyName: string;
}

const HowToUpload: React.FC<HowToUploadProps> = ({ companyName }) => {
  const steps = [
    <>
      Log on to{" "}
      <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </Link>
    </>,
    "On the top right, click the down-arrow under your photo next to ‘me’",
    "Under Account, click Settings and Privacy",
    "On the left-hand side, click Data Privacy",
    "Click 'Get a copy of your data'",
    "Click 'Connections' under ‘Want Something In Particular?’ and click 'Request Archive'",
    "After about 10 minutes, your data will be available to download from the same page by clicking 'Download archive'",
    "Upload here!",
  ];

  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setSelectedFileName(file.name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) {
      return;
    }

    // Check for missing fields
    const formData = new FormData(formRef.current);
    if (!formData.get("user_name") || !formData.get("user_email") || !formData.get("my_file")) {
      alert("Please complete all required fields.");
      return;
    }

    setIsSending(true);

    try {
      // Send form data via emailjs.sendForm
      await emailjs.sendForm(
        "service_o8kas37", // EmailJS Service ID
        "template_eqgefuv", // EmailJS Template ID
        formRef.current, // Form element reference
        "UmlBP-6HgGXOHrc4x" // EmailJS Public Key
      );

      // Close the upload form and open success dialog
      setUploadDialogOpen(false);
      setSuccessDialogOpen(true);

      formRef.current.reset(); // Reset the form
      setSelectedFileName(null); // Clear the selected file
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

      {/* Upload CSV Dialog */}
      <Dialog.Root open={uploadDialogOpen} onOpenChange={setUploadDialogOpen}>
        <Dialog.Trigger>
          <Button size="3" className="upload-csv">UPLOAD CSV</Button>
        </Dialog.Trigger>

        <Dialog.Content maxWidth="450px">
          <Dialog.Title>Upload Your CSV</Dialog.Title>
          <Dialog.Description>
            Please provide your details and select a CSV file to upload.
          </Dialog.Description>

          <form ref={formRef} onSubmit={handleSubmit} encType="multipart/form-data">
            <Flex direction="column" gap="3" mt="4">
              <label>
                <span>Name:</span>
                <input type="text" name="user_name" required className="text-input" />
              </label>
              <label>
                <span>Email:</span>
                <input type="email" name="user_email" required className="text-input" />
              </label>
              {/* Hidden input for company name */}
              <input type="hidden" name="company_name" value={companyName} />
              <label className="file-input-wrapper">
                <span className="file-input-button">Choose File</span>
                <input
                  type="file"
                  name="my_file"
                  accept=".csv"
                  required
                  className="file-input-hidden"
                  onChange={handleFileChange}
                />
              </label>
              {selectedFileName && (
                <Text size="2" mt="2" className="selected-file">
                  Selected file: {selectedFileName}
                </Text>
              )}
            </Flex>

            <Flex gap="3" mt="4" justify="end">
              <Dialog.Close>
                <Button variant="surface" color="gray" disabled={isSending}>Cancel</Button>
              </Dialog.Close>
              <Button variant="solid" type="submit" disabled={isSending}>
                {isSending ? "Sending..." : "Submit"}
              </Button>
            </Flex>
          </form>
        </Dialog.Content>
      </Dialog.Root>

      {/* Success Dialog */}
      <Dialog.Root open={successDialogOpen} onOpenChange={setSuccessDialogOpen}>
        <Dialog.Content maxWidth="450px">
          <Dialog.Title>Upload Successful</Dialog.Title>
          <Dialog.Description>
            Your file has been successfully uploaded. Thank you!
          </Dialog.Description>
          <Flex justify="end" mt="4">
            <Button onClick={() => setSuccessDialogOpen(false)}>Close</Button>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </Flex>
  );
};

export default HowToUpload;
