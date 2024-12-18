import { useState } from "react";
import "./Footer.css";
import { Flex, TextField, Button, Box, Dialog } from "@radix-ui/themes";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const [demoEmail, setDemoEmail] = useState(""); // For "GET A DEMO"
  const [newsletterEmail, setNewsletterEmail] = useState(""); // For "JOIN"
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");

  const handleDemoSubmit = async () => {
    if (!demoEmail) {
      alert("Please enter your work email to get a demo.");
      return;
    }

    try {
      await emailjs.send(
        "service_o8kas37", // Your EmailJS service ID
        "template_8dxwrkl", // Your EmailJS template ID
        { user_email: demoEmail, message: "Requesting a Demo" },
        "UmlBP-6HgGXOHrc4x" // Your EmailJS public key
      );
      setDialogMessage(
        "Thank you for requesting a demo. You'll be hearing from our team shortly!"
      );
      setDialogOpen(true); // Open the dialog
      setDemoEmail(""); // Clear the input field
    } catch (error) {
      console.error("Error sending demo request:", error);
      alert("Failed to send demo request. Please try again.");
    }
  };

  const handleNewsletterSubmit = async () => {
    if (!newsletterEmail) {
      alert("Please enter your email to subscribe to the newsletter.");
      return;
    }

    try {
      await emailjs.send(
        "service_o8kas37", // Your EmailJS service ID
        "template_0q0usgd", // Your EmailJS template ID
        { user_email: newsletterEmail, message: "Subscribed to Newsletter" },
        "UmlBP-6HgGXOHrc4x" // Your EmailJS public key
      );
      setDialogMessage(
        "Thank you for joining the newsletter. You'll be hearing from our team shortly!"
      );
      setDialogOpen(true); // Open the dialog
      setNewsletterEmail(""); // Clear the input field
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
      alert("Failed to subscribe. Please try again.");
    }
  };

  return (
    <>
      <Flex className="footer-body">
        <div className="footer-content">
          <div className="footer-statement">
            TAKE YOUR CUSTOMER ADVOCACY TO NEW HEIGHTS
          </div>
          <div className="email-container">
            <div className="email-prompt">EMAIL</div>
            <Box width="300px">
              <TextField.Root
                size="2"
                placeholder="Your work email"
                value={demoEmail}
                onChange={(e) => setDemoEmail(e.target.value)} // Capture input
              />
            </Box>
            <div className="demo-button">
              <Button onClick={handleDemoSubmit}>GET A DEMO</Button>
            </div>
          </div>
        </div>
      </Flex>

      <Flex className="sub-footer">
        <Flex className="newsletter-section">
          <div className="get-insights-title">GET INSIGHTS</div>
          <div className="get-insights-text">
            Sign up for our newsletter to receive customer advocacy insights
          </div>
          <Flex className="get-insights-submit">
            <Box width="300px">
              <TextField.Root
                size="2"
                placeholder="Your work email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)} // Capture input
              />
            </Box>
            <Button ml="10px" onClick={handleNewsletterSubmit}>
              JOIN
            </Button>
          </Flex>
        </Flex>

        <Flex className="company-info">
          <div className="company-name">AUTUMN</div>
          <div className="address">
            1500 Broadway <br /> New York, NY
          </div>
        </Flex>
      </Flex>

      {/* Success Dialog */}
      <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
        <Dialog.Content maxWidth="450px">
          <Dialog.Title>Welcome to Autumn!</Dialog.Title>
          <Dialog.Description>{dialogMessage}</Dialog.Description>
          <Flex justify="end" mt="4">
            <Button onClick={() => setDialogOpen(false)}>Close</Button>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
};

export default Footer;
