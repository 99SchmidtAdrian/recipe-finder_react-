const Article = props => {
    return  <div className={`flex flex-col ${props.imgIsLeft ? 'md:flex-row-reverse' : 'md:flex-row'} md:p-5 md:m-5 mb-8 justify-evenly`}>
    <div className="flex flex-col w-full md:w-1/2 px-5 2xl:my-auto 2xl:w-2/5 mx-auto">
        <h3 className="text-2xl xl:text-4xl font-bold mt-3 md:mt-10 text-gray-800 text-center">{props.title}</h3>
        <p className="text-base mt-5 text-gray-800 text-justify">
            {props.children}
        </p>
    </div>
    <div
        className="flex flex-col w-full md:w-1/2 my-auto lg:pt-12 2xl:w-2/5 2xl:mx-auto">
        <img src={props.imgSrc} alt={props.alt} className="md:rounded w-full md:shadow-2xl" />
    </div>
</div>
}

export default Article