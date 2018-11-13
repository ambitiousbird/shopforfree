import React, { Component } from 'react'
import ''

export class Themes extends React.Component{
    render(){
        return(
            <div>
                <div id="secectionBox">
                    <div id="themeContainer">
                        <div id="hideme" class="themeTitle">Style Selector</div>
                        <div class="themeName">Oregional Skin</div>
                        <div class="images style">
                            <a href="#" name="bootshop"><img src={require("../images/clr/bootshop.png")} alt="bootstrap business templates" class="active" /></a>
                            <a href="#" name="businessltd"><img src={require("../images/clr/businessltd.png")} alt="bootstrap business templates" class="active" /></a>
                        </div>
                        <div class="themeName">Bootswatch Skins (11)</div>
                        <div class="images style">
                            <a href="#" name="amelia" title="Amelia"><img src={require("../images/clr/amelia.png")} alt="bootstrap business templates" /></a>
                            <a href="#" name="spruce" title="Spruce"><img src={require("../images/clr/spruce.png")} alt="bootstrap business templates" /></a>
                            <a href="#" name="superhero" title="Superhero"><img src={require("../images/clr/superhero.png")} alt="bootstrap business templates" /></a>
                            <a href="#" name="cyborg"><img src={require("../images/clr/cyborg.png")} alt="bootstrap business templates" /></a>
                            <a href="#" name="cerulean"><img src={require("../images/clr/cerulean.png")} alt="bootstrap business templates" /></a>
                            <a href="#" name="journal"><img src={require("../images/clr/journal.png")} alt="bootstrap business templates" /></a>
                            <a href="#" name="readable"><img src={require("../images/clr/readable.png")} alt="bootstrap business templates" /></a>	
                            <a href="#" name="simplex"><img src={require("../images/clr/simplex.png")} alt="bootstrap business templates" /></a>
                            <a href="#" name="slate"><img src={require("../images/clr/slate.png")} alt="bootstrap business templates" /></a>
                            <a href="#" name="spacelab"><img src={require("../images/clr/spacelab.png")} alt="bootstrap business templates" /></a>
                            <a href="#" name="united"><img src={require("../images/clr/united.png")} alt="bootstrap business templates" /></a>
                            <p style="margin:0;line-height:normal;margin-left:-10px;display:none;"><small>These are just examples and you can build your own color scheme in the backend.</small></p>
                        </div>
                    <div class="themeName">Background Patterns </div>
                    <div class="images patterns">
                        <a href="#" name="pattern1"><img src={require("../images/pattern/pattern1.png")} alt="bootstrap business templates" class="active" /></a>
                        <a href="#" name="pattern2"><img src={require("../images/pattern/pattern2.png")} alt="bootstrap business templates" /></a>
                        <a href="#" name="pattern3"><img src={require("../images/pattern/pattern3.png")} alt="bootstrap business templates" /></a>
                        <a href="#" name="pattern4"><img src={require("../images/pattern/pattern4.png")} alt="bootstrap business templates" /></a>
                        <a href="#" name="pattern5"><img src={require("../images/pattern/pattern5.png")} alt="bootstrap business templates" /></a>
                        <a href="#" name="pattern6"><img src={require("../images/pattern/pattern6.png")} alt="bootstrap business templates" /></a>
                        <a href="#" name="pattern7"><img src={require("../images/pattern/pattern7.png")} alt="bootstrap business templates" /></a>
                        <a href="#" name="pattern8"><img src={require("../images/pattern/pattern8.png")} alt="bootstrap business templates" /></a>
                        <a href="#" name="pattern9"><img src={require("../images/pattern/pattern9.png")} alt="bootstrap business templates" /></a>
                        <a href="#" name="pattern10"><img src={require("../images/pattern/pattern10.png")} alt="bootstrap business templates" /></a>
                        
                        <a href="#" name="pattern11"><img src={require("../images/pattern/pattern11.png")} alt="bootstrap business templates" /></a>
                        <a href="#" name="pattern12"><img src={require("../images/pattern/pattern12.png")} alt="bootstrap business templates" /></a>
                        <a href="#" name="pattern13"><img src={require("../images/pattern/pattern13.png")} alt="bootstrap business templates" /></a>
                        <a href="#" name="pattern14"><img src={require("../images/pattern/pattern14.png")} alt="bootstrap business templates" /></a>
                        <a href="#" name="pattern15"><img src={require("../images/pattern/pattern15.png")} alt="bootstrap business templates" /></a>
                        
                        <a href="#" name="pattern16"><img src={require("../images/pattern/pattern16.png")} alt="bootstrap business templates" /></a>
                        <a href="#" name="pattern17"><img src={require("../images/pattern/pattern17.png")} alt="bootstrap business templates" /></a>
                        <a href="#" name="pattern18"><img src={require("../images/pattern/pattern18.png")} alt="bootstrap business templates" /></a>
                        <a href="#" name="pattern19"><img src={require("../images/pattern/pattern19.png")} alt="bootstrap business templates" /></a>
                        <a href="#" name="pattern20"><img src={require("../images/pattern/pattern20.png")} alt="bootstrap business templates" /></a>    
                    </div>
                    </div>
                </div>
                <span id="themesBtn"></span>
            </div> 
        )
    }
}
export default Themes;