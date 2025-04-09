import { motion, AnimatePresence } from "framer-motion"

export const FadeIn = ({ children, className, value, key, id, delay = 0 }) => {
    return (
        <AnimatePresence 
            key={key}>
            <motion.div
                id={id}
                key={key}
                transition={{ duration: 0.6, delay: delay }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    visible: { x: 0, opacity: 1 },
                    hidden: { x: value , opacity: 0 }
                }}
                className={className}>
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export const FadeInY = ({ key, children, className, value, delay = 0 }) => {
    return (
        <AnimatePresence>
            <motion.div
                transition={{ duration: 0.6, delay: delay }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    visible: { y: 0, opacity: 1 },
                    hidden: { y: value , opacity: 0 }
                }}
                className={className}>
                {children}
            </motion.div>
        </AnimatePresence>
    )
}