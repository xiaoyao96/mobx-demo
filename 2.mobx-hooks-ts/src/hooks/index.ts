import React, { useContext } from 'react'
import { storesContext } from '../contexts'


export const useStore = () => useContext(storesContext)