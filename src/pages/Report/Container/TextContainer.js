import React, { useState, useEffect } from "react";
import Text from "../component/text/textReport";

const TextContainer = props => {
  const { reportData } = props;
  const [section, setSection] = useState([]);
  const [testValue,setTestValue]=useState([])
  const [sectName, setSectName] = useState([]);
  const [sectId, setSectId] = useState([]);
  
  useEffect(() => {
    const r = reportData[0].survey_sections.map((v, k) =>
      v.questions.map(v1 => v1)
    );
    reportData[0].survey_sections.map((v,k) =>
      sectName.push([k,v.section_name])
    )
    reportData[0].survey_sections.map((v,k) => 
      sectId.push([k,v.survey_section_id])
    )

    var i,j,k,questions,chunk = 10;
    for(k=0; k<r.length ;k++){
      const array = r[k]
      for (i = 0, j = array.length; i < j; i += chunk) {
        questions = array.slice(i, i + chunk);
        // do whatever
        //section.push(temparray)
        
        const filterSection = sectName.filter(v => 
          v[0] === k 
        )
        const filterSectId = sectId.filter(v => 
          v[0] === k
        )
        const section_name = filterSection[0][1]
        const survey_section_id = filterSectId[0][1]
        const key = k

        setTestValue([])
        const list = {key, survey_section_id, section_name, questions}
        section.push(list)
  
      }
    }
    
  }, []);

  return <Text reportData={reportData} section={section} />;

};

export default TextContainer;
