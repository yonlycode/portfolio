import React from 'react'
import './style.css'

interface props{
    data :{name :string}[];
}

const SkillTags = (props:props) :React.FunctionComponentElement<props> =>{
    let content =<> 
        <div className="tools_expert">
            <div className="skill_main">
            <h4>Compétences : </h4>
                <div className="tagcloud">
                    <ul>
                        {props.data.map((val , i)=>{
                            return <li key={i}><a>{val.name}</a></li>
                        })}
                    </ul>
                </div>
            </div>
        </div>;
    </>

    return content;
}

export default SkillTags;