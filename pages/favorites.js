import Head from 'next/head'

import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import Link from 'next/link'
import Fruit from '@/components/Fruit'

const inter = Inter({ subsets: ['latin'] })

export default function Favorite(props) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>Favorites</div>
        <Link href="/">Go to Home</Link>
        {fruits
          .filter((fruit) => fruit.isFav)
          .map((fruit) => (
            <Fruit
              key={fruit.id}
              fruit={fruit}
              toggleFavInFruit={toggleFavInFruit}
            />
          ))}
      </main>
    </>
  )
}
