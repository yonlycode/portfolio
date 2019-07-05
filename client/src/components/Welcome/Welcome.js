import React, { Component } from 'react'
import SkillTags from '../Skill-Tags/SkillTags';
import axios from 'axios'

export default class Welcome extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[],
        }
    }
    componentDidMount(){
       this.getLastSkills()
    }
    getLastSkills=()=>{
        axios.get("/last-skills")
        .catch(e=>{
            alert(e)
        })
        .then(res=>{
            this.setState({
                data:res.data
            })
        })
    }
    render() {
        return (
            <section className="welcome_area p_120">
                <div className="container">
                    <div className="row welcome_inner">
                        <div className="col-lg-6">
                            <div className="welcome_text">
                                <h4>À propos de moi: </h4>
                                <p>
                                Confucius disait que lorsque l'on aime ce que l'on fait ( prendre sincèrement du plaisir ) c'est comme ci qu'on ne travaille pas . Et
                                c'est cet énergie , ce karma là que je veux transmettre et véhiculer , avoir la foi et croire aussi en soi même , en restant
                                toujours respectueux , travailleur , humble et modeste quoi qu'il arrive .
                                </p>
                                <div className="LI-profile-badge"  data-version="v1" data-size="large" data-locale="fr_FR" data-type="horizontal" data-theme="dark" data-vanity="yoann-fort-91b516155"><a className="LI-simple-link" href='https://fr.linkedin.com/in/yoann-fort-91b516155?trk=profile-badge'>yoann FORT</a></div>
                                
                            </div>
                            
                        </div>
                        <div className="col-lg-6">
                            
                            <SkillTags data={this.state.data}/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

