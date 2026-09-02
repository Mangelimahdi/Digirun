
import { useState } from "react"
import ArticlesTab from './tabs/ArticlesTab.jsx';
import BrandsTab from './tabs/BrandsTab.jsx';
import categories from '../../../data/categories.js';
import CategoryTabs from "./components/CategoryTabs.jsx";
import AccordionProvider from "../../../Contexts/Accordion/AccordionProvider";
import ProductsTab from "./tabs/ProductsTab";

const MobileCategoriesMenu = () => {
    const [activeTab, setActiveTab] = useState('products');

    return (
        <div className="mb-4">
            <CategoryTabs
                activeTab={activeTab}
                onChangeTab={setActiveTab}
            />
            <div key={activeTab} className="animate-tab">
                {
                    activeTab === "products" &&
                    <AccordionProvider>
                        <ProductsTab categories={categories} />
                    </AccordionProvider>
                }
                {
                    activeTab === "articles" && (
                        <ArticlesTab />
                    )
                }
                {
                    activeTab === "brands" && (
                        <BrandsTab />
                    )
                }
            </div>
        </div>
    )
}

export default MobileCategoriesMenu