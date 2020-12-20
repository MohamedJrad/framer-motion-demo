import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

const backdropVariants = {
	visible: { opacity: 1 },
	hidden: { opacity: 0 }
};
const modalVarinats = {
	visible: { y: 0, opacity: 1, transition: { delay: 0.5, type: 'spring', stiffness: 120 } },
	hidden: { y: '-100vh', opacity: 0 }
};

export const Modal = ({ showModal, closeModal }) => {
	return (
		<AnimatePresence>
			{showModal && (
				<motion.div
					animate="visible"
					initial="hidden"
					variants={backdropVariants}
					className="fixed inset-0 h-full w-full z-10 flex justify-center items-center"
				>
					<motion.div className=" fixed inset-0  bg-black opacity-50 h-full w-full " />
					<motion.div
						animate="visible"
						initial="hidden"
						variants={modalVarinats}
						className=" flex flex-col justify-center items-center
                        relative bg-white  h-64  p-16 rounded-lg shadow-xl opacity-100 z-20 "
					>
						<span>Modal Content</span>
						<button
							className="bg-purple-500 h-16 w-56  rounded-xl outline-none"
							onClick={() => {
								closeModal();
							}}
						>
							Close
						</button>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};
