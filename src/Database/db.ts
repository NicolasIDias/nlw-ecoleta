import mg from 'mongoose'

const schema = new mg.Schema({
  id: { type: String, required: true, unique: true },
  image: { type: String, required: true },  
  name: { type: String, required: true }, 
  address: { type: String, required: true }, 
  address2: { type: String, required: true }, 
  state: { type: String, required: true }, 
  city: { type: String, required: true }, 
  items: { type: String, required: true }, 
})

export default mg.model('nlwecoleta', schema)