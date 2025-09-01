import React from 'react'
import style from './Main.module.css'

export default function Main(props: { children: React.ReactNode }) {
  return <main className={style.main}>{props.children}</main>
}
