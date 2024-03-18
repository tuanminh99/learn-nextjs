'use client'
import { useState } from 'react'
import './card.css'
import custom from './card.module.scss'
import clsx from 'clsx';

export default function Card() {
    const [isChangeColor, setIsChangeColor] = useState(false);
  return (
    // <div className={`card ${custom.card}`}>card</div>
    <div className={clsx('card', {[custom.card]: isChangeColor})}>card</div>
  )
}
