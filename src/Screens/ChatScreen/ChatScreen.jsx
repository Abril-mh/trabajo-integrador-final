import React, { useState } from 'react'
import MessagesList from '../../componente/MessagesList/MessagesList'
import {NewMessageForm} from '../../componente/NewMessageForm/NewMessageForm'
import { useParams } from 'react-router'
import { getContactById } from '../../services/ContactService'

const ChatScreen = () => {

	const {contact_id} = useParams()

	const contact_selected = getContactById(contact_id)

    const [messages, setMessages] = useState(contact_selected.messages)

	const deleteMessageById = (message_id) => {
		const new_message_list = []
		for(const message of messages){
			if(message.id !== message_id){
				new_message_list.push(message)
			}
		} 
		setMessages(new_message_list)
	}

	const addNewMessage = (text) => {
		const new_mesage = {
			emisor: 'YO',
			hora: '11:10', 
			texto: text,
			status: 'no-visto',
			id: messages.length + 1
		}
		
		const cloned_messages_list = [...messages]
		cloned_messages_list.push(new_mesage)
		setMessages(cloned_messages_list)
	}

	const deleteAllMessages = () => {
		setMessages([])
	}

	
    return (
		<>
			<header className="header-chat">
				<div className="header-chat_content">
					<h1>mensajes</h1>
				</div>
			</header>
				<div>
					<MessagesList messages={messages} deleteMessageById={deleteMessageById} />
					<NewMessageForm addNewMessage={addNewMessage}/>
				</div>
		</>
    )
}



export default ChatScreen