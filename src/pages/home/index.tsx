import Image from 'next/image'

import { Heading, Text } from '@ignite-ui/react'
import { ClaimUsernameForm } from './components/claim-username-form'

import * as S from './styles'
import previewImage from '../../assets/app-preview.png'

export default function Home() {
  return (
    <S.Container>
      <S.Hero>
        <Heading as="h1" size="4xl">
          Agendamento descomplicado
        </Heading>
        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>

        <ClaimUsernameForm />
      </S.Hero>

      <S.Preview>
        <Image
          src={previewImage}
          alt="Calendário simbolizando a aplicação em funcionamento"
          height={400}
          quality={100}
          priority
        />
      </S.Preview>
    </S.Container>
  )
}
