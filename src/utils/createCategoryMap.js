const createCategoryMap = (categories) => {
    const map = new Map();

    const traverse = (categories) => {
        for (const category of categories) {
            map.set(category.id, category);

            if (category.subCategories?.length) {
                traverse(category.subCategories)
            }
        }
    }

    traverse(categories);
    return map;
}

export default createCategoryMap;