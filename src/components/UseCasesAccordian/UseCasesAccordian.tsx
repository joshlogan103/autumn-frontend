import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import React from "react";
import "./UseCasesAccordian.css";

// Define prop types for AccordionTrigger
type AccordionTriggerProps = React.ComponentPropsWithoutRef<
  typeof Accordion.Trigger
> & {
  children: React.ReactNode;
};

// AccordionTrigger Component
const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="AccordionHeader">
    <Accordion.Trigger
      className={classNames("AccordionTrigger", className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon className="AccordionChevron" aria-hidden />
    </Accordion.Trigger>
  </Accordion.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

// Define prop types for AccordionContent
type AccordionContentProps = React.ComponentPropsWithoutRef<
  typeof Accordion.Content
> & {
  children: React.ReactNode;
};

// AccordionContent Component
const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={classNames("AccordionContent", className)}
    {...props}
    ref={forwardedRef}
  >
    <div className="AccordionContentText">{children}</div>
  </Accordion.Content>
));
AccordionContent.displayName = "AccordionContent";

// AccordionDemo Component
const AccordionDemo = () => (
  <Accordion.Root
    className="AccordionRoot"
    type="single"
    defaultValue="item-1"
    collapsible
  >
    <Accordion.Item className="AccordionItem" value="item-1">
      <AccordionTrigger>DRIVE REFERRALS</AccordionTrigger>
      <AccordionContent>
        Drive more referrals by helping your customers find quality leads in their network
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-2">
      <AccordionTrigger>AUTOMATE REFERENCES</AccordionTrigger>
      <AccordionContent>
        Find the right reference customer for every prospect by leveraging customer data
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-3">
      <AccordionTrigger>ADVANCE DEALS</AccordionTrigger>
      <AccordionContent>
        <div className="AccordionContentText">
          Leverage network mapping and CRM integrations to gain intel and advocacy on in-flight opportunities.
        </div>
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-4">
      <AccordionTrigger>STRATEGIC SUPPORT</AccordionTrigger>
      <AccordionContent>
        <div className="AccordionContentText">
          Leverage best practice consulting and implementation services to launch programs without operations support
        </div>
      </AccordionContent>
    </Accordion.Item>
  </Accordion.Root>
);

export default AccordionDemo;
