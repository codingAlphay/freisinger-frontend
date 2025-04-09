"use client"

import { motion } from "framer-motion"

const PageWrapper = (props) => {
  return (
    <div className="bg-darkbg">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        {...props}
      />
    </div>
  )
}

export default PageWrapper