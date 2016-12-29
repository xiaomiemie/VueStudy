const odd = ( state) => {
	return state.count.filter(v => v%2 == 0)
}
export {odd}