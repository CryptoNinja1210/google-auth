import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router';
import styles from '../styles/Profile.module.css'
  

export default function Profile() {
    const { data: session } = useSession()
    const router = useRouter();

    if (session && session.user && session.user.email) {
        return (
            <div className={styles.container}>
             <h1 className="title">Create Next App</h1>
                <div className={styles.content}>
                      <h1>Hello, view your User Profile</h1>
                      <h2> Signed in as {session.user.name} </h2>
                      <img src={session.user.image} />
                        <button className={styles.button}  onClick={() => {
            

                            router.push('/Login')
                            
                            }}>Go back</button>
                    </div>
            </div>
          )
      } 
 
  
}