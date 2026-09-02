import AccordionContent from "./AccordionContent"
import AccordionTrigger from "./AccordionTrigger"

const AccordionItem = ({ trigger, content, isOpen, onToggle, level }) => {
    return (
        <div>
            <AccordionTrigger onToggle={onToggle} level={level}>
                {trigger(isOpen)}
            </AccordionTrigger>

            <AccordionContent isOpen={isOpen} level={level}>
                {content}
            </AccordionContent>
        </div>
    )
}


export default AccordionItem;