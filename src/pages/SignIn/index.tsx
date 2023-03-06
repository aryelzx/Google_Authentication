import { useState } from "react"

import { GoogleLogo } from "@phosphor-icons/react"

import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth"
import { auth } from "../../services/firebase"

import "./styles.scss"

export default function SignIn() {
  const [user, setUser] = useState<User>({} as User)
  function handleeGoogleSignIn() {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div className="container">
      <div className="user">
        {user.photoURL && <img src={user.photoURL} alt="Foto do usuário" />}
        <strong>{user.displayName}</strong>
        <small>{user.email}</small>
      </div>
      <h1>acesse a sua conta</h1>
      <span>
        Utilizando autenticação social, por exemplo, autenticação com a Goggle
        você <br />
        facilita a vida do usuário, permitindo utilizar sua aplicação sem fazer
        cadastro.
        <br />
      </span>
      <button type="button" className="button" onClick={handleeGoogleSignIn}>
        <GoogleLogo />
        Entrar com Google
      </button>
    </div>
  )
}
