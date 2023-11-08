import React from 'react'
import { skillText } from '../constants/index'

const Skill = () => {
  return (
    <section id="skill">
      <div className="skill__inner">
        <h2 className="skill__title">
          challenge <em>나의 도전</em>
        </h2>
        <div className="skill__desc">
          {skillText.map((data, key) =>
            <div key={key}>
              <span>{key + 1}.</span>
              <h3>{data.title}</h3>
              <p>
                {data.desc}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Skill