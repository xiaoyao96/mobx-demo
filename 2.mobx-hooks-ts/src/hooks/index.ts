import React, { useContext, useEffect } from 'react'
import { storesContext } from '../contexts'


export const useStore = () => useContext(storesContext)

export const useTitle = (title: string) => useEffect(() => {
  document.title = title;
}, [])