export const page = (p) => {
	// 获取 本地分页对象
	const _page = {
		pageIndex: 1,
		pageSize: 20
	}
	return {...{}, ..._page,...p}
} 