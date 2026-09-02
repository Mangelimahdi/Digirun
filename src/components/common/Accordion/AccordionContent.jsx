import clsx from "clsx";
import { useEffect, useRef, useState } from "react"

const AccordionContent = ({ isOpen, children, level = 0 }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!contentRef.current) return;
    if (!isOpen) {
      setHeight(0);
      return
    }

    const observer = new ResizeObserver(() => {
      setHeight(contentRef.current.scrollHeight)
    });

    observer.observe(contentRef.current);

    setHeight(contentRef.current.scrollHeight);

    return () => observer.disconnect();

  }, [isOpen])

  const contentClass = clsx(
    "px-4 pb-4 dark:bg-dark-100",
    level === -1 && "p-0!",
    level === 0 && "dark:bg-dark-100",
    level === 1 && "dark:bg-dark-200/50"
  )

  return (
    <div style={{ height }} className="transition-[height] overflow-hidden">
      <div className={contentClass} ref={contentRef}>
        {children}
      </div>
    </div>
  )
}

export default AccordionContent