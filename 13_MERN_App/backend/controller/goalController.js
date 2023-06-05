const asyncHandler=require('express-async-handler')
const Goal=require('../model/goalModel')
const User=require('../model/userModel')
//@desc Get goals
//@route Get /api/goals
//@access Private
const getGoals=asyncHandler(async(req,res)=>{
    const goals=await Goal.find({user:req.user.id})
    res.status(200).json(goals)
})
//@desc set goals
//@route set /api/goals
//@access Private
const setGoals=asyncHandler(async(req,res)=>{

    if(!req.body.text){
        res.status(400)
        throw new Error('Plz add text field')
    }
    const goal=await Goal.create({
        text: req.body.text,
        user:req.user.id,
    })
    res.status(200).json(goal)
})
//@desc Update goals
//@route Get /api/goals
//@access Private
const updateGoals=asyncHandler(async(req,res)=>{
    const goal=await Goal.findById(req.params.id)
    if(!goal){
        res.statusMessage(400)
        throw new Error('Goal not found')
    }
    //check for user
    if(!req.user){
        res.status(401)
        throw new Error('User not Found')
    }
    //make sure the logged in user matches the goal user
    if(goal.user.toString()!==req.user.id){
        res.status(401)
        throw new Error('User not Authorized')
    }


    const updatedGoal=await Goal.findByIdAndUpdate(req.params.id,req.body,{new: true})
    res.status(200).json(updatedGoal)
})
//@desc Delete goals
//@route Delete /api/goals:id
//@access Private
const deleteGoals=asyncHandler(async(req,res)=>{
    const goal=await Goal.findById(req.params.id)
    if(!goal){
        res.statusMessage(400)
        throw new Error('Goal not found')
    }
    //check for user
    if(!req.user){
        res.status(401)
        throw new Error('User not Found')
    }
    //make sure the logged in user matches the goal user
    if(goal.user.toString()!==req.user.id){
        res.status(401)
        throw new Error('User not Authorized')
    }
    
    const updatedGoal=await Goal.findByIdAndDelete(req.params.id)
    res.status(200).json(`Deleted Goal ID:${updatedGoal.id}`)
})
module.exports={
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}