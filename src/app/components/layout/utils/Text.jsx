export const SliderTitle = ({children, className}) => {
    return (
        <h1 className={`text-8xl font-bold ${className}`}>{children}</h1>
    )
}

export const Title = ({children, className}) => {
    return (
        <h1 className={`text-4xl tracking-wide ${className}`}>{children}</h1>
    )
}

export const SubTitle = ({children, className}) => {
    return (
        <h2 className={`text-2xl ${className}`}>{children}</h2>
    )
}

export const Text = ({children, className}) => {
    return (
        <p className={`text-md text-white/70 ${className}`}>{children}</p>
    )
}
