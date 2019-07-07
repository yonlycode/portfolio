import React from 'react'
import ServiceList from '../Services-List/ServiceList';

const data = [
    {
        title:"test",
        text:"test",
        icons:"fas fa-hands-helping"
    },
    {
        title:"deuxieme tes",
        text:" second test",
        icons:"fas fa-hands-helping"
    },
    {
        title:"troisième test",
        text:"troisième test",
        icons:"fas fa-hands-helping"
    },
    {
        title:"test",
        text:"test",
        icons:"fas fa-hands-helping"
    },
    {
        title:"test",
        text:"test",
        icons:"fas fa-hands-helping"
    },
    {
        title:"test",
        text:"test",
        icons:"fas fa-hands-helping"
    },
]


export default () => {
  return (
    <section className="feature_area p_120">
        <div className="container">
            <div className="main_title">
                <h2>Quel Service est fait pour vous?</h2>
                <p>
                    Tout est réalisable mais êtes vous prêt a tout?<br/>
                    Je vous accompagne dans tout vos projets digitaux.
                </p>
            </div>
            <ServiceList data={data} />
        </div>
    </section>
  )
}
