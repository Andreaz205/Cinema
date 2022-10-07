import { useEffect, useState } from 'react'


export const getStoreLocal = (user:string) => {

	// let candidate = null
	// useEffect(() => {
	// 	candidate = localStorage.getItem(user)
	// })

	if (typeof localStorage !== 'undefined') {
		const ls = localStorage.getItem(user)
		return ls ? JSON.parse(ls) : null
	}
	return null
	// return candidate ? JSON.parse(candidate) : null
}