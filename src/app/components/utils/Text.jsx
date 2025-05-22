import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export const SliderTitle = ({children, className}) => {
    return (
        <h1 className={`${className} text-5xl sm:text-6xl lg:text-8xl font-bold`}>{children}</h1>
    )
}

export const Title = ({children, className}) => {
    return (
        <h1 className={`${className} text-2xl md:text-4xl tracking-wide`}>{children}</h1>
    )
}

export const SubTitle = ({children, className}) => {
    return (
        <h2 className={`${className} text-xl`}>{children}</h2>
    )
}

export const Text = ({children, className}) => {
    return (
        <div className={`${className} text-white/70`}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {children}
            </ReactMarkdown>
        </div>
    )
}
