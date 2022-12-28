const postSchema = require('../models/postModel')
const create = async (req,res) => {
    try{
        const postDoc = new postSchema({
            title: req.body.title,
            text: req.body.text
        })
    
        const post = await postDoc.save()
        return res.json(post)
    } catch(err) {
        console.log(err)
        return res.status(500).json({message:"error roccured", err:err})
    }
    
}

module.exports = create