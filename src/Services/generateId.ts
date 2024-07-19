import { v4 as uuidv4 } from 'uuid';

class generateId {
    async gen(){
        return uuidv4()
    }
}
export default new generateId();