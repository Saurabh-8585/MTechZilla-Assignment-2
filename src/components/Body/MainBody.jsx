import { useState } from 'react'
import Button from '../Buttons/Button'
import SearchInput from '../Inputs/SearchInput'
import { BiLogoGithub, BiSearch } from 'react-icons/bi'
import Cards from '../Cards/Cards'
import useFetch from '../../hooks/useFetch'
import LoadingSpinner from '../Loader/LoadingSpinner'

const MainBody = () => {
    const [userInput, setUserInput] = useState('')
    const [inputError, setInputError] = useState(null)

    const apiUrl = `https://api.github.com/users/${userInput}`
    const { data, error, loading, fetchData } = useFetch()

    const handleOnClick = (e) => {
        e.preventDefault()
        if (userInput.trim() === '') {
            setInputError('Please enter a username')
        } else {
            setInputError(null)
            fetchData(apiUrl)
        }
    }

    return (

        <div className=' flex justify-center items-center gap-10 mt-10 flex-col p-4'>

            <form className="flex justify-center items-center gap-3 my-10" action=''>

                <SearchInput
                    placeholder="Enter Username"
                    userInput={userInput}
                    setUserInput={setUserInput}
                    setInputError={setInputError} />

                <Button
                    btnIcon={<BiSearch />}
                    btnText='Search'
                    handleOnClick={handleOnClick} />
            </form>
            {inputError && <span className='text-red-500 font-semibold'>{inputError}</span>}
            {loading && <LoadingSpinner />}

            {error &&
                <div className="bg-red-100 text-red-700 p-4 rounded-md">
                    An error occurred while fetching  data:
                </div>
            }
            {
                data.length !== 0 && <Cards userData={data} />
            }
            {userInput.length === 0 &&
                <BiLogoGithub
                    className={`text-9xl font-semibold  my-10 text-indigo-600 ${inputError && 'text-red-500'}`} />
            }
        </div >
    )
}

export default MainBody