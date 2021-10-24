import { useState, FormEvent } from 'react';
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc';
import { useAuth } from '../../contexts/auth';
import { api } from '../../services/api';
import styles from './styles.module.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function SendMessageForm(){

    const [isSendingMessage, setIsSendingMessage] = useState(false);
    const [message, setMessage] = useState("");
    
    const { user, signOut } = useAuth();
    
    async function handleSendMessage(e : FormEvent){
        e.preventDefault();
        if(!message.trim()){
            return;
        }

        setIsSendingMessage(true);

        try{
            await api.post('messages', { message })
            setMessage("");
            toast.success("Mensagem enviada com sucesso!");
        } catch{
            toast.error("Ocorreu um erro ao enviar a mensagem!");
        } finally {
            setIsSendingMessage(false);
        }
    
    }

    return(        
        <div className={styles.sendMessageFormWrapper}>
            <button onClick={signOut} className={styles.signOutButton}>
                <VscSignOut size={32}/>
            </button>

            <header className={styles.userInformation}>
                <div className={styles.userImage}>
                    <img src={user?.avatar_url} alt={user?.name + " - Logo"}/>
                </div>
                <strong className={styles.userName}>{user?.name}</strong>
                <span className={styles.userGithub}>
                    <VscGithubInverted size={16}/>
                    {user?.login}
                </span>
            </header>

            <form onSubmit={handleSendMessage} className={styles.sendMessageForm}>
                <label htmlFor="message">Mensagem</label>
                <textarea 
                    name="message" 
                    id="message" 
                    placeholder="Sua mensagem vem aqui!"
                    onChange={e => setMessage(e.target.value)}
                    value={message}
                />
                    
                <button disabled={isSendingMessage} type="submit">
                    Enviar
                </button>                
            </form>
            <ToastContainer 
                theme={'dark'}
                limit={2}
                newestOnTop={true}
                draggable={false}
                autoClose={2000}            
            />
        </div>
        
    )
}