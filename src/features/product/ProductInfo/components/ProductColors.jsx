
const ProductColors = ({ colors, selectedColor,
    onColorChange }) => {
    return (
        <div className='flex flex-col'>
            <h2 className='dark:text-gray-500 my-4'>
                رنگ: {selectedColor?.name}
            </h2>
            <div className='flex items-center gap-x-5'>
                {colors.map((color) => (
                    <button key={color.value} className={`flex items-center justify-center w-10 h-10 mb-3 rounded-full p-1.5 transition-all duration-300 ease-in-out ring-1 focus-within:ring-4 focus-within:ring-primary-300 cursor-pointer ${color.name === selectedColor?.name ? "ring-primary-300 ring-4" : "ring-gray-300 "} `}
                        onClick={() => {
                            onColorChange(color)
                        }}>
                        <span className="block w-full h-full rounded-full shadow-100"
                            style={{ backgroundColor: color.value }} >
                        </span>
                    </button>

                ))}
            </div>
        </div >)
}

export default ProductColors