import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './Accordion.style';

export const AccordionDemo = () => (
  <Accordion type="single" /*defaultValue="item-1"*/ collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>What did you use to build this site?</AccordionTrigger>
      <AccordionContent>
        react, typescript, raddix primitives, raddix colors and stitches ( also
        from raddix)
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2">
      <AccordionTrigger>
        What do you like to do in your spare time?
      </AccordionTrigger>
      <AccordionContent>
        review coffee shops, try new things, watch series and
        movies ;)
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-3">
      <AccordionTrigger>What is your best technical quality?</AccordionTrigger>
      <AccordionContent>be able to learn</AccordionContent>
    </AccordionItem>
  </Accordion>
);

export default AccordionDemo;
