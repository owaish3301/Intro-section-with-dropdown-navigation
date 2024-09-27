function Authentication(){
    return(
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 font-epilogue">
            <button className="hover:cursor-pointer"> Login </button>
            <button className="border-2 border-black py-2 px-4 rounded-xl hover:cursor-pointer"> Register </button>
        </div>
    )
}

export default Authentication;