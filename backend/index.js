
const express=require('express')
const cors=require('cors')
const app=express()

app.use(express.json())
app.use(cors({
  origin:'http://localhost:5173',
  credentials:true
}))

app.get('/',(req,res)=>{
  res.json({message:'Backend Running'})
})

app.get('/api/v1/job/get',(req,res)=>{
  res.json([
    {title:'Frontend Developer', company:'TCS'},
    {title:'Cloud Engineer', company:'Wipro'}
  ])
})

app.listen(8000,()=>{
  console.log('Server running on port 8000')
})
