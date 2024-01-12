import React from 'react'
import Link from 'next/link'
import styles from './authlinks.module.css'
function AuthLinks() {
    const status = "authenticated"
  return (
    <>
          {status === "authenticated" ? (<Link href="/login">Login</Link>) : <> <Link href="/write">Write</Link>
          <span className={styles.link}>Logout</span></>} 
    </>
  )
}

export default AuthLinks
