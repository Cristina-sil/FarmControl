import React from 'react'
import {TouchableOpacityProps} from 'react-native'
import { ButtonContainer, ButtonText } from './styles'

interface ButtonProps  extends TouchableOpacityProps{
  title: string
}

export function Button({title, ...rest}: ButtonProps) {
  return(
    <ButtonContainer
      activeOpacity={0.6}
      {...rest}
    >
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  )
}