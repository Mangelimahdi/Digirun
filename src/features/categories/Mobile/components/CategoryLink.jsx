import { FaAngleLeft } from 'react-icons/fa'
import { Link } from 'react-router';

const CategoryLink = ({ category }) => {
    return (
        <Link className='text-primary-300 flex items-center gap-1 text-xs my-3' to={"/"}>
            همه محصولات دسته {category.title}
            <FaAngleLeft />
        </Link>
    )
}

export default CategoryLink;