import React from "react"
import Message from "../Message/Message"
import './MessagesList.css'  // Asegurate de importar

const MessagesList = ({ messages, deleteMessageById }) => {
	if (messages.length === 0) {
		return <span>Aun no tienes mensajes!</span>
	}

	const lista_mensajes = messages.map((message) => (
		<Message
			key={message.id}
			emisor={message.emisor}
			hora={message.hora}
			id={message.id}
			texto={message.texto}
			status={message.status}
			deleteMessageById={deleteMessageById}
		/>
	))

	return (
		<div className="chat-background">
			{lista_mensajes}
		</div>
	)
}

export default MessagesList