import { useState } from 'react';
import { Modal } from '../src/components/Modal';

function IndexPage() {
	const [ showModal, setShowModal ] = useState(true);
	return (
		<div className=" flex justify-center items-center h-screen w-screen bg-blue-500 ">
			<span>Next js Tailwindcss Starter</span>
			<Modal showModal={setShowModal} setShowModal={setShowModal} />
		</div>
	);
}
export default IndexPage;
