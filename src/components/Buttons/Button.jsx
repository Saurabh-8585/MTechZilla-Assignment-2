const Button = ({ btnIcon, btnText, handleOnClick }) => {
    return (
        

            <button
                type="submit"
                className="py-2 px-2 md:px-4 flex justify-center items-center gap-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg disabled:bg-gray-400 disabled:text-black cursor-pointer"
                onClick={handleOnClick}

            >
                {btnText}
                {btnIcon}
            </button>
       
    )
}

export default Button