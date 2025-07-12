import React from 'react'

function SkillsCard(props) {
    const IconComponent = props.icon;
    
    return (
        <div >
            <div>
                <div className="outer">
                    <div className="inner">
                        <div id="number">{props.percentage}</div>
                    </div>
                </div>
            </div>
            <svg xmlns='https://www.w3.org/2000/svg' version='1.1' style={{ width: "180px", height: "180px" }} className='svg'>
                <defs>
                    <linearGradient id='GradientColor'>
                        <stop style={{ offset: "0%", stopColor: "#DA22FF" }} />
                        <stop style={{ offset: "100%", stopColor: "#9733EE" }} />
                    </linearGradient>
                </defs>
                <circle style={{ cx: "90", cy: "80", r: "70", strokeLinecap: "round", strokeDashoffset: `${props.per}` }} className='circle' />
            </svg>
            <div id='Icons' className="tech-icon">
                <IconComponent size={40} color="#DA22FF" />
            </div>
            <h3 className="skill-name">{props.skills}</h3>
        </div>
    )
}

export default SkillsCard;
