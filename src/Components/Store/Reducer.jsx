
import Edit from '../Edit';
import Student from '../Student';
import AddStudent from '../AddStudent'




const Reducer = (state="",action) =>{
    switch(action){
     case AddStudent : return <AddStudent/>
     case Edit : return <Edit/>
     default : return <Student/>
    }
}

export default Reducer;