import clsx from "clsx"

const AccordionTrigger = ({ children, onToggle, level = 0 }) => {

    const triggerClasss = clsx(
        "dark:bg-dark-100 flex items-center justify-between w-full text-gray-400 dark:text-gray-500 cursor-pointer transition-all duration-400",
        level === -1 && "py-2",
        level === 0 && "border-t-2 py-4 px-4 text-sm border-gray-100 dark:border-dark-200",
        level === 1 && "py-3 bg-gray-100 text-sm dark:bg-dark-200/50 px-2",
        level >1&&"py-2 px-1.5 bg-gray-100"
    )

    return (
        <h2>
            <button className={triggerClasss} onClick={onToggle}>
                {children}
            </button>
        </h2>
    )
}

export default AccordionTrigger;