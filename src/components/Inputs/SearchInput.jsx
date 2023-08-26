
const SearchInput = ({ placeholder, setUserInput, userInput, setInputError }) => {
    return (
        <input
            // className="rounded-xl w-[15rem] md:w-[25rem] bg-gray-200 outline-none py-3 px-4 text-xs focus:px-6 duration-200"
            className="rounded-xl w-full md:w-[25rem] bg-gray-200 outline-none py-3 px-4 text-xs focus:px-6 duration-200"
            type="text"
            value={userInput}
            onChange={(e) => {
                setUserInput(e.target.value)
                setInputError(null)
            }}
            placeholder={placeholder}
            required
        />


    )
}

export default SearchInput