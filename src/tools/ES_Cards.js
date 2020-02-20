import React, { useEffect, useState } from "react";
import { ES_CheckBox } from "./ES_CheckBox";
import { ES_Radio } from "./ES_Radio";
import * as Color from "../config/Color.config";

const QuestionCard = props => {
  const { categories } = props;
  const [userData,setUserData]=useState({})
  const [cat,setCat] = useState(null);
  const [pageno, setPageno] = useState(0);

  useEffect(()=>{
    setUserData(JSON.parse(localStorage.getItem('userData')));
    setCat(categories[pageno]);
    console.log('categories is=>',categories)
  },[])
  const cvalue = [];

  const handleCheckChange = (quesId,answerId) => {
    let ind = cvalue.findIndex(data => data.question_id == quesId && data.answer_id==answerId);
    console.log("",ind);

    if (ind < 0) {
      cvalue.push({ question_id: quesId, answer_id: answerId, user_id: userData._id });
    } else {
      cvalue.splice(ind, 1);
    }

    console.log("Check=====>",cvalue);

  };

  
  return (
          <div>
              <div
          className="mb-3"
          style={{ color: `${Color.PrimaryColor}` }}
        >
      <h3 className="card-title">{categories[0].name}</h3>
        </div>
              {
              // cat && cat.length && cat.questions && cat.questions.length &&
              categories[0].questions.map((ques, k2) => (
                <div className="d-flex  flex-row flex-fill flex-wrap w-100 bg-light p-2 my-2 rounded">
                  <div className="d-flex flex-row flex-wrap w-100" key={k2}>
                    {k2 + 1}. {ques.name}
                  </div>
                  {ques.qtype_id === 1 ? (
                    <ES_CheckBox
                      quesId={ques.id}
                      value={ques.possible_answers}
                      handleChange={handleCheckChange}
                    />
                  ) : ques.qtype_id === 2 ? (
                    <ES_Radio value={ques.possible_answers} quesId={ques.id} cvalue={cvalue} userId={userData._id}/>
                  ) : null}
                </div>
              ))
              }
              </div>
  )
           
}


export default QuestionCard;
