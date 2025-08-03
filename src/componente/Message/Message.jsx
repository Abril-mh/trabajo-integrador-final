import React, { useState } from 'react'
import './Message.css' 

const Message = ({ emisor, hora, id, texto, status, deleteMessageById }) => {
	const [message_selected, setMessageSelected] = useState(false)

	const handleChangeMessageSelected = (e) => {
		e.preventDefault()
		setMessageSelected(true)
	}

	return (
		<div
			onContextMenu={handleChangeMessageSelected}
			className={`message ${emisor === 'YO' ? 'yo' : 'otro'}`}>
			<p>{texto}</p>
			<span className="hora">{hora}</span>
			{message_selected && (
				<button onClick={() => deleteMessageById(id)}>Eliminar</button>
			)}
		</div>
	)
}

export default Message
