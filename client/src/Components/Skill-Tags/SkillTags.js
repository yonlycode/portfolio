import React from 'react'
import './style.css'
export default function SkillTags({data , ...rest}) {
    return (
        
        <div className="tools_expert">
            <div className="skill_main">
            <h4>Compétences : </h4>
                <div className="tagcloud">
                    <ul>
                        {data.map((val , i)=>{
                            return <li key={i}><a>{val.name}</a></li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
