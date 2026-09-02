import CategoryNode from "../../components/CategoryNode"

const ProductsTab = ({ categories }) => {
    return (
        categories.map((category) => (
            <CategoryNode
                key={category.id}
                category={category}
                parentId="root"
                level={0}
            />
        ))
    )
}


export default ProductsTab