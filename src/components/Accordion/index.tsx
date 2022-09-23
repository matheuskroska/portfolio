import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './Accordion.style';

export const AccordionDemo = () => (
  <Accordion type="single" /*defaultValue="item-1"*/ collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>what did you use to build this site?</AccordionTrigger>
      <AccordionContent>
        react, typescript, raddix primitives, raddix colors and stitches ( also
        from raddix)
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2">
      <AccordionTrigger>Is it unstyled?</AccordionTrigger>
      <AccordionContent>
        Yes. It's unstyled by default, giving you freedom over the look and
        feel.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-3">
      <AccordionTrigger>Can it be animated?</AccordionTrigger>
      <AccordionContent>
        Yes! You can animate the Accordion with CSS or JavaScript.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export default AccordionDemo;
