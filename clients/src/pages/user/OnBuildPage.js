import React, { Component } from 'react'
import "../../assets/css/machine.css"
import PageBanner from '../../components/PageBanner';
export default class OnBuildPage extends Component {
  render() {
    return (
      <div>
        <PageBanner 
        CurrentPage="Désolé mais on travail très dure"
        CurrentUri=""
        />
        <div className="machine-wrap">
            <div className="machine">
                <div className="machine-roof">
                    <div className="machine-silencer">
                        <div className="machine-smoke"></div>
                    </div>
                </div>
                <div className="machine-main">
                    <div className="machine-body"></div>
                    <div className="machine-back"></div>
                    <div className="machine-front"></div>
                </div>	
            </div>
            <div className="road">
                <div className="mud-wrap clearfix">
                    <div className="mud"></div>
                    <div className="mud"></div>
                    <div className="mud"></div>
                    <div className="mud"></div>
                </div>
            </div>
            </div>
      </div>
    )
  }
}
