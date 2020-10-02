import React from 'react'
import "./Select.css";
import categories from './Categories';

import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';


export default function SelectParams(props) {

    function returnMenuItems() {
        let menuItems = [];
        for(let i = 1; i <= 50; i++){
            menuItems.push(
                <MenuItem key={i} value={i}>
                    { i }
                </MenuItem>
                )
        }
        return menuItems;
    }

    return (
        <div className="Select">

{/* Number of Questions */}
            <FormControl>
                <InputLabel id="demo-mutiple-name-label">Questions</InputLabel>
                <Select
                labelId="demo-mutiple-name-label"
                id="demo-mutiple-name"
                value={props.numberOfQuestions}
                onChange={(e) => props.setNumberOfQuestions(e.target.value)}
                >
                    {returnMenuItems().map(number => number)}
                </Select>
            </FormControl>
{/* Number of Questions */}

{/* Select Category */}
            <FormControl>
                <InputLabel id="demo-mutiple-name-label">Category</InputLabel>
                <Select
                labelId="demo-mutiple-name-label"
                id="demo-mutiple-name"
                value={props.category}
                onChange={(e) => props.setCategory(e.target.value)}
                >
                {categories.map((category, index) => (
                    <MenuItem key={index + 9} value={index + 9}>
                    {category}
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
{/* Select Category */}

{/* Select Type */}
            <FormControl>
                <InputLabel id="demo-mutiple-name-label">Type</InputLabel>
                <Select
                    labelId="demo-mutiple-name-label"
                    id="demo-mutiple-name"
                    value={props.type}
                    onChange={(e) => props.setType(e.target.value)}
                >
                    <MenuItem value={"multiple"}>Multiple Choice</MenuItem>
                    <MenuItem value={"boolean"}>True / False</MenuItem>
                </Select>
            </FormControl>
{/* Select Type */}

{/* Select Difficulty */}
            <FormControl>
                <InputLabel id="demo-mutiple-name-label">Difficulty</InputLabel>
                <Select
                labelId="demo-mutiple-name-label"
                id="demo-mutiple-name"
                value={props.difficulty}
                onChange={(e) => props.setDifficulty(e.target.value)}
                >
                    <MenuItem value={"easy"}>Easy</MenuItem>
                    <MenuItem value={"medium"}>Medium</MenuItem>
                    <MenuItem value={"hard"}>Hard</MenuItem>
                </Select>
            </FormControl>
{/* Select Difficulty */}
        </div>
    )
}