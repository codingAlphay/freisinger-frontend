export const Button = ({destination, children, className}) => {
    return (
        <div className={`font-bold inline-block uppercase text-[14px] cursor-nonepointer ${className}`}>
            <svg className="duration-500 ease-in-out -translate-x-1.5 group-hover:translate-x-1.5" width="157" height="6" viewBox="0 0 157 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="143.393" height="2" fill="#24d9fe"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M142.708 0L142.708 5.19615L157 0H142.708Z" fill="#24d9fe"/>
            </svg>
            <div className="duration-500 ease-in-out group-hover:translate-x-1">
                {children}
            </div>
        </div>
    )
}