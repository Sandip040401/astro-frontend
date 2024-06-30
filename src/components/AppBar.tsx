

export const AppBar = () => {
    return <div className="flex px-20 pt-4 border-b-2 pb-3 justify-between sticky">
        <div className="flex flex-col">
        <div className="flex">
            <div className="h-12 w-12 flex justify-center flex-col bg-white">
                <img src="/logo.jpg" alt="" />
            </div>
            <div className="text-4xl font-medium cursor-pointer">
                <span className="text-amber-500">A</span>stro<span className="text-amber-500">V</span>edic
            </div>
        </div>
        <div className="flex pt-2">
            <div className="pr-6 font-medium cursor-pointer hover:text-amber-500 ">Free Kundli</div>
            <div className="pr-6 font-medium cursor-pointer hover:text-amber-500">Kundli Matching</div>
            <div className="pr-6 font-medium cursor-pointer hover:text-amber-500">Talk to Astrologer</div>
            <div className="font-medium cursor-pointer hover:text-amber-500">Book a Pooja</div>
        </div>
        </div>
        <div className="flex flex-col justify-center">
            <div className="flex">
                <div>
                    <button type="button" className="text-amber-500 hover:text-white border border-amber-500 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
                </div>
                <div>
                    <button type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2">
                    <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                    <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd"/>
                    </svg>
                    Sign in with Google
                    </button>
                </div>
            </div>

        </div>
    </div>
}