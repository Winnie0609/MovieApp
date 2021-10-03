import React from "react"
import Pagination from "@material-ui/lab/Pagination"

function CustomPagination({ setPage, numOfPages }){
    const handlePageChange = (page) => {
        setPage(page)
        // window.scroll(0,0)
        console.log(page)
    }

    return(
        <Pagination 
            className="pagination"
            onChange={(e) => handlePageChange(e.target.textContent)}
            count={numOfPages} 
            shape="rounded"
            hideNextButton
            hidePrevButton
        />
    )
}

export default CustomPagination