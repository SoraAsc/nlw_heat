import React from 'react'
import { View } from 'react-native'
import { COLORS } from '../../theme';
import { useAuth } from '../../hooks/auth';

import { Button } from '../Button';

import { styles } from './styles'

export default function SignInBox() {
    const { signIn, isSigning } = useAuth();
    return (
        <View style={styles.container}>
            
            <Button 
                title="ENTRAR COM O GITHUB"
                color= {COLORS.BLACK_PRIMARY}
                backgroundColor={COLORS.YELLOW}
                icon="github"
                onPress={signIn}
                isLoading={isSigning}
          />

        </View>
    )
}
