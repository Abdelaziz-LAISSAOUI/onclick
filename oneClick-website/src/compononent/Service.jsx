
function Service({ image, service}) {
    return (
        <div className={`h-full   m-2  pb-11 flex flex-col justify-end items-center bg-cover`} style={{ backgroundImage: `url(${image})` }} >
            <button className="border-2 py-3 px-10 border-white border-solid bg-[#F5F5F54D] backdrop-blur-sm text-white text-lg font-bold rounded-full">
                {service}
            </button>
        </div>
    )
}

export default Service