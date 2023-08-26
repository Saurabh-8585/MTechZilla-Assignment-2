
const Cards = ({ userData }) => {
  
    return (

        <>
            <div className="my-5 bg-white dark:bg-[#18191c] shadow-md  duration-200 rounded-x p-3 rounded-xl cursor-pointer hover:shadow-xl">
                <div className="relative w-full rounded-xl flex justify-center items-center my-5">
                    <img
                        className="rounded-xl "
                        src={userData.avatar_url}
                        alt="cardimage"
                    />
                </div>
                <div className="p-4 flex   gap-3 flex-col ">
                    <div className="flex justify-around items-center">
                        <small className="text-xs font-light text-primary dark:text-gray-400 flex flex-col justify-center items-center">
                            <span className="font-semibold text-indigo-600">Login</span>
                            {userData.login}
                        </small>
                        <small className="text-xs font-light text-primary dark:text-gray-400 flex flex-col justify-center items-center">
                            <span className="font-semibold text-indigo-600">Name</span>
                            {userData.name}
                        </small>

                    </div>
                    <div className="flex justify-around items-center">

                        <small className="text-xs font-light text-primary dark:text-gray-400 flex flex-col justify-center items-center">
                            <span className="font-semibold text-indigo-600">Public Repositories</span>
                            {userData.public_repos}
                        </small>
                        <small className="text-xs font-light text-primary dark:text-gray-400 flex flex-col justify-center items-center">
                            <span className="font-semibold text-indigo-600">Public Gists</span>
                            {userData.public_gists}
                        </small>
                    </div>
                    <div className="flex justify-around items-center">

                        <small className="text-xs font-light text-primary dark:text-gray-400 flex flex-col justify-center items-center">
                            <span className="font-semibold text-indigo-600">Created At</span>
                            {new Date(userData.created_at).toLocaleDateString('en-GB', {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit'
                            })}
                        </small>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Cards