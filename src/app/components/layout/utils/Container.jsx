export const Container = ({children, className}) => {
    return (
        <div className={`max-w-7xl mx-auto px-6 ${className}`}>
            {children}
        </div>
    )
}

export const PageContainer = ({children, className}) => {
    return (
        <div className={`max-w-6xl mx-auto px-6 ${className}`}>
            {children}
        </div>
    )
}