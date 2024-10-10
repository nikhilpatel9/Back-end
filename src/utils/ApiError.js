class ApiError extends Error{
    constructor(
        message="Something went wrong",
        errors=[],
        statuscode,
        statck=""
    ){
        super(message)
        this.statuscode = statuscode
        this.data=null
        this.message=message
        this.success=false
        this.errors=errors
    
    if(statck){
        this.stack = statck
    } 
    else
    {
        Error.captureStackTrace(this, this.constructor)
    }
}
}
export {ApiError}