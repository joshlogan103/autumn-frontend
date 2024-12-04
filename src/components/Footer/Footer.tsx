import "./Footer.css";
import { Flex, TextField, Button, Box } from "@radix-ui/themes";

const Footer = () => {
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
              <TextField.Root size="2" placeholder="Your work email" />
            </Box>
            <div className="demo-button">
              <Button>GET A DEMO</Button>
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
              <TextField.Root size="2" placeholder="Your work email" />
            </Box>
            <Button ml="10px">JOIN</Button>
          </Flex>
        </Flex>

        <Flex className="company-info">
          <div className="company-name">AUTUMN</div>
          <div className="address">
            1500 Broadway <br /> New York, NY
          </div>
        </Flex>
      </Flex>
    </>
  );
};

export default Footer;
