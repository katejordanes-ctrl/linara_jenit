'use client';
import { Accordion,AccordionItem,AccordionTrigger,AccordionContent } from '@/components/ui/accordion';
export function Questions({items}:{items:[string,string][]}){return <Accordion className="faq">{items.map(([q,a])=><AccordionItem key={q} value={q}><AccordionTrigger>{q}</AccordionTrigger><AccordionContent><p>{a}</p></AccordionContent></AccordionItem>)}</Accordion>}
