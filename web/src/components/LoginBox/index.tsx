import { VscGithubInverted } from 'react-icons/vsc';
import { useAuth } from '../../contexts/auth';

import styles from './styles.module.scss';


export function LoginBox(){

    const { signInUrl, isSigningIn } = useAuth();

    return(
        <div className={styles.loginBoxWrapper}>
            <strong>Entre e compartilhe sua mensagem</strong>
            <a  href={signInUrl} className={`${styles.signInWithGithub} ${isSigningIn ? styles.signInWithGithubDisabled : ''}`}>
                <VscGithubInverted size={24} />
                Entrar com Github
            </a>
        </div>
    )
}