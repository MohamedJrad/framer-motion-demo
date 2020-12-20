import { motion, AnimatePresence } from 'framer-motion';

const backdropVariants = {
	visible: { opacity: 1 },
	hidden: { opacity: 0 }
};
const modalVarinats = {
	visible: { y: 0, opacity: 1, transition: { delay: 0.5, type: 'spring', stiffness: 120 } },
	hidden: { y: '-100vh', opacity: 0 }
};
export const Modal = ({ showModal, setShowModal }) => {
	const closeModal = () => {
		setShowModal(false);
		console.log('test');
	};

	return (
		<AnimatePresence exitBeforeEnter>
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
						className="
                        relative bg-white  h-64 w-64 p-16 rounded-lg shadow-xl opacity-100 z-20"
					>
						<motion.button
							className=" text-2xl bg-red-500 h-8 w-8 fixed top-0 right-0 mr-2 outline-none"
							onClick={() => closeModal()}
						/>
						<span>Modal Content</span>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};
