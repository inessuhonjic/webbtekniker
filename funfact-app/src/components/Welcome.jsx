import { motion } from 'motion/react'



export default function Welcome({ name }) {

  

return (




<div>
    <motion.h1
   className="lead bold text-center display-1"
  initial={{ opacity: 0, x: -500 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.4, ease: "easeOut" }}
>
  Welcome {name}!
</motion.h1> 

</div>
) }
