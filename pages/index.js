import { useState } from 'react';
import { Modal } from '../src/components/Modal';

function IndexPage() {
	const [ showModal, setShowModal ] = useState(false);

	const closeModal = () => {
		setShowModal(false);
	};
	return (
		<div className=" flex justify-center items-center h-screen w-screen bg-blue-500 ">
			<button className="bg-purple-500 h-16 w-56  rounded-xl outline-none" onClick={() => setShowModal(true)}>
				Show Modal
			</button>
			<Modal showModal={showModal} closeModal={closeModal} />
		</div>
	);
}
export default IndexPage;
