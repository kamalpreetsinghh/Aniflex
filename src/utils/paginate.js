const paginate = (items, pageNumber, pageSize) => {
    return items.slice((pageNumber - 1) * pageSize, (pageNumber - 1) * pageSize  + pageSize)
}

export default paginate