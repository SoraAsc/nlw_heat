import prismaClient from "../prisma";
import { io } from '../app';

class CreateMessageService {
    async execute(message_text: string, user_id: string){
        const message = await prismaClient.message.create({
            data: {                
                text: message_text,
                user_id,
            },
            include: {
                user: true,
            },
        }); 
        
        
        const infoWS = {
            text: message.text,
            id: message.id,
            created_at: message.created_at,
            user: {
                name: message.user.name,
                avatar_url: message.user.avatar_url,

            }
        }

        io.emit("new_message", infoWS )

        return message;
    }
}

export { CreateMessageService }