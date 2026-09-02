import { FaAngleDown } from "react-icons/fa";
import AccordionItem from "../../../components/common/Accordion/AccordionItem"
import ProductCard from '../../../components/common/ProductCard/ProductCard'
import useAccordion from "../../../hooks/useAccordion";
import CategoryLink from "../Mobile/components/CategoryLink";
import clsx from "clsx";

const CategoryNode = ({ parentId, category, level = 0 }) => {
  const { isOpen: checkIsOpen, toggle } = useAccordion();

  const opened = checkIsOpen(parentId, category.id);

  const handleToggle = () => {
    toggle(parentId, category.id)
  }

  const trigger = (opened) => (
    <>
      <span>{category.title}</span>

      <FaAngleDown className={clsx('transition-transform',
        opened ? "rotate-180" : "rotate-0"
      )} />
    </>
  );

  const content = (
    <>
      <span className="flex w-full h-0.5 bg-gray-400/50 mb-3"></span>
      <CategoryLink category={category} />
      {
        category.subCategories?.map((subCategory) => (
          <CategoryNode
            key={subCategory.id}
            parentId={category.id}
            category={subCategory}
            level={level + 1}
          />
        ))
      }
      <div className='grid grid-cols-2 gap-2 '>
        {
          category.products?.map((product) => (
            <ProductCard key={product.id} />
          ))
        }
      </div>
    </>
  )

  return (
    <AccordionItem
      trigger={trigger}
      content={content}
      isOpen={opened}
      level={level}
      onToggle={handleToggle}
    />
  )
}

export default CategoryNode