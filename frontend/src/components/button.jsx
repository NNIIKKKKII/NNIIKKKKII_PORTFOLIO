const button = ({ }) => {
    return (
        <div>
            <button
                onClick={() => setView("flagship")}
                className={`px-2 py-1 rounded-full transition ${view === "flagship" ? "bg-black text-white" : "bg-gray-50 hover:bg-gray-100"
                    }`}></button>
            <button
                onClick={() => setView("all")}
                className={`px-2 py-1 rounded-full transition ${view === "all" ? "bg-black text-white" : "bg-gray-50 hover:bg-gray-100"
                    }`}></button>
        </div>
    )
}