const express = require('express');
const axios = require('axios');
const zod = require('zod');
const router = express.Router();

const routeContextSchema = zod.object({
    params: zod.object({
        mode: zod.enum(["truth", "dare", "tod"]),
    }),
});

router.get('/:mode', async (req, res) => {
    try{
        const context = routeContextSchema.parse({ params: req.params });
        const { mode: routeMode } = context.params;
        // console.log(routeMode);

        let mode = "truth";
        if (routeMode === "tod") {
            mode = Math.random() < 0.5 ? "truth" : "dare";
        } else {
            mode = routeMode;
        }

        const { rating = "pg13" } = req.query;
        try {
            const response = await axios.get(
                `https://api.truthordarebot.xyz/v1/${mode}?rating=${rating}`,
                { headers: { "Cache-Control": "no-cache" } }
            );
            const question = response.data.question; 
    
            res.status(200).json({
                question
            });
        } catch (err) {
            console.error("Error fetching question:", err.message);
            return res.status(400).json({ 
                error: "Error fetching the question." 
            });
        }
    }catch (error) {
        if (error instanceof zod.ZodError) {
            return res.status(422).json({ error: error.issues });
        }
    
        console.error("Server error:", error.message);
        return res.status(500).json({ error: "Internal server error." });
    }

    // const {mode} = req.params;

    // const {rating} = req.query

    // try{
    //     const response = await axios.get(
    //         `https://api.truthordarebot.xyz/v1/${mode}?rating=${rating}`,
    //         { headers: { "Cache-Control": "no-cache" } }
    //     );
    //     const question = response.data.question; 

    //     res.status(200).json({
    //         question
    //     });
    // }catch(err){
    //     console.error("Error fetching the question: ", err.message);
    //     return res.status(500).json({
    //         error: "Error fetching the question"
    //     })
    // }


    /*
    // const {mode, rating} = req.body;

    try{
        // const res = await fetch(
        //     `https://api.truthordarebot.xyz/v1/truth?rating=pg13`,
        //     {
        //         cache: "no-cache",
        //     },
        // );

        const response = await axios.get(`https://api.truthordarebot.xyz/v1/truth?rating=pg13`)
        // const question = await response.json();
        console.log(response.data.question)

        res.status(201).json({
            question
        })
        
    }catch (err) {
        return res.status(500).json({
            message: "Server error",
            error: err.message
        })
    }
        */
})

module.exports = router;