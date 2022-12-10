import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Age, Fname, Lname, gender, Profession} from "./store/action/action";


function App() {
  const firstName  = useSelector((state) =>state.firstName);
  const lastName  = useSelector((state) => state.lastName);
  const sgender  = useSelector((state) => state.gender);
  const age  = useSelector((state) => state.age);
  const profession  = useSelector((state) => state.profession);

  const dispatch = useDispatch();

  const [value , setValue] = useState()
  const [lValue, setLValue] = useState()
  const [gValue, setgValue] = useState()
  const [aValue, setLAValue] = useState()
  const [pValue, setPValue] = useState()
  return (
    <div>
    <input value={value} onChange={(e) => setValue(e.target.value)}/>
    <button onClick={() => dispatch(Fname(value))}>AddFname</button>
    <p>FirstName: {firstName}</p>

    <input value={lValue} onChange={(e) => setLValue(e.target.value)}/>
    <button onClick={() => dispatch(Lname(lValue))}>AddLname</button>
    <p>LastName: {lastName}</p>

    <input value={gValue} onChange={(e) => setgValue(e.target.value)}/>
    <button onClick={() => dispatch(gender(gValue))}>AddGender</button>
    <p>FirstName: {sgender}</p>

    <input value={aValue} onChange={(e) => setLAValue(e.target.value)}/>
    <button onClick={() => dispatch(Age(aValue))}>AddAge</button>
    <p>LastName: {age}</p>

    <input value={pValue} onChange={(e) => setPValue(e.target.value)}/>
    <button onClick={() => dispatch(Profession(pValue))}>AddProfession</button>
    <p>LastName: {profession}</p>
    </div>
  );
}

export default App;
