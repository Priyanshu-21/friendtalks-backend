// Handles the Request Async function with Wrapper (success or fail)
//1. Promise Method (Hof: Higher Order function)
const asyncHandler = (requestHandler) => {

    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch(error => error(next)); 
    }   
}

export { asyncHandler }; 


//2. Try Catch Method (Hof: Higher Order function)
/*
const asyncHandler = (requestHandler) => async (req, res, next) => {
    
    //When aync function is working fine.
    try {
        // RequestHandler func should be able to get response 
        // Use this wrraper to let the logic be executed 
        await requestHandler(req, res, next); 

    } catch(error) {
        
        //Req is having error, we need to send res
        res.status(error.code || 500).json({
            success: false, 
            message: error.message || "Internal Server Error", 
        }); 
    }
}; 
*/
